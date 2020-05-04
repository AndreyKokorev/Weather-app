import {data} from "../../index.js";

function mapRender(map){
  mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3a29rb3JldiIsImEiOiJjazN5bWxubGwwOWxzM2twM3ZxaTh3cXE1In0.5tloh3Vv70lRjnRrpnJPjA';
  map = new mapboxgl.Map({
     container: 'map',
     style: 'mapbox://styles/mapbox/streets-v11',
     center: [+data.coords.longitude, +data.coords.latitude],
     zoom: 8,
   
   });
  
   const geocoder = new MapboxGeocoder({
     accessToken: mapboxgl.accessToken,
     mapboxgl
   });
   
   data.geocoder = geocoder;
   
   document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
}

export default mapRender;
