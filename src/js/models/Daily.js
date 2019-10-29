export default class Daily {
  constructor(temp, description, wind, humidity, dt, icon, max, min) {
    this.temp = temp;
    this.description = description;
    this.wind = wind;
    this.humidity = humidity;
    this.dt = dt;
    this.icon = icon;
    this.max = max;
    this.min = min;
  }
}
