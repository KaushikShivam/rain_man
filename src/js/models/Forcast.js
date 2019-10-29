/* eslint-disable class-methods-use-this */
import Daily from './Daily';

export default class Forecast {
  constructor(name, country, list) {
    this.name = name;
    this.country = country;
    this.daily = this.updateDailyResults(list);
  }

  updateDailyResults(data) {
    const res = [];
    res.push(this.createDaily(data[0]));
    for (let i = 1; i < data.length; i += 8) {
      const item = data[i];
      res.push(this.createDaily(item));
    }
    return res;
  }

  createDaily(item) {
    const temp = Math.round(item.main.temp);
    const { description } = item.weather[0];
    const wind = item.wind.speed;
    const { humidity } = item.main;
    const date = item.dt;
    const { icon } = item.weather[0];
    const max = Math.round(item.main.temp_max);
    const min = Math.round(item.main.temp_min);
    return new Daily(temp, description, wind, humidity, date, icon, max, min);
  }
}
