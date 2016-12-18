import { combineReducers } from 'redux';
import categories from './categories';
import modals from './modals';

const prodApp = combineReducers({
  categories,
//  modals
});

export default prodApp;
