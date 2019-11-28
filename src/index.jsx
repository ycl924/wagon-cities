// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import '../assets/stylesheets/application.scss';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';



// render an instance of the component in the DOM
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
