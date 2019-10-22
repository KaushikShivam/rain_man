import { KEY, BASE_URL } from '../config';

// export default class Search {
//   constructor(query) {
//     this.query = query;
//   }

//   getResults = () => {
//     console.log('ahha');
//   };
// }

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const res = await fetch(`${BASE_URL}q=${this.query}&appid=${KEY}`);
    const data = await res.json();
    return data;
  }
}
