import {
  FETCH_CATEGORIES,
  SET_CURRENT_CATEGORY,
} from '../actions';

const currentCategory = (state = "", action) => {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return Object.assign({}, state, {
        curId: action.catId
      })
    case FETCH_CATEGORIES:
      return Object.assign({}, state, {
        curId: action.payload.data[0]._id
      })
    default:
      return state
  }
}

export default currentCategory;
