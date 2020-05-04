import {
  data
} from '../../index.js';

async function getSearchData() {
  const api_url = 'https://api.opencagedata.com/geocode/v1/json';
  const apiKey = '1ff7bca8a375413484ac967b4ec9ed20';
  const latitude = data.coords.latitude;
  const longitude = data.coords.longitude;
  const lang = (data.lang === 'be' || data.lang === 'ru') ? 'ru' : 'en';
  const request_url = api_url +
    '?' +
    'q=' + latitude + '%2C%20' + longitude +
    '&key=' + apiKey +
    '&language=' + lang +
    '&pretty=1';
  const requestData = await fetch(request_url);
  const json = await requestData.json();
  const location = json.results[0].components;
  console.log(json)
  data.city = location.city || location.town || location.village || location.state;
  data.country = json.results[0].components.country;
  data.timeZone = json.results[0].annotations.timezone.name;
}

export default getSearchData;