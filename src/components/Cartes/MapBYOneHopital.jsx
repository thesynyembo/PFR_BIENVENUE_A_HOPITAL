import axios from "axios"
import mapboxgl from "mapbox-gl"
import styled from "styled-components"
import React, { useState, useEffect } from "react"
import {formatHopital, formatSpecialite} from "../../services/api/helper"
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"
import Loading from '../Contenair/loader'

import {  useParams} from "react-router-dom";


const DivMap = styled.div`
.map{
height:200px;
}
`;


export default function Map() {

  mapboxgl.accessToken =
    "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";
  const [mapRef, setMapRef] = useState(React.createRef());
  let { id } = useParams();
  const params = { id };
  console.log(params.id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/Map/${params.id}`)
      .then((res) => {
        //setLoad(true);
        //console.log(res.data);
        createMap(mapRef, formatHopital(res.data));
        // createMap(mapref)
      })
      .catch((erreur) => console.log(erreur));
  }, []);
  
  function createMap(mapRef, data) {
    const map = new mapboxgl.Map({
      container: mapRef.current,      
      style: 'mapbox://styles/mapbox/streets-v11',
      // style: "mapbox://styles/mapbox/light-v10",
      center: [15.322222, -4.325],
      zoom: 11,
    });


    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");     
    map.on("load", function () {
    map.addSource("states", formatGeoJson(data));
      // Ajoutez un calque montrant les lieux.
      map.addLayer({
        id: "states",
        type: "symbol",
        source: "states",
        layout: {
          'icon-image': 'hospital-15',
          'icon-size': 1.5,
          'icon-allow-overlap': true,
        },
        paint: {
          'icon-color' : '#FF4858',
       }
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
  .setHTML("<div class='pop'> <strong>"+feature.properties.name+"</strong></div>")
  .addTo(map);

  map.getCanvas().style.cursor = features.length ? 'pointer' : '';
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


  // if (load === false) {
  //   return <Loading/>;
  // }
  return (
    <>
      <DivMap style={{ height: ""}}>
        <div className="map" ref={mapRef} />
      </DivMap>
   </>
  );
}