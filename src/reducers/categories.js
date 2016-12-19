import {
  FETCH_CATEGORIES,
} from '../actions';

const selectCategory = (state = [{_id: "1", title: "Category Test"}], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload.data;
    default:
      return state
  }
}

export default selectCategory;
