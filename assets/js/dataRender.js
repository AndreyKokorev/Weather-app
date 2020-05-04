import {
  data
} from '../../index.js';
import getDate from './getDate.js';

const dataRender = {
  startRender: function () {
    this.locationRender();
    this.timeRender()
    this.setTimer();
    this.daysRender();
    this.coordsRender();
    this.weatherRender();
  },
  locationRender: function () {
    const location = document.querySelector('.location');
    location.textContent = data.city + ', ' + data.country;
  },
  timeRender: function () {
    const timeWrapper = document.querySelector('.time');
    timeWrapper.textContent = data.time;
  },
  setTimer: function () {
    const miliSeconds = (60 - new Date().getSeconds()) * 1000;

    setTimeout(() => {
      getDate();
      this.timeRender();
      setInterval(() => {
        getDate();
        this.timeRender();
      }, 60000);
    }, miliSeconds);
  },
  daysRender: function () {
    const day1 = document.querySelector('.day-wrapper-1 .day');
    const day2 = document.querySelector('.day-wrapper-2 .day');
    const day3 = document.querySelector('.day-wrapper-3 .day');

    day1.textContent = data.day1;
    day2.textContent = data.day2;
    day3.textContent = data.day3;
  },
  coordsRender: function () {
    const latitude = document.querySelectorAll('.latitude .value');
    const longitude = document.querySelectorAll('.longitude .value');
    for (const item of latitude) {
      item.textContent = data.coords.latitude;
    }
    for (const item of longitude) {
      item.textContent = data.coords.longitude;
    }
  },
  weatherRender: function () {
    CurrentWeatherRender();
    threeDaysWeatherRender();

    function CurrentWeatherRender() {
      const currentTemp = document.querySelector('.weather_temperature');
      const weatherDescription = document.querySelector('.description');
      const feelslike = document.querySelector('.feel .value');
      const wind = document.querySelector('.wind .value');
      const humidity = document.querySelector('.humidity .value');
      const currentWeatherIcon = document.querySelector('.weather_visual-description .owf');

      
      currentTemp.innerHTML = data.currentTemp;
      weatherDescription.textContent = data.weatherDescription;
      feelslike.innerHTML = data.feelsLike;
      wind.textContent = data.wind;
      humidity.textContent = data.humidity;

      weatherIconRender(data.currentWeatherIcon, currentWeatherIcon, data.our)
    }
    function threeDaysWeatherRender() {
      const temp1 = document.querySelector('.temperature-1');
      const temp2 = document.querySelector('.temperature-2');
      const temp3 = document.querySelector('.temperature-3');
      const icon1 = document.querySelector('.day-wrapper-1 .owf');
      const icon2 = document.querySelector('.day-wrapper-2 .owf');
      const icon3 = document.querySelector('.day-wrapper-3 .owf');

      temp1.innerHTML = data.temp1;
      temp2.innerHTML = data.temp2;
      temp3.innerHTML = data.temp3;


    }
    function weatherIconRender(id, wrapper, dayOfMonth) {
      const night = ['21', '22', '23', '00', '01', '02', '03', '04', '05', '06'];
      const day = dayOfMonth;
      const number = id;
      const box = wrapper;

      if (night.includes(day)) {
        box.classList.add(`owf-${number}-n`);
      } else {
        box.classList.add(`owf-${number}-d`);
      }

      //const location = document.querySelector('.city');
      //const longitude = document.querySelectorAll('.longitude .value');
      //const latitude = document.querySelectorAll('.latitude .value');

    }
  }
}

export default dataRender;