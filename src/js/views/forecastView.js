import { elements } from './base';

const renderMain = item => {
  elements.dateLabel.textContent = item.getDay(item.dt);
  elements.descriptionLabel.textContent = item.description;
  elements.windLabel.textContent = `Wind: ${item.wind}mph`;
  elements.humidityLabel.textContent = `Humidity: ${item.humidity}mph`;
  elements.numLabel.textContent = item.temp;
};

const renderDaily = array => {
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
