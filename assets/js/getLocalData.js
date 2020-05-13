import {
  data
} from '../../index.js';

async function getLocalData() {
  // if ("geolocation" in navigator) {
  //   const getCurrentPosition = (options = {
  //     enableHighAccuracy: true
  //   }) => {
  //     return new Promise((resolve, reject) => {
  //       navigator.geolocation.getCurrentPosition(resolve, reject, options);
  //     });
  //   };
  //   const position = await getCurrentPosition();

  //   data.coords.latitude = position.coords.latitude;
  //   data.coords.longitude = position.coords.longitude;
  // } else {
  //   async function getLocation () {
  //     const key = '175032ead70ec8';
  //     const url = `https://ipinfo.io/json?token=${key}`;
  //     const location = await fetch(url);

  //     console.log(location)
  //   }

  try {
    const key = '175032ead70ec8';
    const url = `https://ipinfo.io/json?token=${key}`;
    const location = await fetch(url);
    const reqCoords = await location.json();
  
    data.coords.latitude = reqCoords.loc.split(',')[0];
    data.coords.longitude = reqCoords.loc.split(',')[1];
  } catch(e) {
    alert('For application working you should turn off browser page blocker extensions')
  }
 
}

export default getLocalData;