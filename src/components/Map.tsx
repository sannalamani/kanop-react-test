import React, { useRef, useEffect  } from 'react';
import mapboxgl, { Map as MapboxMap, LngLat, MapMouseEvent  } from 'mapbox-gl';
import countryApi from '../services/CountryApiService';



interface MapProps {
  center: LngLat;
  zoom: number;
}

//token to access Mapbox inside ""
mapboxgl.accessToken = "";



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
           countryApi(countryName);
           
          

            //set popup with html content of country name
            // popup.setLngLat(mousePosition.lngLat as mapboxgl.LngLat).setHTML(
            //     `<div>Country details</div>
            //     <div>Country: ${countryInfo}</div>`
            // )
        
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



    return <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />;
};

export default Map;