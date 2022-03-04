import React, {useState, useRef, useEffect} from 'react'
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import styled from 'styled-components';
import classNames from 'classnames';
import '../index.css';

const MAPBOX_TOKEN = ''; // Set your mapbox token here
mapboxgl.accessToken = 'pk.eyJ1IjoibmlsYnJpbmsiLCJhIjoiY2twd2xnd3puMWU5ejJ2bm96ZzN3NXl2NCJ9.SxTjkkZORPkUNL-mAbmxZg';

const mapcontainerouter = styled.div`


    top: 0;
    bottom: 0;
    width: 50%;
`;


const MapInner = styled.div`
  height: 500px;
  width: 50%;
`;


const MyMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(20.26);
  const [lat, setLat] = useState(63.83);
  
  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      center: [lng, lat],
      zoom: 12.5,
    });
  }, []);
  return (
    <MapInner ref={mapContainer} />)
  
}

export default MyMap;

