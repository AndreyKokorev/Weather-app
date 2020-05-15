import {data} from '../../index.js';

function speechRecognition() {
  let btn = document.querySelector('.input-wrapper_voice-input');
  let svg = btn.children[0];

    let recognizer = new webkitSpeechRecognition();
    let lang = {
      en: 'en-En',
      ru: 'ru-Ru',
      be: 'be-Be'
    };
  
    recognizer.interimResults = true;
  
    btn.addEventListener('click', () => {
      let input = document.querySelector('.mapboxgl-ctrl-geocoder--input');
  
      recognizer.lang = lang[data.lang];
      recognizer.start();
      svg.classList.add('recognition-on');
     
      recognizer.onresult = function (e) {
        let result = e.results[e.resultIndex];
  
        if (result.isFinal) {
          input.value = result[0].transcript;
          svg.classList.remove('recognition-on');
          recognizer.stop();
        } else {
          input.value = result[0].transcript;
        }
      };
    }); 
}

export default speechRecognition;