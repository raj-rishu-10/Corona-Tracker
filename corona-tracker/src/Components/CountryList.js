import React, { useContext } from 'react';
import { CounterStateContext } from './App';
import {Sorter} from './utils/Sorter';

const CountryList = () => {
  let sortedCountryData = [];

  const state = useContext(CounterStateContext);
  const {countryData} = state
  sortedCountryData = Sorter(countryData)
  return (
    <div className= "case__right__sidebar">
      <h2>Live Cases by Country</h2>
      <div className = "case__right__table">
        {sortedCountryData.map((country)=>{
          return (
            <tr key= {country.countryInfo._id + 'new'} className="">
            <td>{country.country}</td>
            <td>{country.cases}</td>
          </tr>
          )
        })}
      </div>
    </div>
  
  )
}

export default CountryList
