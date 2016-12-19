export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

import axios from 'axios';
/*
const client = axios.create({
  baseURL: 'http://localhost:8008',
  responseType: 'json'
});
*/

export function fetchCategories() {
  const request = axios.get('http://localhost:8008/categories');
  return {
    type: FETCH_CATEGORIES,
    payload: request
  }
}

export function fetchProducts(catId) {
  console.log('arg: ', catId);
  const request = axios.get(`http://localhost:8008/products/${catId}`);
  console.log('Action fired - fetchProducts', request);
  return {
    type: FETCH_PRODUCTS,
    payload: request
  }
}
