import {
  FETCH_CATEGORIES,
} from '../actions';

const selectCategory = (state = [{_id: 1, title: "Category Test"}], action) => {
  console.log('Action received: ', action);
  switch (action.type) {
    case FETCH_CATEGORIES:
      console.log(action.payload.data);
      return action.payload.data;
    default:
      return state
  }
}

export default selectCategory;
