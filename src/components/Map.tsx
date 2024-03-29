import React, { useRef, useEffect  } from 'react';
import mapboxgl, { Map as MapboxMap, LngLat, MapMouseEvent  } from 'mapbox-gl';
import countryApi from '../services/CountryApiService';




interface MapProps {
  center: LngLat;
  zoom: number;
}

//token to access Mapbox 
const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN as string

mapboxgl.accessToken = mapboxToken


const Map: React.FC<MapProps> = ({ center, zoom }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<MapboxMap | null>(null);


// If the map instance doesn't exist, creates a new map using the Mapbox GL library.
useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/streets-v12',
        center:center,
        zoom: zoom,

      });
      
    }

    //popup to show when hovered on a country name
    const popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false });

    map.current.on('mousemove', (e: MapMouseEvent) => {

       
        const features = map.current!.queryRenderedFeatures(e.point);

        // Find the country properties when the property of hovered area is of type 'country'
        const countryFeature = features.find((feature) => feature.properties?.type === 'country');
        
        
        if(countryFeature){
            //find the name of country from the countyFeature properties.
            let countryName = countryFeature.properties?.name_en || null;
            countryName = countryName.toLowerCase()
            const mousePosition = {
                lngLat: e.lngLat,
            };

           
           //Call to API function in services/countryApiService to return API data
            const countryInfo = countryApi(countryName);
           

            //set popup with html content of country details
            popup.setLngLat(mousePosition.lngLat as mapboxgl.LngLat).setHTML(
                `<h5>COUNTRY DETAILS</h5>
                <div>Name: ${countryInfo.name}</div>
                <div>Capital: ${countryInfo.capital}</div>
                <div>region: ${countryInfo.region}</div>
                <div>Population: ${countryInfo.population}</div>`
            )
        
            if (!popup.isOpen()) {
            popup.addTo(map.current!);
            }
          
        }
        //remove popup if mouse not being hovered on a feature of type country
        else{
        popup.remove();
        }
        });

    }, [center, zoom]);


    //map css styling setup
    return <div ref={mapContainer} style={{
      border: 'solid',
      borderColor: 'skyblue' ,
      height: '550px' ,
      marginTop:20 ,
      marginLeft:50 ,
      marginRight:50 }} />;
};

export default Map;
