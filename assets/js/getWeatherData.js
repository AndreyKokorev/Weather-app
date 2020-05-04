import {
  data
} from '../../index.js';

async function getWeatherData() {
  const loadBar = document.querySelector('.loadbar-wrapper');
  const api_url = 'http://api.openweathermap.org/data/2.5/forecast';
  const api_key = 'fbd76ddc484de9e2b423f43fedffe50f';
  const lang = (data.lang === 'be' || data.lang === 'ru') ? 'ru' : 'en';
  const lat = data.coords.latitude;
  const lon = data.coords.longitude;
  const request_url = api_url +
    '?' +
    `lat=${lat}&lon=${lon}` +
    '&lang=' + lang +
    '&units=metric' +
    '&appid=' + api_key;
    
  loadBar.style.display = 'grid';

  const serverData = await fetch(request_url);
  const json = await serverData.json();

  loadBar.style.display = 'none';

  // data.coords.latitude = json.city.coord.lat;
  // data.coords.longitude = json.city.coord.lon;
  // data.coordsPrev.latitude = data.coords.latitude;
  // data.coordsPrev.longitude = data.coords.longitude;

  console.log(json)
  getWeather();

  function getWeather() {
    let day = new Date().getDate().toString();
    let ours = new Date().toLocaleString().slice(12, 14);
    data.ours = ours;

    if (day.length === 1) day = '0' + day;

    getCurrentWeather();
    getThreeDaysWeather();

    function getCurrentWeather() {
      if (ours.slice(0, 1) === '0') {
        ours = ours.slice(1, 2) - ours.slice(1, 2) % 3;
        ours = (`0${ours}`).toString();
      } else {
        ours = (ours - ours % 3).toString();
      }

      for (const item of json.list) {
        if (item.dt_txt.slice(8, 10) === day && item.dt_txt.slice(11, 13) === ours) {
          const tp = item.main.temp;
          const wd = item.wind.speed;
          data.weatherDescription = item.weather[0].main;
          data.feelsLike = `${(item.main.feels_like).toFixed(0)}&deg`;
          data.currentTemp = `${Math.round(tp)}&deg`;
          data.currentWeatherIcon = item.weather[0].id
          data.weatherDescription = item.weather[0].description.toUpperCase();
          data.wind = wd.toFixed(1);
          data.humidity = `${item.main.humidity}%`;

          break;
        }
      }
    }

    function getThreeDaysWeather() {
      let counter = 0;
      let nextDay = 1;
      let avarageTemp = 0;
      const fullDate = new Date();
      let date;

      setDate();

      for (const item of json.list) {
        if (item.dt_txt.slice(8, 10) === date.toString()) {
          avarageTemp += +item.main.temp;
          counter += 1;

          if (counter === 8) {
            avarageTemp /= 8;
            if (nextDay === 1) data.temp1 = `${Math.round(avarageTemp)}&deg`;
            if (nextDay === 2) data.temp2 = `${Math.round(avarageTemp)}&deg`;
            if (nextDay === 3) data.temp3 = `${Math.round(avarageTemp)}&deg`;
            nextDay += 1;
            counter = 0;
            setDate();
          }
          if (item.dt_txt.slice(11, 13) === '12') { // equals 12.00
            //if (nextDay === 1) weather.setWeatherIcons(item.weather[0].id, icon1);
            //if (nextDay === 2) weather.setWeatherIcons(item.weather[0].id, icon2);
            //if (nextDay === 3) weather.setWeatherIcons(item.weather[0].id, icon3);
          }
          if (nextDay > 3) break;
        }
      }

      function setDate() {
        fullDate.setDate(fullDate.getDate() + 1);
        date = fullDate.getDate();

        if (date.toString().length === 1) {
          date = '0' + date;
        }
      }
    }
  }
}

export default getWeatherData;