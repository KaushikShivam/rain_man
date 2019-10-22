// index.js acts as the controller as the project is small
import Search from './models/Search';

/** Global state of the app
 * - Search object
 */
const state = {};

/**
 * SEARCH CONTROLLER
 */

// state.search = new Search('New Delhi');

// document.querySelector('.search__btn').addEventListener('click', async e => {
//   e.preventDefault();
//   const query = document.querySelector('#search__input').value;
//   try {
//     const result = await state.search.getResults(query);
//     console.log(result);
//   } catch (error) {
//     // eslint-disable-next-line no-alert
//     alert(error);
//   }
// });
