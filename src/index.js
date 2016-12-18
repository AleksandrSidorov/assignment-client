import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducers';
/*

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
baseURL: 'http://localhost:8008',
responseType: 'json'
});
const store = createStore(
reducer,
//  applyMiddleware(axiosMiddleware(client))
);
<Provider store={store}>
</Provider>,

*/

import './index.css';


ReactDOM.render(
    <App />,
  document.getElementById('root')
);
