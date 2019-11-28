import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import CityList from './citylist';
import ActiveCity from './activecity';


const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <CityList />
        <ActiveCity />
      </div>
    </Provider>
  );
};

export default App;
