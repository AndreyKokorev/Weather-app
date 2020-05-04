import domRender from './assets/js/domRender.js';
import optionsPanel from './assets/js/optionsPanel.js';
import getLocalData from './assets/js/getLocalData.js';
import getSearchData from './assets/js/getSearchData.js';
import getDate from './assets/js/getDate.js';
import dataRender from './assets/js/dataRender.js';
import getWeatherData from './assets/js/getWeatherData.js';
import mapRender from './assets/js/map-api.js';
import locationSearch from './assets/js/locationSearch.js';

export const data = {
  lang: localStorage.getItem('lang') || 'en',
  unitOfMeas: localStorage.getItem('unitOfMeas') || 'C',
  coords: {
    latitude: '',
    longitude: ''
  }
};

start();

async function start() {
  domRender();
  getDate();
  await getLocalData();
  await getSearchData();
  await getWeatherData();
  dataRender.startRender();
  mapRender();
  locationSearch();
  optionsPanel();
}



//to do
//исправить баг со временем до 12 часов дня
// с округлением -0.4 получается -0(убрать 0)
//сделать чтоыб при только при полной загрузке отобразились все данные;
// доделать геолокацию