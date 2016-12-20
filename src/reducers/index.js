import { combineReducers } from 'redux';
import categories from './categories';
import products from './products';
import currentCategory from './currentCategory'

const prodApp = combineReducers({
  categories,
  products,
  currentCategory
});

export default prodApp;
