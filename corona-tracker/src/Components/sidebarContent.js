import { useContext } from "react"

import { CounterDispatchContext, CounterStateContext } from "./App"

import  DateCreator from './utils/DateCreator';

export const sidebarContent = ()=>{
  let date = [];
  let data = [];

  const state = useContext(CounterStateContext);

  const {vaccineCountryList} = state;

  vaccineCountryList.map((item)=>{
    let date = DateCreator();
    
    data = [...data, {
        country:item.country,
      data:item.timeline[date],
    }]
  })


  return data;
}
