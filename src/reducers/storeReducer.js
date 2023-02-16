import { createStore } from 'redux';
import products from '../data/products';

const initialState = {
  product: products,

  cart: []
}

const reducer = (state = initialState, action) => {
  return state;
}

const store = createStore(reducer);

export default store;