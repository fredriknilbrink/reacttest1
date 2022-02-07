import React, {useState, useRef, useEffect} from 'react'
import mapboxgl from '!mapbox-gl'

const MAPBOX_TOKEN = ''; // Set your mapbox token here
mapboxgl.accessToken = 'pk.eyJ1IjoibmlsYnJpbmsiLCJhIjoiY2twd2xnd3puMWU5ejJ2bm96ZzN3NXl2NCJ9.SxTjkkZORPkUNL-mAbmxZg'

MyMap = () => {
  const mapContainer = useRef(null);
  const map = userRef(null);
  
  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });
  }, []);
  return (<div className="map-container" ref={mapContainer} />);
}

export default MyMap

