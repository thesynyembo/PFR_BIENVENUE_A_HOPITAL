import axios from "axios";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {formatHopital, formatSpecialite} from "../../services/api/helper";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import CardDetailHopital from '../Contenair/CardDetailHopital';
import Loading from '../Contenair/loader'
import * as turf from '@turf/turf'

const DivMap = styled.div`
  width: 100%;
  span{
    color: red;
    text-align:center;
  }
  .distance-container {
    position: absolute;
    left: 10px;
    z-index: 1;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    size: 15px;
    font-weight: 500;   
    font-style:italic;
    line-height: 18px;
    display: block;
    margin-top: 10px;
    margin-left: 12px;
    padding: 10px 10px;
    border-radius: 3px;
    box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.3);
    }
`;


export default function Map() {

  mapboxgl.accessToken =
    "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";
  const [mapRef, setMapRef] = useState(React.createRef());
  const [displayDetailHopital,setdisplayDetailHopital] =  useState(false);
  const [selectHopital, setselectHopital] = useState({
    name : '',
    description :''
  });
  const [dataHopital, setDataHopital] = useState([]);
  const [load, setLoad] = useState(false);  
  const [distance, setDisatnce] = useState([]);
 

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Map`)
      .then((res) => {
        setLoad(true);
        setDataHopital(res.data);
        console.log(res.data);
        createMap(mapRef, formatHopital(res.data));
        // createMap(mapref)
      })
      .catch((erreur) => console.log(erreur));
  }, []);
  
  function createMap(mapRef, data) {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [15.322222, -4.325],
      zoom: 11,
    });
    const customData = formatDataHopital(data);    
    function forwardGeocoder(query) {
      let matchingFeatures = [];
      for (let i = 0; i < customData.features.length; i++) {
        let feature = customData.features[i];
        // gérer les requêtes avec une capitalisation différente de celle des données source en appelant toLowerCase ()
        if (
          feature.properties.name.toLowerCase().search(query.toLowerCase()) !==
          -1
        ) {
          // ajouter un emoji d'arbre comme préfixe pour les résultats de données personnalisés
          // en utilisant le format carmen geojson: https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
          feature["place_name"] = feature.properties.name;
          feature["center"] = feature.geometry.coordinates;
          feature["place_type"] = ["park"];
          matchingFeatures.push(feature);
        }
      }
      return matchingFeatures;
    }    
     map.addControl(
       new MapboxGeocoder({
         accessToken: mapboxgl.accessToken,
         countries: "CD",
         localGeocoder: forwardGeocoder,
         zoom: 14,
         placeholder: "Rechercher un hôpital",
         mapboxgl: mapboxgl,
         render : function(item){
           return "<div>"+item.properties.name+"</div>"
                  
         }
       })
    ); 
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");   
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );  
    map.on("load", function () {
      map.addSource("states", formatGeoJson(data));
      // Ajoutez un calque montrant les lieux.
      map.addLayer({
        id: "states",
        type: "symbol",
        source: "states",
        layout: {
          'icon-image': 'hospital-15',
          'icon-allow-overlap': true
        },
        paint: { }
      });
      map.addLayer({
        id: 'states',
        type: 'symbol',
        source: "states",
        layout: {
          'icon-image': 'library-15'
        },
        paint: { }
      });
    });
// Popup
const popup = new mapboxgl.Popup();
map.on('mousemove', function(e) {
  const features = map.queryRenderedFeatures(e.point, { layers: ['states'] });
  if (!features.length) {
    popup.remove();
    return;
  }
  const feature = features[0];
  popup.setLngLat(feature.geometry.coordinates)
  .setHTML("<div className='pop'> <strong><span>Hôpital </span>"+feature.properties.name+"</strong></div>")
  .addTo(map);

  map.getCanvas().style.cursor = features.length ? 'pointer' : '';
});
  
    
    // Lorsqu'un événement de clic se produit sur une entité dans la couche des lieux, ouvrez une fenêtre contextuelle l'emplacement de la fonctionnalité, avec la description HTML de ses propriétés.
    map.on("click", "states", function (e) {
      setselectHopital(e.features[0].properties)
      setdisplayDetailHopital(true)
      localStorage.setItem("visible","1")
    });


 
    // Remplacez le curseur par un pointeur lorsque la souris survole le calque des lieux.
    map.on("mouseenter", "places", function () {
      map.getCanvas().style.cursor = "pointer";
    });
    // Remplacez-le par un pointeur lorsqu'il quitte.
    map.on("mouseleave", "places", function () {
      map.getCanvas().style.cursor = "";
    });
    
   // mapExemple

    // var distanceContainer = document.getElementById('distance');

    // GeoJSON object to hold our measurement features
    // Objet GeoJSON pour contenir nos fonctionnalités de mesure
    var geojson = {
      'type': 'FeatureCollection',
      'features': []
  };

  // Used to draw a line between points
  // Utilisé pour tracer une ligne entre les points
  var linestring = {
      'type': 'Feature',
      'geometry': {
          'type': 'LineString',
          'coordinates': []
      }
  };

  map.on('load', function () {
      map.addSource('geojson', {
          'type': 'geojson',
          'data': geojson
      });

      // Add styles to the map
      map.addLayer({
          id: 'measure-points',
          type: 'circle',
          source: 'geojson',
          paint: {
              'circle-radius': 5,
              'circle-color': '#000'
          },
          filter: ['in', '$type', 'Point']
      });
      map.addLayer({
          id: 'measure-lines',
          type: 'line',
          source: 'geojson',
          layout: {
              'line-cap': 'round',
              'line-join': 'round'
          },
          paint: {
              'line-color': '#000',
              'line-width': 2.5
          },
          filter: ['in', '$type', 'LineString']
      });

      map.on('click', function (e) {
        console.log("thythy",e)
          var features = map.queryRenderedFeatures(e.point, {
              layers: ['measure-points']
          });

          // Remove the linestring from the group
          // So we can redraw it based on the points collection

          // Supprime la chaîne de lignes du groupe
          // Nous pouvons donc le redessiner en fonction de la collection de points
          if (geojson.features.length > 1) geojson.features.pop();

          // Clear the Distance container to populate it with a new value
          // Effacez le conteneur Distance pour le remplir avec une nouvelle valeur
          // document.getElementById('distance').innerHTML('');

          // If a feature was clicked, remove it from the map
          // Si vous avez cliqué sur une entité, supprimez-la de la carte
          if (features.length) {
              var id = features[0].properties.id;
              geojson.features = geojson.features.filter(function (point) {
                  return point.properties.id !== id;
              });
          } else {
              var point = {
                  'type': 'Feature',
                  'geometry': {
                      'type': 'Point',
                      'coordinates': [e.lngLat.lng, e.lngLat.lat]
                  },
                  'properties': {
                      'id': String(new Date().getTime())
                  }
              };

              geojson.features.push(point);
          }

          if (geojson.features.length > 1) {
              linestring.geometry.coordinates = geojson.features.map(
                  function (point) {
                      return point.geometry.coordinates;
                  }
              );

              geojson.features.push(linestring);

              // Populate the distanceContainer with total distance
              // Remplissez le conteneur de distance avec la distance totale
              var value = document.createElement('pre');
              setDisatnce(turf.length(linestring).toLocaleString())
              
              value.textContent =
                  'Total distance: ' + turf.length(linestring).toLocaleString() +'km';
                  // document.getElementById('distance').appendChild(value);
          }

          map.getSource('geojson').setData(geojson);
      });
  });

  map.on('mousemove', function (e) {
      var features = map.queryRenderedFeatures(e.point, {
          layers: ['measure-points']
      });
      // UI indicator for clicking/hovering a point on the map        
      // Indicateur d'interface utilisateur pour cliquer / survoler un point sur la carte
      map.getCanvas().style.cursor = features.length
          ? 'pointer'
          : 'crosshair';
  });
}

  
   function formatDataHopital(data) {
    const dataFormated = {
      features: [],
    };
    for (const element of data) {
      dataFormated.features.push({
        type: "Feature",
        properties: element,
        geometry: {
          coordinates: [element.longitude, element.latitude],
          type: "Point",
        },
      });
    }    return dataFormated;
  }


  function formatGeoJson(data) {
    return {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: formatDataHopital(data)['features'],
      },
    };
  }

  function changementDisplay() {
    setdisplayDetailHopital(false)
  }

  return (
    <>
      <DivMap style={{ height: ""}}>
      {load === false ? (
                    <Loading />
                  ) : (
                    <>
                    <div id="distance" className="distance-container"><strong>Total distance à parcourir :  <span>{distance} </span>km </strong></div>
                    <div className="map-container" ref={mapRef} />  
                    {displayDetailHopital ? <CardDetailHopital hopital= {selectHopital} specialite= {selectHopital} visible={displayDetailHopital}  changementDisplay={changementDisplay} /> : ""}</>

                  )} 
                  </DivMap>
        
      
      
    </>
  );
}