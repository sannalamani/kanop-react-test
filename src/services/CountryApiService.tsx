import axios from "axios";

const MAP_COUNTRY_API= "https://countryapi.io/api/name/";

//to check the value of country name 
let check:string = '';

// function to take country name as argument and return country API data
const countryApi = (countryName:string) => {
    
    /*returns country API details when value in countryName is changed
      implemented to call API only once for a country(to avoid multiple API calls)*/
    if(check!==countryName)
    {
    console.log(axios.get(MAP_COUNTRY_API+countryName,{params:{apikey:""}})
    
    ) 
    check = countryName;
    }
}
 
export default countryApi;
