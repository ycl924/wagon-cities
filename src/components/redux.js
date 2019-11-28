import { createStore } from 'redux';
// import uuid from 'uuid/v4';

// initial state
const cities = [
  { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
  { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
  { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
];
const initialState = {
  cityList: cities,
  activeCity: cities[0]
};

// actions
export const selectCity = (city) => {
  return ({
    type: 'SELECT_CITY',
    payload: city
  });
};

// reducers
function reducer(state, action) {
  switch (action.type) {
    case 'SELECT_CITY': {
      return {
        cityList: state.cityList,
        activeCity: action.payload
      };
    }
    default:
      return state;
  }
}


// store
/* eslint-disable no-underscore-dangle */
export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
