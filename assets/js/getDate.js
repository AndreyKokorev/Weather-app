import {
  data
} from '../../index.js';

function getDate() {
  let date = new Date();

  getTime()
  getDayOFWeek();

  function getTime() {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timeZone: data.timeZone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    const enMonth = ['FEB.', 'MAR.', 'APR.', 'MAY', 'JUNE', 'JULY', 'AUG.', 'SEPT.', 'OCT.', 'NOV.', 'DEC.', 'JAN.'];
    const ruMonth = ['ФЕВ.', 'МАР.', 'АПР.', 'МАЙ', 'ИЮН.', 'ИЮЛ.', 'АВГ.', 'СЕН.', 'ОКТ.', 'НОЯ.', 'ДЕК.', 'ЯНВ.'];
    const beMonth = ['ЛЮТ.', 'САК.', 'КРАС.', 'МАЙ', 'ЧЕРВ.', 'ЛIП.', 'ЖНIВ.', 'ВЕР.', 'КАСТ.', 'ЛIС.', 'СНЕЖ.', 'СТУД.'];
    const enWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    const ruWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    const beWeek = ['НД', 'ПН', 'АТ', 'СР', 'ЧЦ', 'ПТ', 'СБ'];

    date = date.toLocaleString('ru', options).split(' ');
    date.splice(3, 1);
    date.splice(3, 1);

    if (data.lang === 'en') {
      date[0] = enWeek[new Date().getDay()];
      date[2] = enMonth[new Date().getMonth() - 1];
    } else if (data.lang === 'ru') {
      date[0] = ruWeek[new Date().getDay()];
      date[2] = ruMonth[new Date().getMonth() - 1];
    } else {
      date[0] = beWeek[new Date().getDay()];
      date[2] = beMonth[new Date().getMonth() - 1];
    }
    date[3] = date[3].slice(0, 5);
    data.time = date.join(' ');
  }

  function getDayOFWeek() {
    const daysOfWeek = {
      en: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
      ru: ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'],
      be: ['НЯДЗЕЛЯ', 'ПАНЯДЗЕЛАК', 'АЙУТОРАК', 'СЕРАДА', 'ЧАЦЬВЕР', 'ПЯТНIЦА', 'СЫБОТА']
    };
    let day = new Date().getDay();
    if (day === 6) day = 0;
    day += 1;
    data.day1 = daysOfWeek[data.lang][day];
    if (day === 6) {
      day = 0;
    } else {
      day += 1;
    }
    data.day2 = daysOfWeek[data.lang][day];
    if (day === 6) {
      day = 0;
    } else {
      day += 1;
    }
    data.day3 = daysOfWeek[data.lang][day];
  }
}

export default getDate;