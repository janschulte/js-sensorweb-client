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
var Map = {

	timeseriesCache : [],

	init : function() {
		$(document).ready(function() {
			$('[data-action="provider"]').click(function() {
				Map.openProviderList();
			});
			$('[data-action="locate"]').click(function() {
				Map.locateUser();
			});
			// SOMAP2014 ////////
			$.wpsSetup({
				proxy : {
					url : "/wps_proxy/wps_proxy?url=",
					type : "parameter"
				},
				configuration : {
					url : "http://192.168.1.136:8080/wps/WebProcessingService"
				}
			});
			$('[data-action="wps"]').click(function() {
				debugger;
				Modal.show('wps');
				var formBuilder = new FormBuilder();
				formBuilder.clearForm($('#wps-form'));
				var hidden = false;
				formBuilder.buildExecuteForm($('#wps-form'), {
					"processVersion" : "1.0",
					"statusSupported" : true,
					"storeSupported" : true,
					"identifier" : "org.n52.wps.server.r.demo.interpolation.jsclient",
//					"title" : "GECA-Intercomparison",
//					"abstract" : "GECA Satellite Data Intercomparison.",
					"dataInputs" : [
							{
								"maxOccurs" : 1,
								"minOccurs" : 1,
								"identifier" : "data",
								"title" : "Data",
//								"abstract" : "The first dataset for the intercomparison",
								"complexData" : {
									"default" : {
										"formats" : [ {
											"mimeType" : "application/json"
//											"schema" : "http://schema.geoviqua.org/geca/0.1/resolvableDataset.xsd"
										} ]
									},
									"supported" : {
										"formats" : [ {
											"mimeType" : "application/json"
//											"schema" : "http://schema.geoviqua.org/geca/0.1/resolvableDataset.xsd"
										} ]
									}
								},
								"predefinedValue": JSON.stringify({
									"values": [
									   		{
									   			"coords": [
									   				7.2044419705086735,
									   				51.266086785330224
									   			],
									   			"lastValue": {
									   				"timestamp": 1371064950000,
									   				"value": 20.3
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.365665095102475,
									   				51.14334954184367
									   			],
									   			"lastValue": {
									   				"timestamp": 1371064050000,
									   				"value": 19.6
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.100552165082708,
									   				51.087732979584395
									   			],
									   			"lastValue": {
									   				"timestamp": 1370921850000,
									   				"value": 10
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.320281676860971,
									   				51.22548556899834
									   			],
									   			"lastValue": {
									   				"timestamp": 1372980150000,
									   				"value": 16.1
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.40096795458942,
									   				51.17103846368366
									   			],
									   			"lastValue": {
									   				"timestamp": 1372720950000,
									   				"value": 13.1
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.0602992201626185,
									   				51.0966135017852
									   			],
									   			"lastValue": {
									   				"timestamp": 1372979250000,
									   				"value": 16.7
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.107294690952992,
									   				51.225894610660866
									   			],
									   			"lastValue": {
									   				"timestamp": 1371065850000,
									   				"value": 21.4
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.299968716891246,
									   				51.200402890202945
									   			],
									   			"lastValue": {
									   				"timestamp": 1372994550000,
									   				"value": 15.8
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.186580962308821,
									   				51.06958203108305
									   			],
									   			"lastValue": {
									   				"timestamp": 1372909500000,
									   				"value": 13.9
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.530828579490191,
									   				51.09836102312226
									   			],
									   			"lastValue": {
									   				"timestamp": 1379323350000,
									   				"value": 9.9
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.179744487634198,
									   				51.06765508608393
									   			],
									   			"lastValue": {
									   				"timestamp": 1372923450000,
									   				"value": 16.1
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.399410121794452,
									   				51.17167137941307
									   			],
									   			"lastValue": {
									   				"timestamp": 1379324250000,
									   				"value": 11.5
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.283090752705482,
									   				51.090121367969026
									   			],
									   			"lastValue": {
									   				"timestamp": 1372995450000,
									   				"value": 15.3
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.184148868629406,
									   				51.218726535948775
									   			],
									   			"lastValue": {
									   				"timestamp": 1379326950000,
									   				"value": 10
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.226317896922862,
									   				51.19657532705112
									   			],
									   			"lastValue": {
									   				"timestamp": 1372908600000,
									   				"value": 14.1
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.430406594086035,
									   				51.13625558025584
									   			],
									   			"lastValue": {
									   				"timestamp": 1372981950000,
									   				"value": 15.5
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.305941659811078,
									   				51.063698821453556
									   			],
									   			"lastValue": {
									   				"timestamp": 1379327400000,
									   				"value": 11.4
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.239976260754382,
									   				51.075121231895494
									   			],
									   			"lastValue": {
									   				"timestamp": 1379247750000,
									   				"value": 14.3
									   			}
									   		},
									   		{
									   			"coords": [
									   				7.557398313117449,
									   				51.08136930185558
									   			],
									   			"lastValue": {
									   				"timestamp": 1379320650000,
									   				"value": 9.7
									   			}
									   		}
									   	],
									   	"phenomenon": "3",
									   	"bounds": {
									   		"_southWest": {
									   			"lat": 50.77033932897995,
									   			"lng": 6.87744140625
									   		},
									   		"_northEast": {
									   			"lat": 51.55572834577049,
									   			"lng": 7.738494873046875
									   		}
									   	},
									   	"pixelBounds": {
									   		"min": {
									   			"x": 136080,
									   			"y": 87113
									   		},
									   		"max": {
									   			"x": 136707,
									   			"y": 88025
									   		}
									   	}
									   }),
								"hidden" : hidden
							}],
					"processOutputs" : [ {
						"identifier" : "image",
						"title" : "Report",
						"abstract" : "The intercomparison report",
						"selected" : true
					},
					{
						"identifier" : "imageBounds",
						"title" : "Report",
						"abstract" : "The intercomparison report",
						"selected" : true
					}]
					// TODO define correct processOutputs!
				}, execute);
			});
			// SOMAP2014 ////////
		});
		this.loadStations();
		EventManager.subscribe("resetStatus", $.proxy(this.loadStations, this));
		EventManager.subscribe("clusterStations", $.proxy(this.loadStations, this));
		EventManager.subscribe("timeseries:showInMap", $.proxy(this.showTsInMap, this));
	},
	
	createMap : function() {
		if ($("#map").length > 0) {
			this.map = L.map('map');
			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(this.map);
			L.Icon.Default.imagePath = 'images';
			this.map.whenReady(function(map) {
				// locate user methods
				this.map.on('locationfound', this.onLocationFound);
				this.map.on('locationerror', this.onLocationError);
			}, this);
			L.control.scale().addTo(this.map);
			new L.Control.GeoSearch({
    			url: 'http://nominatim.openstreetmap.org/search?format=json&q={s}',
				jsonpParam: 'json_callback',
				propertyName: 'display_name',
				propertyLoc: ['lat','lon'],
				position: 'topcenter',
				minLength: 2,
				provider: new L.GeoSearch.Provider.OpenStreetMap(),
    			zoomLevel: 13
			}).addTo(this.map);
		}
	},

	/*----- stations -----*/
	loadStations : function() {
		this.loading(true);
		var provider = Status.get('provider');
		Rest.stations(null, provider.apiUrl, {
			service : provider.serviceID
		}).done($.proxy(function(result) {
			this.createStationMarker(result, Status.get('clusterStations'));
			this.loading(false);
		}, this));
		Rest.phenomena(null, provider.apiUrl, {
			service : provider.serviceID
		}).done($.proxy(this.fillPhenomenaList, this));
	},

	createStationMarker : function(results, clustering) {
		if (!this.map) {
			this.createMap();
		}
		if (this.stationMarkers != null) {
			this.map.removeLayer(this.stationMarkers);
		}
		if (results.length > 0) {
			var firstElemCoord = results[0].geometry.coordinates;
			var topmost = firstElemCoord[1];
			var bottommost = firstElemCoord[1];
			var leftmost = firstElemCoord[0];
			var rightmost = firstElemCoord[0];
			if(clustering) {
				this.stationMarkers = new L.MarkerClusterGroup();
			} else {
				this.stationMarkers = new L.LayerGroup(); 
			};
			that = this;
			$.each(results, $.proxy(function(n, elem) {
				var geom = elem.geometry.coordinates;
				if (!isNaN(geom[0]) || !isNaN(geom[1])) {
					if (geom[0] > rightmost) {
						rightmost = geom[0];
					}
					if (geom[0] < leftmost) {
						leftmost = geom[0];
					}
					if (geom[1] > topmost) {
						topmost = geom[1];
					}
					if (geom[1] < bottommost) {
						bottommost = geom[1];
					}
//					var marker = new L.circleMarker([ geom[1], geom[0] ], {
//						id : elem.properties.id,
//						fillColor: "#FF0000",
//					    color: "#000",
//					    opacity: 1,
//					    weight: 2,
//					    fillOpacity: 0.8
//					});
					var marker = new L.Marker([ geom[1], geom[0] ], {
						id : elem.properties.id
					});
					marker.on('click', $.proxy(that.markerClicked, that));
					this.stationMarkers.addLayer(marker);
				}
			}, this));
			this.map.addLayer(this.stationMarkers);
			this.map.fitBounds([
					[ parseFloat(bottommost), parseFloat(leftmost) ],
					[ parseFloat(topmost), parseFloat(rightmost) ] ]);
		}
	},
	
	createColoredMarkers : function(results) {
		this.json = {};
		this.json.values = [];
		if (this.stationMarkers != null) {
			this.map.removeLayer(this.stationMarkers);
		}
		if (results.length > 0) {
			var firstElemCoord = results[0].getCoordinates();
			var topmost = firstElemCoord[1];
			var bottommost = firstElemCoord[1];
			var leftmost = firstElemCoord[0];
			var rightmost = firstElemCoord[0];
			this.stationMarkers = new L.LayerGroup(); 
			that = this;
			$.each(results, $.proxy(function(n, elem) {
				var geom = elem.getCoordinates();
				if (!isNaN(geom[0]) || !isNaN(geom[1])) {
					if (geom[0] > rightmost) {
						rightmost = geom[0];
					}
					if (geom[0] < leftmost) {
						leftmost = geom[0];
					}
					if (geom[1] > topmost) {
						topmost = geom[1];
					}
					if (geom[1] < bottommost) {
						bottommost = geom[1];
					}
					var marker;
					this.json.values.push({
						coords: elem.getCoordinates(),
						lastValue: elem.getLastValue() 
					});
					if (elem.isCurrent()) {
						var interval = this.getMatchingInterval(elem);
						var fillcolor = interval && interval.color ? interval.color : Settings.defaultMarkerColor;
						marker = new L.circleMarker([ geom[1], geom[0] ], {
							id : elem.getStationId(),
							fillColor : fillcolor,
						    color: "#000",
						    opacity: 1,
						    weight: 2,
						    fillOpacity: 0.8
						});
					} else {
						marker = new L.Marker([ geom[1], geom[0] ], {
							id : elem.getStationId()
						});
					}
					marker.on('click', $.proxy(that.markerClicked, that));
					this.stationMarkers.addLayer(marker);
				}
			}, this));
			this.map.addLayer(this.stationMarkers);
			this.map.fitBounds([
					[ parseFloat(bottommost), parseFloat(leftmost) ],
					[ parseFloat(topmost), parseFloat(rightmost) ] ]);
		}
		this.json['phenomenon'] = Map.selectedPhenomenon;
		this.json['bounds'] = this.map.getBounds();
		this.json['pixelBounds'] = this.map.getPixelBounds();
	},
	
	getMatchingInterval : function(elem) {
		var matchedInterval = null;
		if (elem.getLastValue() && elem.getStatusIntervals()) {
			var lastValue = elem.getLastValue().value;
			$.each(elem.getStatusIntervals(), function(idx, interval) {
				if (interval.upper == null) {
					interval.upper = Number.MAX_VALUE;
				}
				if (interval.lower == null) {
					interval.lower = Number.MIN_VALUE;
				}
				if (!isNaN(interval.upper) && !isNaN(interval.lower) && parseFloat(interval.lower) < lastValue && lastValue < parseFloat(interval.upper)){
					matchedInterval = interval;
					return false;
				}
			});
		}
		return matchedInterval;
	},
	
	loading : function(loading) {
		Button.setLoadingButton($('[data-action="provider"]'), loading);
	},

	markerClicked : function(marker) {
		this.loading(true);
		var apiUrl = Status.get('provider').apiUrl;
		Rest.stations(marker.target.options.id, apiUrl).done($.proxy(function(results) {
			var phenomena = {};
			$.each(results.properties.timeseries, function(id, elem) {
				if(Map.selectedPhenomenon == null || Map.selectedPhenomenon == elem.phenomenon.id) {
					if(!phenomena.hasOwnProperty(elem.phenomenon.id)) {
						phenomena[elem.phenomenon.id] = {};
						phenomena[elem.phenomenon.id].timeseries = [];
						phenomena[elem.phenomenon.id].label = elem.phenomenon.label;
					}
					phenomena[elem.phenomenon.id].timeseries.push({
						id : id,
						internalId : TimeSeries.createInternalId(id, apiUrl), 
						selected : Status.hasTimeseriesWithId(id),
						procedure : elem.procedure.label
					});
				}
			});
			this.loading(false);
			Modal.show("station", {
				"name" : results.properties.label,
				"phenomena" : $.map(phenomena, function(elem) {
					return elem;
				})
			});
			$('#confirmTimeseriesSelection').on('click', function() {
				$.each($('.tsItem').has(':checked'), function(id, elem) {
					Map.addTimeseries(Map.timeseriesCache[$(this).data('internalid')]);
				});
			});
			if ($('.tsItem').length > 1) {
				$('.selectAllOption').show();
				$('.selectAllOption .checkbox').on('click', function(event){
					var checked = $(event.currentTarget).find(':checkbox').is(':checked');
					$.each($('.tsItem'), function(idx, elem){
						$(elem).find(':checkbox').prop('checked', checked);
					});
				});
			} else {
				$('.tsItem').find(':checkbox').prop('checked', true);
			};
			$.each(phenomena, function(id, elem) {
				$.each(elem.timeseries, function(id, elem) {
					if (Map.timeseriesCache[elem.internalId] == null) {
						Rest.timeseries(elem.id, apiUrl).done(function(timeseries) {
							Map.updateTsEntry(timeseries);
						});
					} else {
						Map.updateTsEntry(Map.timeseriesCache[elem.internalId]);
					}
				});
			});
		}, this));
	},

	updateTsEntry : function(timeseries) {
		$('[data-id=' + timeseries.getTsId() + ']').addClass('loaded').find(':input').prop('disabled', false);
		var lastValue = timeseries.getLastValueFormatted();
		if (lastValue) {
			$('[data-id=' + timeseries.getTsId() + ']').find('.lastValue').text(lastValue).show();
		}
		Map.timeseriesCache[timeseries.getInternalId()] = timeseries;
	},
	
	addTimeseries : function(timeseries) {
		Pages.navigateToChart();
		TimeSeriesController.addTS(timeseries);
	},

	/*----- stations -----*/
	fillPhenomenaList : function(results) {
		Pages.togglePhenomenon(false);
		$('.phenomena-entry').empty();
		this.createDefaultPhenomenaEntry();
		$.each(results, $.proxy(function(index, elem) {
			var html = this.createPhenomenaEntry(elem);
			$('.phenomena-entry').append(html);
			$('[data-id=' + elem.id + ']').click($.proxy(function(event) {
				$('.phenomena-entry').find('.selected').removeClass('selected');
				$('[data-id=' + elem.id + ']').find('.item').addClass('selected').addClass('loadPhen');
				this.selectedPhenomenon = elem.id;
				var coloredMarkers = Status.get('concentrationMarker');
				var provider = Status.get('provider');
				Rest.abortRequest(this.phenomenonPromise);
				if (coloredMarkers) {
					this.phenomenonPromise = Rest.timeseries(null, provider.apiUrl, {
						service : provider.serviceID,
						phenomenon : elem.id,
						expanded: true,
						force_latest_values : true,
						status_intervals : true
					}).done($.proxy(function(result) {
						$.each(result, function(idx, elem) {
							Map.timeseriesCache[elem.getInternalId()] = elem;
						});
						Pages.togglePhenomenon(false, elem.label);
						this.createColoredMarkers(result);
					}, this)).always($.proxy(function() {
						$('[data-id=' + elem.id + ']').find('.item').removeClass('loadPhen');
					}));
				} else {
					this.phenomenonPromise = Rest.stations(null, provider.apiUrl, {
						service : provider.serviceID,
						phenomenon : elem.id
					}).done($.proxy(function(result){
						Pages.togglePhenomenon(false, elem.label);
						this.createStationMarker(result, false);
					}, this)).always($.proxy(function() {
						$('[data-id=' + elem.id + ']').find('.item').removeClass('loadPhen');
					}));
				}
			}, this));
		}, this));
	},
	
	createPhenomenaEntry : function(phenomenon) {
		this.selectedPhenomenon = null;
		var html = Template.createHtml("phenomenon-entry", {
			id : phenomenon.id,
			label : phenomenon.label
		});
		return html;
	},
	
	createDefaultPhenomenaEntry : function() {
		$('.phenomena-entry').append(this.createPhenomenaEntry({
			id : "all",
			label : "All phenomenons"
		}));
		$('[data-id=all]').click($.proxy(function(event, bla){
			$('.phenomena-entry').find('.selected').removeClass('selected');
			$('[data-id=all]').find('.item').addClass('selected');
			Pages.togglePhenomenon(false);
			Map.loadStations();
		}));
		$('[data-id=all]').find('.item').addClass('selected');
	},
	
	/*----- provider list -----*/
	openProviderList : function() {
		this.loading(true);
		this.apiConnectCounter = Object.keys(Settings.restApiUrls).length;
		this.providerList = [];
		$.each(Settings.restApiUrls, $.proxy(function(url, elem) {
			Rest.services(url).done($.proxy(this.createProviderList, this, url));
		}, this));
	},

	createProviderList : function(apiUrl, results) {
		this.apiConnectCounter--;
		var currProv = Status.get('provider');
		$.each(results, $.proxy(function(idx, elem) {
			var blacklisted = false; 
			$.each(Settings.providerBlackList, $.proxy(function(idx, black) {
				if(black.serviceID == elem.id && black.apiUrl == apiUrl) {
					blacklisted = true;
					return;
				}
			}, this));
			if (!blacklisted) {
				this.providerList.push({
					"name" : elem.label,
					"version" : elem.version,
					"stations" : elem.quantities.stations,
					"timeseries" : elem.quantities.timeseries,
					"phenomena" : elem.quantities.phenomena,
					"url" : elem.serviceUrl,
					"apiUrl" : apiUrl,
					"id" : elem.id,
					"selected" : currProv.serviceID == elem.id && currProv.apiUrl == apiUrl,
					"type" : elem.type
				});
			};
		}, this));
		if(this.apiConnectCounter == 0) {
			var data = {
				"providers" : this.providerList
			};
			this.loading(false);
			Modal.show('providers', data);
			$('.providerItem').on('click', function() {
				var id = $(this).data('id');
				var apiUrl = $(this).data('api');
				Status.set('provider', {
					serviceID : id,
					apiUrl : apiUrl
				});
				Map.loadStations();
				Modal.hide();
			});
		}
	},

	/*----- locate user -----*/
	locateUser : function() {
		Button.setLoadingButton($('[data-action="locate"]'), true);
		this.map.locate({
			setView : true,
			maxZoom : Settings.zoom
		});
	},

	onLocationFound : function(e) {
		Button.setLoadingButton($('[data-action="locate"]'), false);
		var popup = L.popup().setLatLng(e.latlng).setContent('<p>Here is your current location</p>');
		Map.map.openPopup(popup);
	},

	onLocationError : function(e) {
		Button.setLoadingButton($('[data-action="locate"]'), false);
		alert(e.message);
	},
	
	showTsInMap : function(event, ts) {
		Pages.navigateToMap();
		var coords = ts.getCoordinates(),
		pos = L.latLng(coords[1], coords[0]),
		popup = L.popup({
			autoPan : false
		}).setLatLng(pos);
		var content = Template.createHtml("station-popup", {
			station : ts.getStationLabel(),
			timeseries : ts.getLabel(),
			service : ts.getServiceLabel()
		});
		popup.setContent(content);
		popup.openOn(Map.map);
		Map.map.setView(pos, Settings.zoom);
	}
};
