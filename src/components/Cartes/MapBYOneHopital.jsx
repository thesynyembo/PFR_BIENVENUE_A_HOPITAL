import axios from 'axios'
import mapboxgl from "mapbox-gl";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {formatHopital, formatSpecialite} from "../../services/api/helper";

const DivMap = styled.div`
`;

export default function Map() {

  mapboxgl.accessToken =
    "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";
  const [mapRef, setMapRef] = useState(React.createRef());

  const [dataHopital, setDataHopital] = useState([]);
 

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Map`)
      .then((res) => {
        setDataHopital(res.data);
        console.log(res.data);
        createMap(mapRef, formatHopital(res.data), formatSpecialite(res.data));
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
    })   

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");   
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  } 

  return (
    <>
      <DivMap style={{ height: ""}}>
        <div className="map-container" ref={mapRef} />
      </DivMap>
   </>
  );
}