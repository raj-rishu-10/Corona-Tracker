export const initialState = {
  countryData:[],
  singleCountryInfo:[],
  historicalData:[],
  country:'worldwide',
  caseValue:"CoronaVirus Cases",
  center:[51.505,-0.09],
  zoom:3,
  vaccineCountryList:[],
  country_vaccine:'worldwide',
  singleCountry_data_vaccine:[]
}

export function reducer(state, action) {

  switch (action.type) {
    case "country_info":
      return{
        ...state,
        countryData:action.payload
      }
    case "single_country_info":
      return {
        ...state,
        singleCountryInfo:action.payload
      }
    case "historicalData":
      return {
        ...state,
        historicalData:action.payload
      }
    case "country":
      return {
        ...state, 
        country:action.payload
      }
    case "casesValue":
      return {
        ...state,
        caseValue:action.payload,
      }
    case "map_location":
      return{
        ...state,
        center:action.payload,
      }
    case "map_zoomLevel":
      return{
        ...state,
        zoom:action.zoom
      }
    case "worldwide_VaccineInfo":
      return {
        ...state, 
        vaccineCountryList:action.payload
      }
    case "Vaccine_country":
      return {
        ...state,
        country_vaccine: action.payload
      }
    case "singleCountryInfo_vaccine":
      return {
        ...state,
        singleCountry_data_vaccine: action.payload
      }
    default:
      return state;
  }
};