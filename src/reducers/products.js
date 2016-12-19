import {
  FETCH_PRODUCTS,
} from '../actions';

const selectProduct = (state = [{_id: 1, title: "Product Test", buy_price: 111, sell_price: 222}], action) => {
  console.log('Action received by selectProduct: ', action);
  switch (action.type) {
    case FETCH_PRODUCTS:
      console.log(action.payload.data[0].products);
      return action.payload.data[0].products;
    default:
      return state
  }
}

export default selectProduct;
