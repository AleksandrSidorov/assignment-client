import {
  SELECT_CATEGORY,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES
} from '../actions';

const selectCategory = (state, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.category
    default:
      return state
  }
}

export default selectCategory;
