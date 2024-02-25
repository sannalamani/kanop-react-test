import axios ,{AxiosResponse} from "axios";

const MAP_COUNTRY_API= "https://countryapi.io/api/name/";

//to check the value of country name 
let check:string = '';
let requiredResponse:any = {};

const countryApiKey = process.env.REACT_APP_API_KEY


// function to take country name as argument and return country API data
export const countryApi = (countryName:string) => {
    
    /*returns country API details when value in countryName is changed
      implemented to call API only once for a country(to avoid multiple API calls)*/
      if(check !== countryName)
      {
        axios.get(MAP_COUNTRY_API+countryName,{params:{apikey:countryApiKey}})
       .then((response) =>
        {
            //loop to iterate and seperate the JSON data to key value pair
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            for(const[key,value] of Object.entries(response.data))
            {

                const countryInfo:AxiosResponse = value as AxiosResponse;
                
                //nested loop to fetch JSON data inside country key from the above data
                for(const[dataKey,dataValue] of Object.entries(countryInfo))
                {
                    if(dataKey === "name" || dataKey === "region" || 
                        dataKey === "capital" || dataKey === "population")
                    {
                        requiredResponse[dataKey] = dataValue;
                    }
                }
            }
            
            
        }).catch((e)=>{
            console.log(e)
        })

       check = countryName;
      }
      return requiredResponse;
}
 
export default countryApi;



