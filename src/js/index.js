import { elements } from './views/base';
import Search from './models/Search';
import * as formView from './views/formView';
import * as forecastView from './views/forecastView';
import Forecast from './models/Forcast';

/** Global state of the app
 * - Search object
 */
const state = {};

/**
 * SEARCH CONTROLLER
 */
const searchController = async () => {
  // 1. Get query from the view
  const input = formView.getInput();
  if (input) {
    // 2. store the query in the global state
    state.search = new Search(input);
    // 3. Clear input
    formView.clearInput();
    // 4. Might want to add logic for a loader here

    try {
      // 5. Search for the city
      await state.search.getResults();
      // 6. Create Forecase object
      const { city, list } = state.search.result;
      state.forecast = new Forecast(city.name, city.country, list);
      console.log(state.forecast);
      // 7. Render UI
      forecastView.renderUI(state.forecast);
    } catch (error) {
      alert(error);
    }
  } else {
    alert('Enter a valid city name');
  }
};

elements.searchBtn.addEventListener('click', e => {
  e.preventDefault();
  searchController();
});
