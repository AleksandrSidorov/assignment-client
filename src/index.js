import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import App from './App';
import reducer from './reducers';

/*
import axiosMiddleware from 'redux-axios-middleware';
*/

const store = createStore(
  reducer,
  applyMiddleware(reduxPromise)
);

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
