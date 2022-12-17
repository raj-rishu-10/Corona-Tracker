import React from 'react'
import { CounterDispatchContext } from './App';

const StatsDisplay = ({data1, data2, data3}) => {

  const dispatch = React.useContext(CounterDispatchContext);

  return (
    <div className= "case__left__stats" id = {data1} onClick = {e=>{
      dispatch({
      type: "casesValue",
      payload:data1,
    })
    }}>
      <h3>{data1}</h3>
      <h1>{data2}</h1>
      <h6>{data3} Total</h6>
    </div>
  )
}

export default StatsDisplay;