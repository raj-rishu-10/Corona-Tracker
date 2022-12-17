import React from 'react'
import {sidebarContent} from './sidebarContent'
import { sorter_vaccine } from './utils/sorter_vaccine'

const SideBar = () => {

  let content = sidebarContent();
  let sortedList = sorter_vaccine(content);

  return (
    <div className= "vaccine__right__sidebar">
      <h2>Live Vaccination by Country</h2>
      <div className = "vaccine__right__table">
        {sortedList.map((country_vaccine)=>{
          return (
            <tr  className="">
            <td>{country_vaccine.country}</td>
            <td>{country_vaccine.data}</td>
          </tr>
          )
        })}
      </div>
    </div>
  )
}

export default SideBar
