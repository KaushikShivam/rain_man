import { KEY, BASE_URL } from '../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await fetch(`${BASE_URL}q=${this.query}&appid=${KEY}`);
      const data = await res.json();
      this.result = data;
      console.log(data);
    } catch (error) {
      alert(error);
    }
  }
}
