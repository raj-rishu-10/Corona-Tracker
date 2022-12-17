import React, { useContext, useEffect ,useState} from 'react'
import { CounterStateContext, CounterDispatchContext } from './App'
import { SorterGraphData } from './utils/Sorter';
import { Line } from 'react-chartjs-2';
import { fetchVaccine_worldwide, fetchVaccine_CountryWise} from './Fetch';

const LineGraph_vaccine = () => {

  const state = useContext(CounterStateContext);
  const dispatch = useContext(CounterDispatchContext);
  
  const {singleCountry_data_vaccine} = state;

  const [isdataPresent, setisDataPresent] = useState(false)
  const [isdataPresent_country,setisDataPresent_country] = useState(false);

  let date = [];
  let data = [];
  let vaccine_data_sorted = [];

  useEffect(()=>{
      if(state.country_vaccine === "worldwide"){
        setisDataPresent_country(false);
        fetchVaccine_worldwide()
        .then(resp=>resp.json())
        .then(data=>{
          dispatch({
            type:"singleCountryInfo_vaccine",
            payload:data
          })
          setisDataPresent(true);
        })
      }
      else{
        setisDataPresent(false);
        fetchVaccine_CountryWise(state.country_vaccine)
        .then(resp=>resp.json())
        .then(data=>{
          dispatch({
            type:"singleCountryInfo_vaccine",
            payload:data
          })
          setisDataPresent_country(true);
        })
      }  
  },[state.country_vaccine]);
  
  if(isdataPresent){
    Object.keys(singleCountry_data_vaccine).forEach((key)=>{
      date = [...date, key];
      data = [...data, singleCountry_data_vaccine[key]]
    })
  }
  else if(isdataPresent_country){
    Object.keys(singleCountry_data_vaccine.timeline).forEach((key)=>{
      date = [...date, key];
      data = [...data, singleCountry_data_vaccine.timeline[key]]
    })
  }

  vaccine_data_sorted = SorterGraphData(data);
   
  let value = {
    labels:date,
    datasets:[{
      label:"number of vaccinations daily",
      data:vaccine_data_sorted,
      backgroundColor:'rgb(204,16,52,0.8)',
      borderColor:'#CC1034',
      pointRadius: 0.5,
    }]
   }
  return (
    <div>
      <Line
      data = {value}
      ></Line>  
    </div>
  )
}

export default LineGraph_vaccine
