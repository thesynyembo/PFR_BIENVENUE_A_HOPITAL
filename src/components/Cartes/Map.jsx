import axios from "axios";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {formatHopital, formatSpecialite} from "../../services/api/helper";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import CardDetailHopital from '../Contenair/CardDetailHopital';
import Loading from '../Contenair/loader'

const DivMap = styled.div`
  width: 100%;
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
 

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Map`)
      .then((res) => {
        setDataHopital(res.data);
        console.log(res.data);
        createMap(mapRef, formatHopital(res.data), formatSpecialite(res.data));
        setLoad(true);
        // createMap(mapref)
      })
      .catch((erreur) => console.log(erreur));
  }, []);
  
  function createMap(mapRef, data) {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
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
          "icon-image": "town-hall-15",
          "icon-allow-overlap": true,
        },
      });
    });
    
        // Lorsqu'un événement de clic se produit sur une entité dans la couche des lieux, ouvrez une fenêtre contextuelle
    // l'emplacement de la fonctionnalité, avec la description HTML de ses propriétés.
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
  return (
    <>
      <DivMap style={{ height: ""}}>
        <div className="map-container" ref={mapRef} />  
          {displayDetailHopital ? <CardDetailHopital hopital= {selectHopital} specialite= {selectHopital} visible={displayDetailHopital} /> : ""}
      </DivMap>
      
    </>
  );
}