import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import createLogger from 'redux-logger';
import App from './App';
import reducer from './reducers';

/*
import axiosMiddleware from 'redux-axios-middleware';
*/
const logger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(reduxPromise, logger)
);

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
