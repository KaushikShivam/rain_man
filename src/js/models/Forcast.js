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

  // eslint-disable-next-line class-methods-use-this
  createDaily(item) {
    const temp = Math.round(item.main.temp);
    const { description } = item.weather[0];
    const wind = item.wind.speed;
    const { humidity } = item.main;
    const date = item.dt_txt;
    const { icon } = item.weather[0];
    const max = item.main.temp_max;
    const min = item.main.temp_min;
    return new Daily(temp, description, wind, humidity, date, icon, max, min);
  }
}
