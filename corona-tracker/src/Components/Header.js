import React, { useContext } from 'react'
import {FormControl , Select, MenuItem} from "@material-ui/core"
import { CounterDispatchContext, CounterStateContext } from './App'

const Header = ()=>{
  const dispatch = useContext(CounterDispatchContext);
  const state = useContext(CounterStateContext);
  const {countryData} = state;
  return (
    
    <div className = "header">
      <div className="header__name">COVID TRACKER</div>
      <div className="header__dropdown">
        <FormControl className = "header__dropdown_material">
          
          <Select  variant = "outlined" value = {state.country} onChange = {e=>{
            dispatch({
              type: 'country',
              payload:e.target.value});
              
          }}>
            <MenuItem value = "worldwide">WorldWide</MenuItem>
            {countryData.map((item)=>{
              return <MenuItem 
              value ={item.countryInfo.iso2} 
              key ={item.country._id}>
                {item.country} 
              
              </MenuItem>
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default Header
