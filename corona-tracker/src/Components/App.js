import React, {useReducer, useState} from 'react'
import { initialState, reducer } from './reducer';
import Comp1 from './Comp1';
import { CSSTransition } from 'react-transition-group';
import "./App.css";
import "leaflet/dist/leaflet.css";

import ToggleOffOutlinedIcon from '@material-ui/icons/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@material-ui/icons/ToggleOnOutlined';

export const CounterStateContext = React.createContext();
export const CounterDispatchContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isToggleOn , setIsToggleOn] = useState(false);

  return (
    <CounterStateContext.Provider 
    value= {state}>
      <CounterDispatchContext.Provider value = {dispatch}>
      
      <CSSTransition in={isToggleOn} timeout = {100} classNames = "my-node">
        <div>
          <div className="header__mast__head">
            <span>
            VACCINE TRACKER
            </span>
            <span  className = "toggler" onClick = {()=>{
              setIsToggleOn(!isToggleOn);
            }}>
              {isToggleOn?<ToggleOnOutlinedIcon sx={{fontSize:40}}
              />:<ToggleOffOutlinedIcon sx={{ fontSize: 40 }}/>}
            </span>
            <span>
            CORONA TRACKER
            </span>
          </div>
          <Comp1 isToggleOn = {isToggleOn}/>
        </div>
      </CSSTransition>
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  )

}

export default App;
