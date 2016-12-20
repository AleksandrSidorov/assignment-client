export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'

import axios from 'axios'


export function fetchCategories() {
  const request = axios.get('http://localhost:8008/categories')
  return {
    type: FETCH_CATEGORIES,
    payload: request
  }
}

export function fetchProducts(catId) {
  const request = axios.get(`http://localhost:8008/products/${catId}`)
  return {
    type: FETCH_PRODUCTS,
    payload: request
  }
}

export function setCurrentCategory(catId) {
  return {
    type: SET_CURRENT_CATEGORY,
    catId
  }
}
