import React from 'react'
import { Circle, Popup } from "react-leaflet";
import numeral from 'numeral';
import { useContext } from 'react';

import { CounterStateContext } from '../App';

export const Sorter = (array)=>{
  let sortedArray = array.sort((a,b)=>{
    if(a.cases>b.cases){
      return -1;
    }
    else{
      return 1;
    }
  })

  return sortedArray;
}

export const SorterGraphData = (array)=>{

  let sortedArray = array.map((v,i,a) => {
    let item = v- (a[i-1] || 0);
    if(item>=0){
      return item;
    }
    else{
      return (-1* item)
    }
  })
  
  return sortedArray;
}

const caseTypeColors = {
  "CoronaVirus Cases":{
    hex:"#CC1034",
    multiplier:8000
  },

  "Recovered":{
    hex:"#7dd1d",
    multiplier:12000
  },

  "Deaths":{
    hex:"#fb4443",
    multiplier:20000
  }
}

const caseValueConvertor = (caseValue)=>{
  if(caseValue === "CoronaVirus Cases"){
    return "cases";
  }
  else if(caseValue === "Recovered"){
    return "recovered";
  }
  else if(caseValue === "Deaths"){
    return "deaths"
  }
}
export const ShowDataOnMap = () =>{
  const state = useContext(CounterStateContext);
  let value = caseValueConvertor(state.caseValue);
  const {countryData} = state;

  return (
    countryData.map((country)=>{

      return (
      <>
        <Circle
          center = {[country.countryInfo.lat, country.countryInfo.long]}
          fillColor = {caseTypeColors[state.caseValue].hex}
          color = {caseTypeColors[state.caseValue].hex}
          radius = {Math.sqrt(country[value] * caseTypeColors[state.caseValue].multiplier)}
          fillOpacity = {0.4}
          >

            <Popup>
              <div>
                <div  className = "info-flag" style = {{backgroundImage :`url(${country.countryInfo.flag})`}}></div>
              
              <div>{country.country}, {country.continent}</div>
              <div>Cases: {numeral(country.cases).format("0,0")}</div>
              <div>Recovered: {numeral(country.recovered).format("0,0")}</div>
              <div>Deaths: {numeral(country.deaths).format("0,0")}</div>
            </div>
            </Popup>
          </Circle>  
      </>
      )
    })
  )

}

