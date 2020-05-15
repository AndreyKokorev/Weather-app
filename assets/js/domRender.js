import {data} from '../../index.js'

function domRender() {
  const langTags = document.querySelectorAll('.lang');
  const body = document.querySelector('body');
  const DOM = `<div class="main-wrapper">
  <div class="loadbar-wrapper">
    <p class= "lang en">Awaiting response from server</p>
    <p class= "lang ru">Подождите, ожидается ответ от сервера</p>
    <p class= "lang be">Пачакайце, чакаецца адказ ад сервера</p>
    <div id="loadBar">
      <div id="loadBar_1" class="loadBar"></div>
      <div id="loadBar_2" class="loadBar"></div>
      <div id="loadBar_3" class="loadBar"></div>
      <div id="loadBar_4" class="loadBar"></div>
      <div id="loadBar_5" class="loadBar"></div>
      <div id="loadBar_6" class="loadBar"></div>
      <div id="loadBar_7" class="loadBar"></div>
      <div id="loadBar_8" class="loadBar"></div>
    </div>
  </div>
  <div class="inner-wrapper">
    <section class="preferences">
      <div class="refresh-wrapper">
        <button class="refresh-button">
          <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.0491975 10.7003C-0.0686153 9.64172 0.029562 8.61981 0.296604 7.67525C1.18413 4.53623 3.96844 2.22777 7.27112 
              2.18705V0.135087C7.27112 0.021089 7.40857 -0.0399815 7.49889 0.0292317L11.5713 3.13161C11.638 3.18454 11.638 3.29039 
              11.5713 3.33925L7.50282 6.44163C7.40857 6.51084 7.27505 6.44977 7.27505 6.33577V4.28788C5.10337 4.32452 3.24978 5.71285 
              2.45258 7.67525C2.15019 8.41624 1.99704 9.23458 2.04023 10.0936C2.09914 11.2743 2.52719 12.3614 3.20265 13.2408C3.56395 
              13.709 3.47755 14.393 3.01023 14.7472C2.56646 15.0851 1.94598 14.9915 1.60433 14.5436C0.767855 13.4607 0.210208 12.1415 
              0.0491975 10.7003ZM11.8069 6.7592C12.4863 7.63454 12.9144 8.72566 12.9693 9.90636C13.0125 10.7695 12.8554 11.5878 12.557 
              12.3247C11.7598 14.2871 9.9062 15.6796 7.73452 15.7121V13.6642C7.73452 13.5502 7.59707 13.4892 7.50675 13.5584L3.43435 
              16.6607C3.36759 16.7137 3.36759 16.8195 3.43435 16.8684L7.50282 19.9708C7.59707 20.04 7.73059 19.9789 7.73059 
              19.8649V17.8129C11.0333 17.7763 13.8215 15.4678 14.7051 12.3247C14.9721 11.3802 15.0664 10.3583 14.9525 9.29973C14.7954 
              7.85846 14.2378 6.53934 13.4013 5.45636C13.0557 5.00851 12.4392 4.91487 11.9954 5.25279C11.532 5.607 11.4456 6.29099 
              11.8069 6.7592Z"
              fill="white" />
          </svg>
        </button>
      </div>
      <select class="lang-wrapper">
        <option class="lang-1 en" value='en'>EN</option>
        <option class="lang-2 ru" value='ru'>RU</option>
        <option class="lang-3 be" value='be'>BE</option>
      </select>
      <div class="unit-of-measurement">
        <button class="fahrenheit" type="button" id="fahrenheit">F&deg</button>
        <button class="celsius" type="button" id="celsius">C&deg</button>
      </div>
    </section>
    <section class="search">
      <div class="input-wrapper">
        <div id="geocoder" class="geocoder"></div>
        <div class="input-wrapper_voice-input">
          <svg width="16" height="18" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.86774 11.003C7.00412 11.003 6.26271 10.7403 5.64351 10.2149C5.02431 9.68954 4.71472 9.06737 4.71472 8.34841V3.03921C4.71472 
              2.29261 5.02431 1.66352 5.64351 1.15196C6.26271 0.640395 7.00412 0.384613 7.86774 0.384613C8.73135 0.384613 9.46462 0.640395 10.0675
               1.15196C10.6704 1.66352 10.9719 2.29261 10.9719 3.03921V8.34841C10.9719 9.06737 10.6704 9.68954 10.0675 10.2149C9.46462 10.7403
                8.73135 11.003 7.86774 11.003ZM13.3672 8.34841H15.1759C15.1759 9.84163 14.5649 11.1482 13.3428 12.2681C12.1207 13.388 10.646 
                14.0586 8.91874 14.2798V17.1833H6.81673V14.2798C5.08949 14.0586 3.61482 13.3811 2.39272 12.2474C1.17062 11.1136 0.55957 9.81398 
                0.55957 8.34841H2.3194C2.3194 9.62041 2.87342 10.685 3.98145 11.5422C5.08949 12.3994 6.38492 12.8281 7.86774 12.8281C9.35055 
                12.8281 10.6378 12.3994 11.7296 11.5422C12.8213 10.685 13.3672 9.62041 13.3672 8.34841Z"
              fill="white" fill-opacity="0.4" />
          </svg>
        </div>
      </div>
  
    </section>
    <section class="data">
      <div class="location"></div>
      <div class="time"></div>
      <div class="weather">
        <span class="weather_temperature">0</span>
        <div class="weather_visual-description ">
          <div class="owf-5x owf"></div>
        </div>
        <div class="weather_atmosphere">
          <span class="description"></span>
          <span class="feel">
            <span class="parameter lang en">FEELS LIKE:</span>
            <span class="parameter lang ru">ОЩУЩАЕТСЯ:</span>
            <span class="parameter lang be">АДЧУВАЕЦЦА:</span>
            <span class="value"></span>
          </span>
          <span class="wind">
            <span class="parameter lang en">WIND:</span>
            <span class="parameter lang ru">ВЕТЕР:</span>
            <span class="parameter lang be">ВЕТЕР:</span>
            <span class="value"></span>
            <span class="meas lang en"> m/s</span>
            <span class="meas lang ru"> м/c</span>
            <span class="meas lang be"> м/c</span>
          </span>
          <span class="humidity">
            <span class="parameter lang en">HUMIDITY:</span>
            <span class="parameter lang ru">ВЛАЖНОСТЬ:</span>
            <span class="parameter lang be">ВIЛЬГОТНАСЦЬ:</span>
            <span class="value"></span>
          </span>
        </div>
      </div>
      <div class="weather-on-three-days">
        <div class="day-wrapper day-wrapper-1">
          <span class="day"></span>
          <span class="temperature temperature-1">0</span>
          <span class="owf-5x owf"></span>
        </div>
        <div class="day-wrapper day-wrapper-2">
          <span class="day"></span>
          <span class="temperature temperature-2">0</span>
          <span class="owf-5x owf"></span>
        </div>
        <div class="day-wrapper day-wrapper-3">
          <span class="day"></span>
          <span class="temperature temperature-3">0</span>
          <span class="owf-5x owf"></span>
        </div>
      </div>
    </section>
    <section class="map-wrapper">
      <div id="map"></div>
      <div class="coordinates">
        <span class="coord latitude lang en">Latitude:<span class="value"></span></span>
        <span class="coord latitude lang ru">Широта:<span class="value"></span></span>
        <span class="coord latitude lang be">Шырата:<span class="value"></span></span>
        <span class="coord longitude lang en">Longitude: <span class="value"></span></span>
        <span class="coord longitude lang ru">Долгота: <span class="value"></span></span>
        <span class="coord longitude lang be">Даўгата: <span class="value"></span></span>
      </div>
    </section>
  </div>
  </div>`;

  body.innerHTML = DOM;

  for (let item of langTags) item.style.display = 'none';
  document.querySelectorAll(`.${data.lang}`).forEach(item => item.style.display = 'inline');

  const langWrapperValue = document.querySelector(`.lang-wrapper .${data.lang}`);
  langWrapperValue.setAttribute('selected', 'true');
}

export default domRender;