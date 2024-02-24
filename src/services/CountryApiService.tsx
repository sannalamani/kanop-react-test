import axios ,{AxiosResponse} from "axios";

const MAP_COUNTRY_API= "https://countryapi.io/api/name/";

//to check the value of country name 
let check:string = '';
let requiredResponse:any = {};

// function to take country name as argument and return country API data
export const countryApi = (countryName:string) => {
    
    /*returns country API details when value in countryName is changed
      implemented to call API only once for a country(to avoid multiple API calls)*/
      if(check!==countryName)
      {
        axios.get(MAP_COUNTRY_API+countryName,{params:{apikey:""}})
       .then((response) =>
        {
            //loop to iterate and seperate the JSON data to key value pair
            for(const[key,value] of Object.entries(response.data))
            {
                const value2:AxiosResponse = value as AxiosResponse;
                
                //nested loop to fetch JSON data inside country key from the above data
                for(const[key2,value3] of Object.entries(value2))
                {
                    if(key2==="name" || key2 === "region" || key2 === "capital" || key2 ==="population")
                    {
                   
                        requiredResponse[key2] = value3;
                    }
                }
            }
            
            
        });

       check = countryName;
      }
      return requiredResponse;
}
 
export default countryApi;



