import React,{useContext, useEffect, useState} from 'react'
import { CounterDispatchContext, CounterStateContext } from './App'
import {fetch_graph_data, fetch_graph_data_country} from './Fetch'
import { SorterGraphData } from './utils/Sorter';
import {Line} from 'react-chartjs-2';

const LineGraph = () => {

  let date = [];
  let data = [];
  let sortedData = [];


  const [isdataPresent, setisDataPresent] = useState(false)
  const [isdataPresent_country,setisDataPresent_country] = useState(false);

  const state = useContext(CounterStateContext);
  const dispatch = useContext(CounterDispatchContext);
  
  let evaluate_type;

  if(state.caseValue === "CoronaVirus Cases"){
    evaluate_type = "cases"
  }
  else if(state.caseValue === "Recovered"){
    evaluate_type = "recovered"
  }
  else if(state.caseValue === "Deaths"){
    evaluate_type = "deaths"
  }

  useEffect(()=>{ 
    setisDataPresent_country(false);
    if(state.country === "worldwide"){
      fetch_graph_data()
      .then((resp)=>{
        return resp.json();
      })
      .then((data)=>{
        dispatch({
          type:"historicalData",
          payload:data
        })
        setisDataPresent(true);
      })}

    else{
      setisDataPresent(false);
      fetch_graph_data_country(state.country)
      .then((resp)=>{
        return resp.json();
      })
      .then((data)=>{
        dispatch({
          type:"historicalData",
          payload:data
        })

        setisDataPresent_country(true);
      })
    }
  },[state.country])

  if(isdataPresent){
    Object.keys(state.historicalData[evaluate_type]).forEach((key)=>{
      date = [...date, key];
      data = [...data, state.historicalData[evaluate_type][key]];
    })
  }
  else if(isdataPresent_country){
    Object.keys(state.historicalData["timeline"][evaluate_type]).forEach((key)=>{
      date = [...date, key];
      data = [...data, state.historicalData.timeline[evaluate_type][key]];
      
    })
  }

  sortedData = SorterGraphData(data);
   let value = {
      labels:date,
      datasets:[{
        label:`number of ${state.caseValue} per day`,
        data:sortedData,
        backgroundColor:'rgb(204,16,52,0.8)',
        borderColor:'#CC1034',
        pointRadius: 0.5,
      }]
    }

  return (
    <>
    <Line 
    data = {value} 
    />    
  </>
  )
}

export default LineGraph;
