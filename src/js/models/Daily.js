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

  getDay(dt) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(dt * 1000);
    return days[d.getDay()];
  }

  getCorrectTemp(temp, type) {
    if (type === 'fahrenheit') {
      return temp;
    } else if ('celsius') {
      return Math.round((temp - 32) * (5 / 9));
    }
  }
}
