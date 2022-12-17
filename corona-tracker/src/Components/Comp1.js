import React, { useContext , useEffect, useState} from 'react'
import {CounterStateContext, CounterDispatchContext} from './App';

import {fetchCountryName_n_Data, fetch_Stats_singleCountry, fetch_state_worldwide, fetchVaccineData, fetchVaccine_worldwide, fetchVaccine_CountryWise} from './Fetch';

import "leaflet/dist/leaflet.css";

import Header from './Header';
import LineGraph from './LineGraph';
import Map from './Map';
import StatsDisplay from './StatsDisplay';
import CountryList from './CountryList';
import HeaderVaccine from './HeaderVaccine';
import LineGraph_vaccine from './LineGraph_vaccine';
import SideBar from './SideBar';
import StatsDisplay_vaccine from './StatsDisplay_vaccine';

function Comp1({isToggleOn}) {

  const state  = useContext(CounterStateContext);
  const dispatch = useContext(CounterDispatchContext);

  const {country} = state;
  useEffect(() => {
    if(isToggleOn)
    {
      fetchCountryName_n_Data().then((resp)=>{
        return resp.json();
      }).then((data)=>{
        dispatch({
          type:"country_info",
          payload:data,
        })
      })
  }
  }, [isToggleOn])
  
  useEffect(() => {
  if(isToggleOn){
    if(country === "worldwide"){
      fetch_state_worldwide()
      .then((resp)=>resp.json())
      .then(data=>{
        dispatch({
          type:"single_country_info",
          payload:data,
        })
        
      })
    }
    else{
      fetch_Stats_singleCountry(country)
      .then((resp)=>resp.json())
      .then(data=>{
      dispatch({
        type:"single_country_info",
        payload:data,
      })
    })}
    }}, [country,isToggleOn])
  
  useEffect(()=>{
    if(!isToggleOn){
      fetchVaccineData()
      .then((resp)=>resp.json())
      .then(data=>{
        dispatch({
          type:"worldwide_VaccineInfo",
          payload:data
        })
      })
    }
  },[isToggleOn])

  
  
  return (
  <div className = "container">
    {isToggleOn && <div className="case">
      <div className="case__left">

        <Header />
        <div className="case__stats_display">
          <StatsDisplay 
          data1="CoronaVirus Cases" 
          data2 = {state.singleCountryInfo.todayCases} 
          data3= {state.singleCountryInfo.cases}
          
          />
          <StatsDisplay
          data1 = "Recovered"
          data2 = {state.singleCountryInfo.todayRecovered}
          data3 = {state.singleCountryInfo.recovered}
          />
          <StatsDisplay
          data1 = "Deaths"
          data2 = {state.singleCountryInfo.todayDeaths}
          data3 = {state.singleCountryInfo.deaths}
          />
        </div>
        <Map />
      </div>
      <div className="case__right">
        <CountryList/>
        <LineGraph/>
      </div>
    </div>}
    {!isToggleOn && <div className= "vaccine">
      <div className="vaccine__left">
        <HeaderVaccine />
        <StatsDisplay_vaccine />
        <LineGraph_vaccine />
      </div>
      <div className="vaccine_right">
        <SideBar />
      </div>
    </div>}
  </div>
  )
}
export default Comp1;