import 'App.global.css';
import React from 'react';
import Root from './Root';
import logger from 'redux-logger';
import { render } from 'react-dom';
import AppReducer from 'reducers/AppReducer';
import { createStore, applyMiddleware } from 'redux';

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(
  AppReducer,
  applyMiddleware(...middlewares),
);

render(
  <Root store={store} />,
  document.getElementById('root')
);
