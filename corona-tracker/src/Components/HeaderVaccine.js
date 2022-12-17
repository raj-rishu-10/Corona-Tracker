import React, { useContext } from 'react'
import {FormControl , Select, MenuItem} from "@material-ui/core"
import { CounterDispatchContext, CounterStateContext } from './App'

const HeaderVaccine = ()=>{
  const dispatch = useContext(CounterDispatchContext);
  const state = useContext(CounterStateContext);
  const {vaccineCountryList} = state;
  return (
    <>
    <div className = "header">
      <div className="header__name">VACCINE TRACKER</div>
      <div className="header__dropdown">
      
        <FormControl className = "header__dropdown_material">
          
          <Select  variant = "outlined" value = {state.country_vaccine} onChange = {e=>{
           dispatch({
              type: 'Vaccine_country',
              payload:e.target.value});
          }
          }>
            
            <MenuItem value = "worldwide">WorldWide</MenuItem>
            {vaccineCountryList.map((item)=>{
              return <MenuItem 
              value ={item.country}>
                {item.country} 
              </MenuItem>
            })}
          </Select>
          
        </FormControl>
      </div>
      
    </div>
    </>
  )
}

export default HeaderVaccine;