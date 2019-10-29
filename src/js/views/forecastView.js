import { elements } from './base';

const renderIcon = icon => {
  let iconClass = '';
  switch (icon) {
    case '01d':
      iconClass = 'wi wi-day-sunny';
      break;
    case '02d':
      iconClass = 'wi wi-day-sunny-overcast';
      break;
    case '01n':
      iconClass = 'wi wi-night-clear';
      break;
    case '02n':
      iconClass = 'wi wi-night-partly-cloudy';
      break;
    default:
      iconClass = '';
  }

  switch (icon.substr(0, 2)) {
    case '03':
      iconClass = 'wi wi-cloud';
      break;
    case '04':
      iconClass = 'wi wi-cloudy';
      break;
    case '09':
      iconClass = 'wi wi-showers';
      break;
    case '10':
      iconClass = 'wi wi-rain';
      break;
    case '11':
      iconClass = 'wi wi-thunderstorm';
      break;
    case '13':
      iconClass = 'wi wi-snow';
      break;
    case '50':
      iconClass = 'wi wi-fog';
      break;
    default:
      iconClass = '';
  }
  elements.weatherIcon.className = '';
  iconClass.split(' ').forEach(el => {
    elements.weatherIcon.classList.add(el);
  });
};

const changeBackground = temp => {
  let backgroundClass = '';
  if (temp >= 80) {
    backgroundClass = 'hot';
  } else if (temp >= 70) {
    backgroundClass = 'warm';
  } else if (temp >= 60) {
    backgroundClass = 'cool';
  } else {
    backgroundClass = 'cold';
  }
  elements.body.className = '';
  elements.body.classList.add(backgroundClass);
};

const clearDaily = () => {
  elements.forecastLabel.innerHTML = '';
};

const renderMain = item => {
  renderIcon(item.icon);
  changeBackground(item.temp);
  elements.dateLabel.textContent = item.getDay(item.dt);
  elements.descriptionLabel.textContent = item.description;
  elements.windLabel.textContent = `Wind: ${item.wind}mph`;
  elements.humidityLabel.textContent = `Humidity: ${item.humidity}mph`;
  elements.numLabel.textContent = item.temp;
};

const renderDaily = array => {
  clearDaily();
  let dailyStr = '';
  array.forEach(item => {
    const str = `
    <div class='block'>
      <h3 class='secondary'>${item.getDay(item.dt).substring(0, 3)}</h3>
      <h2 class='high'>${item.max}</h2>
      <h4 class='secondary'>${item.min}</h4>
    </div>`;
    dailyStr += str;
  });
  elements.forecastLabel.insertAdjacentHTML('beforeend', dailyStr);
};

export const renderUI = ({ name, country, daily }) => {
  //1. Render city name
  elements.cityLabel.textContent = `${name}, ${country}`;
  //2. Render Main
  renderMain(daily[0]);
  //3. Render daily
  renderDaily(daily.slice(1));
};
