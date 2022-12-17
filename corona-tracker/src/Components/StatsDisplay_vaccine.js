import { useEffect , useState} from "react"
import { fetchVaccine_worldwide } from "./Fetch"
import DateCreator from './utils/DateCreator';

const StatsDisplay_vaccine = ()=>{
  let [stats , setStats] = useState([])
  useEffect(()=>{
    fetchVaccine_worldwide()
    .then(resp=>resp.json())
    .then(data=>{
      setStats(data);
    })
  },[])
  let date = DateCreator();
  return (
    <div className="case_left_stats_vaccine">
      <h3>Total Vaccination Done Worldwide </h3>
      <h1>{stats[date]}</h1>
    </div>
  )
}

export default StatsDisplay_vaccine;