import { useContext } from "react"

export const fetchCountryName_n_Data = async()=>{
  
  const resp = await fetch("https://disease.sh/v3/covid-19/countries");
  return resp;
}

export const fetch_Stats_singleCountry = async(country)=>{
  const resp = await fetch(`https://disease.sh/v3/covid-19/countries/${country}?strict=true
  `);

  return resp;
}

export const fetch_state_worldwide = async(country)=>{
  const resp = await fetch("https://disease.sh/v3/covid-19/all");
  return resp;
}

export const fetch_graph_data = async()=>{
  const resp = await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
  return resp;
}

export const fetch_graph_data_country = async(country)=>{
  const resp = await fetch(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`);
  return resp;
}

////....................///.....................////

export const fetchVaccineData = async()=>{
  const resp = await fetch('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=all&fullData=false');
  return resp;
}

export const fetchVaccine_CountryWise = async(country) =>{
  const resp = await fetch(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${country}?lastdays=all&fullData=false`);
  return resp;
}

export const fetchVaccine_worldwide = async()=>{
  const resp = await fetch('https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=all&fullData=false');
  return resp;
}