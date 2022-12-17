import React, { useState } from 'react';

import "./Map.css";

import { Map as MapLeaflet, TileLayer} from 'react-leaflet'; 
import { useContext, useRef } from 'react';
import { CounterStateContext } from './App';
import { ShowDataOnMap} from './utils/Sorter';
import { Popup } from 'react-leaflet';
const Mapx = () => {
  let center = [51.505,-0.09];
  let zoom = 2;

  const refContainer = useRef([51.505,-0.09]);
  const zoomContainer = useRef(2);

  const {country, singleCountryInfo} = useContext(CounterStateContext);

  if(country === "worldwide"){
    refContainer.current = center;
    zoomContainer.current = zoom;
  }

  else if(singleCountryInfo.countryInfo){  
    if(singleCountryInfo.countryInfo.iso2 === country){
      refContainer.current = [singleCountryInfo.countryInfo.lat, singleCountryInfo.countryInfo.long];
      zoomContainer.current = 5;
    }
  }
  
    return (
    <div className = "map">
    <MapLeaflet center= {refContainer.current} zoom={zoomContainer.current}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ShowDataOnMap/>


    </MapLeaflet>
    </div>
  )
}

export default Mapx;