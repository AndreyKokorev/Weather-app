import {data} from '../../index.js';
import getDate from './getDate.js';
import dataRender from './dataRender.js';
import getSearchData from './getSearchData.js';
import getWeatherData from './getWeatherData.js';
import getLocalData from './getLocalData.js';

function optionsPanel() {
  const refresh = document.querySelector('.refresh-button');

  refresh.addEventListener('click', () => {
    start();

    async function start() {
      getDate();
      await getLocalData();
      await getSearchData();
      await getWeatherData();
      dataRender.startRender();
      data.map.jumpTo({center: [+data.coords.longitude, +data.coords.latitude]})
    }
  });
  unitsOfMeas();
  language();
}

export function unitsOfMeas() {
  const currentTemp = document.querySelector('.weather_temperature');
  const feelsLike = document.querySelector('.feel .value');
  const temperature1 = document.querySelector('.temperature-1');
  const temperature2 = document.querySelector('.temperature-2');
  const temperature3 = document.querySelector('.temperature-3');
  const celsius = document.querySelector('.celsius');
  const fahrenheit = document.querySelector('.fahrenheit');
  const unitWrapper = document.querySelector('.unit-of-measurement');

  unitWrapper.addEventListener('click', (e) => {
    if (e.target.id === 'celsius') {
      toCelsius();
    } else if (e.target.id === 'fahrenheit') unitsOfMeas.toFahrenheit();
  });

  unitsOfMeas.toFahrenheit = function () {
    const temp = +data.currentTemp.slice(0, data.currentTemp.length - 4);
    const feelsTemp = +data.feelsLike.slice(0, data.feelsLike.length - 4);
    const temp1 = +data.temp1.slice(0, data.temp1.length - 4);
    const temp2 = +data.temp2.slice(0, data.temp2.length - 4);
    const temp3 = +data.temp3.slice(0, data.temp3.length - 4);

    data.unitOfMeas = 'F';
    localStorage.setItem('unitOfMeas', 'F');

    currentTemp.innerHTML = `${(1.8 * temp + 32).toFixed(0)}&deg`;
    feelsLike.innerHTML = `${(1.8 * feelsTemp + 32).toFixed(0)}&deg`;
    temperature1.innerHTML = `${(1.8 * temp1 + 32).toFixed(0)}&deg`;
    temperature2.innerHTML = `${(1.8 * temp2 + 32).toFixed(0)}&deg`;
    temperature3.innerHTML = `${(1.8 * temp3 + 32).toFixed(0)}&deg`;

    celsius.style.background = 'rgba(174, 181, 185, 0.445)';
    fahrenheit.style.background = 'rgba(174, 181, 185, 0.664)';
  }

  if (data.unitOfMeas === 'C') {
    celsius.style.background = 'rgba(174, 181, 185, 0.664)';
    fahrenheit.style.background = 'rgba(174, 181, 185, 0.445)';
  } else {
    unitsOfMeas.toFahrenheit();
  }

  function toCelsius() {
    data.unitOfMeas = 'C';
    localStorage.setItem('unitOfMeas', 'C');

    currentTemp.innerHTML = data.currentTemp;
    feelsLike.innerHTML = data.feelsLike;
    temperature1.innerHTML = data.temp1;
    temperature2.innerHTML = data.temp2;
    temperature3.innerHTML = data.temp3;

    celsius.style.background = 'rgba(174, 181, 185, 0.664)';
    fahrenheit.style.background = 'rgba(174, 181, 185, 0.445)';
  }
}

function language() {
  const langWrapper = document.querySelector('.lang-wrapper');
  const input = document.querySelector('.mapboxgl-ctrl-geocoder--input');
  const langTags = document.querySelectorAll('.lang');
  const inputValue = {
    en: 'Input city',
    ru: 'Введите нас.пункт',
    be: 'Увядзіце нас.пункт'
  };

  langWrapper.addEventListener('input', () => {
    const lang = langWrapper.options[langWrapper.options.selectedIndex].value;

    switchLang(lang);
  });

  input.setAttribute('placeholder', inputValue[data.lang]);

  async function switchLang(lang) {
    if (lang === 'en') {
      data.lang = 'en';
    } else if (lang === 'ru') {
      data.lang = 'ru';
    } else if (lang === 'be') {
      data.lang = 'be';
    }

    localStorage.setItem('lang', data.lang);

    for (let item of langTags) item.style.display = 'none';
    document.querySelectorAll(`.${data.lang}`).forEach(item => item.style.display = 'inline');

    input.setAttribute('placeholder', `${inputValue[data.lang]}`);

    getDate();
    await getSearchData();
    await getWeatherData();
    dataRender.locationRender();
    dataRender.timeRender()
    dataRender.daysRender();
    dataRender.weatherRender();
    unitsOfMeas();
  }
}


export default optionsPanel;