import React, { useRef, useEffect  } from 'react';
import mapboxgl, { Map as MapboxMap, LngLat  } from 'mapbox-gl';

interface MapProps {
  center: LngLat;
  zoom: number;
}

//token to access Mapbox inside ""
mapboxgl.accessToken = ""
const Map: React.FC<MapProps> = ({ center, zoom }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<MapboxMap | null>(null);

  useEffect(() => {
    if (!map.current) {
        // If the map instance doesn't exist, creates a new map using the Mapbox GL library.
      map.current = new mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/streets-v12',
        center:center,
        zoom: zoom,
      });
      
    }
  }, [center, zoom]);

  return <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />;
};

export default Map;
