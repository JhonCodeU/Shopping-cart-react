import { createStore } from 'redux';
import products from '../data/products';

const initialState = {
  product: products,
  cart: [],
  total: 0
}

// Reducer is a function that takes the current state and an action as arguments, and returns a new state result.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('Adding to cart');
      console.log(action);
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;