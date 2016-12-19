import {
  FETCH_PRODUCTS,
} from '../actions';

const selectProduct = (state = [{id: 1, title: "Product Test", buy_price: 111, sell_price: 222}], action) => {
  console.log('Action received: ', action);
  switch (action.type) {
    case FETCH_PRODUCTS:
      console.log(action.payload.data);
      return [action.payload.data];
    default:
      return state
  }
}

export default selectProduct;
