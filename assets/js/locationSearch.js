import {
  data
} from '../../index.js';
import getWeatherData from './getWeatherData.js';
import getSearchData from './getSearchData.js';
import getDate from './getDate.js';
import dataRender from './dataRender.js';
import {
  unitsOfMeas
} from './optionsPanel.js'

function locationSearch() {
  const input = document.querySelector('.mapboxgl-ctrl-geocoder--input');
  const suggestions = document.querySelector('.suggestions-wrapper > .suggestions');

  input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      find();
    }
  });

  suggestions.addEventListener('mousedown', (e) => {
    if (e.target.closest('LI')) {
      const interval = setInterval(() => {
        if (data.geocoder.mapMarker) {
          if (data.geocoder.mapMarker._lngLat) {
            find();
            clearInterval(interval)
          }
        }
      }, 30);
    }
  });

  function find() {
    search();

    async function search() {
      data.coords.latitude = data.geocoder.mapMarker._lngLat.lat;
      data.coords.longitude = data.geocoder.mapMarker._lngLat.lng;
      await getWeatherData();
      await getSearchData();
      getDate();
      dataRender.locationRender();
      dataRender.timeRender()
      dataRender.daysRender();
      dataRender.weatherRender();
      dataRender.coordsRender();

      if (data.unitOfMeas === 'F') unitsOfMeas.toFahrenheit();
    }
  }
}

export default locationSearch;