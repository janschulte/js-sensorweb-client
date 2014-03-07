/*
 * Copyright (C) 2014-2014 52°North Initiative for Geospatial Open Source
 * Software GmbH
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 as published
 * by the Free Software Foundation.
 *
 * If the program is linked with libraries which are licensed under one of
 * the following licenses, the combination of the program with the linked
 * library is not considered a "derivative work" of the program:
 *
 *     - Apache License, version 2.0
 *     - Apache Software License, version 1.0
 *     - GNU Lesser General Public License, version 3
 *     - Mozilla Public License, versions 1.0, 1.1 and 2.0
 *     - Common Development and Distribution License (CDDL), version 1.0
 *
 * Therefore the distribution of the program linked with libraries licensed
 * under the aforementioned licenses, is permitted by the copyright holders
 * if the distribution is compliant with both the GNU General Public
 * License version 2 and the aforementioned licenses.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General
 * Public License for more details.
 */
var PermalinkController = {
		
	timespanParam : 'timespan',
	timeseriesParam : 'timeseries',

	init : function() {
		this.checkTimespan();
		this.checkTimeseries();
	},
	
	checkTimespan : function() {
		var timespan = this.getUrlParameter('timespan');
		if (timespan) {
			Status.set('timespan', Time.createTimespan(timespan));
		}
	},
	
	createTimespan : function() {
		var timespan = TimeController.currentTimespan;
		return this.timespanParam + "=" + Time.getRequestTimespan(timespan.from, timespan.till);
	},
	
	checkTimeseries : function() {
		var timeseries = this.getUrlParameter('timeseries');
		if (timeseries != null) {
			Status.clearTimeseries();
			$.each(timeseries.split(','), function(idx, id) {
				Status.addTimeseriesById(id);
			});
		}
	},
	
	createTimeseries : function() {
		var tsList = $.map(TimeSeriesController.getTimeseriesCollection(), function(ts, id){
			return id;
		});
		if (tsList.length > 0) {
			var timeseries = tsList.join(",");
			return this.timeseriesParam + "=" + timeseries;
		};
		return "";
	},

	getUrlParameter : function(sParam) {
		var hash = window.location.hash;
		hash = hash.substring(hash.indexOf('?') + 1);
		var parameters = hash.split('&');
		for (var i = 0; i < parameters.length; i++) {
			var sParameterName = parameters[i].split('=');
			if (sParameterName[0] == sParam) {
				return sParameterName[1];
			}
		}
	},
	
	createPermalink : function() {
		var url = window.location.href + "?";
		url = url + this.createTimespan();
		url = url + "&" + this.createTimeseries();
		return url;
	}
};