ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([57.930995, 5.857135, 98.704286, 35.992303]);
var wms_layers = [];


        var lyr_ESRIPhysical_0 = new ol.layer.Tile({
            'title': 'ESRI Physical',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_BaseMapGrey_1 = new ol.layer.Tile({
            'title': 'Base Map (Grey)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Sugarcane_3 = new ol.format.GeoJSON();
var features_Sugarcane_3 = format_Sugarcane_3.readFeatures(json_Sugarcane_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sugarcane_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sugarcane_3.addFeatures(features_Sugarcane_3);
var lyr_Sugarcane_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sugarcane_3, 
                style: style_Sugarcane_3,
                popuplayertitle: "Sugarcane ",
                interactive: false,
    title: 'Sugarcane <br />\
    <img src="styles/legend/Sugarcane_3_0.png" /> 10.000 - 75.000 Tons<br />\
    <img src="styles/legend/Sugarcane_3_1.png" /> 75.000 - 80.000 Tons<br />\
    <img src="styles/legend/Sugarcane_3_2.png" /> 80.000 - 100.000 Tons<br />\
    <img src="styles/legend/Sugarcane_3_3.png" /> 100.000 - 125.000 Tons<br />\
    <img src="styles/legend/Sugarcane_3_4.png" /> 125.000 - 150.000 Tons<br />\
    <img src="styles/legend/Sugarcane_3_5.png" /> 150.000 - 300.000 Tons<br />\
    <img src="styles/legend/Sugarcane_3_6.png" /> 300.000 - 500.000 Tons<br />\
    <img src="styles/legend/Sugarcane_3_7.png" /> > 500.000 Tons<br />'
        });
var format_IndiaBoundary_4 = new ol.format.GeoJSON();
var features_IndiaBoundary_4 = format_IndiaBoundary_4.readFeatures(json_IndiaBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IndiaBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndiaBoundary_4.addFeatures(features_IndiaBoundary_4);
var lyr_IndiaBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndiaBoundary_4, 
                style: style_IndiaBoundary_4,
                popuplayertitle: "India Boundary",
                interactive: false,
                    title: '<img src="styles/legend/IndiaBoundary_4.png" /> India Boundary'
                });
var format_Buffer50kmClosedIndiaSites_5 = new ol.format.GeoJSON();
var features_Buffer50kmClosedIndiaSites_5 = format_Buffer50kmClosedIndiaSites_5.readFeatures(json_Buffer50kmClosedIndiaSites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Buffer50kmClosedIndiaSites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer50kmClosedIndiaSites_5.addFeatures(features_Buffer50kmClosedIndiaSites_5);
var lyr_Buffer50kmClosedIndiaSites_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer50kmClosedIndiaSites_5, 
                style: style_Buffer50kmClosedIndiaSites_5,
                popuplayertitle: "Buffer 50 km Closed India Sites",
                interactive: false,
                    title: '<img src="styles/legend/Buffer50kmClosedIndiaSites_5.png" /> Buffer 50 km Closed India Sites'
                });
var format_ClosedIndiaSitesSugarcane50km_6 = new ol.format.GeoJSON();
var features_ClosedIndiaSitesSugarcane50km_6 = format_ClosedIndiaSitesSugarcane50km_6.readFeatures(json_ClosedIndiaSitesSugarcane50km_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ClosedIndiaSitesSugarcane50km_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClosedIndiaSitesSugarcane50km_6.addFeatures(features_ClosedIndiaSitesSugarcane50km_6);
var lyr_ClosedIndiaSitesSugarcane50km_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClosedIndiaSitesSugarcane50km_6, 
                style: style_ClosedIndiaSitesSugarcane50km_6,
                popuplayertitle: "Closed India Sites - Sugarcane 50 km",
                interactive: true,
    title: 'Closed India Sites - Sugarcane 50 km<br />\
    <img src="styles/legend/ClosedIndiaSitesSugarcane50km_6_0.png" /> 3.988.400 - 23.574.000 Tons<br />\
    <img src="styles/legend/ClosedIndiaSitesSugarcane50km_6_1.png" /> 895.000 - 3.988.400 Tons <br />\
    <img src="styles/legend/ClosedIndiaSitesSugarcane50km_6_2.png" /> 0 - 895.000 Tons<br />'
        });
var group_Feedstock = new ol.layer.Group({
                                layers: [lyr_Sugarcane_3,],
                                fold: "open",
                                title: "Feedstock"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_ESRIPhysical_0,lyr_BaseMapGrey_1,lyr_GoogleSatellite_2,],
                                fold: "open",
                                title: "Base map "});

lyr_ESRIPhysical_0.setVisible(true);lyr_BaseMapGrey_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Sugarcane_3.setVisible(true);lyr_IndiaBoundary_4.setVisible(true);lyr_Buffer50kmClosedIndiaSites_5.setVisible(true);lyr_ClosedIndiaSitesSugarcane50km_6.setVisible(true);
var layersList = [group_Basemap,group_Feedstock,lyr_IndiaBoundary_4,lyr_Buffer50kmClosedIndiaSites_5,lyr_ClosedIndiaSitesSugarcane50km_6];
lyr_Sugarcane_3.set('fieldAliases', {'Sugarcane': 'Sugarcane', });
lyr_IndiaBoundary_4.set('fieldAliases', {'fid_1': 'fid_1', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', });
lyr_Buffer50kmClosedIndiaSites_5.set('fieldAliases', {'Site Name': 'Site Name', 'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'Site Statu': 'Site Statu', });
lyr_ClosedIndiaSitesSugarcane50km_6.set('fieldAliases', {'Site Name': 'Site Name', 'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'Site Statu': 'Site Statu', 'Sugarcane': 'Sugarcane', 'N° TOP': 'N° TOP', });
lyr_Sugarcane_3.set('fieldImages', {'Sugarcane': 'TextEdit', });
lyr_IndiaBoundary_4.set('fieldImages', {'fid_1': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_Buffer50kmClosedIndiaSites_5.set('fieldImages', {'Site Name': 'TextEdit', 'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'Site Statu': 'TextEdit', });
lyr_ClosedIndiaSitesSugarcane50km_6.set('fieldImages', {'Site Name': 'TextEdit', 'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'Site Statu': 'TextEdit', 'Sugarcane': 'TextEdit', 'N° TOP': 'TextEdit', });
lyr_Sugarcane_3.set('fieldLabels', {'Sugarcane': 'inline label - always visible', });
lyr_IndiaBoundary_4.set('fieldLabels', {'fid_1': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', });
lyr_Buffer50kmClosedIndiaSites_5.set('fieldLabels', {'Site Name': 'no label', 'Site Code': 'no label', 'Company Na': 'no label', 'Site City': 'no label', 'Site State': 'no label', 'Site Count': 'no label', 'My Site In': 'no label', 'My Site _1': 'no label', 'Site Statu': 'no label', });
lyr_ClosedIndiaSitesSugarcane50km_6.set('fieldLabels', {'Site Name': 'inline label - always visible', 'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'Site Statu': 'inline label - always visible', 'Sugarcane': 'inline label - always visible', 'N° TOP': 'inline label - always visible', });
lyr_ClosedIndiaSitesSugarcane50km_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});