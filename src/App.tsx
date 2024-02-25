import React from 'react';
import Map from './components/Map';
import mapboxgl from 'mapbox-gl';
import Header from './components/Header';



const App: React.FC = () => {
  const center = new mapboxgl.LngLat(2.35,48.85);
  const zoom = 6;

  return (
    <div>
      <Header/>
      <Map center={center} zoom={zoom} />
    </div>
  );
};

export default App;
