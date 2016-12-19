import { combineReducers } from 'redux';
import categories from './categories';
import products from './products';

const prodApp = combineReducers({
  categories,
  products
});

export default prodApp;
