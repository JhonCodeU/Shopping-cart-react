import { createStore } from 'redux';

const initialState = {
  product: [
    { id: 1, name: 'product A', price: 100 },
    { id: 2, name: 'product B', price: 200 },
    { id: 3, name: 'product C', price: 300 }
  ],

  cart: [1, 2, 3]
}

const reducer = (state = initialState, action) => {
  return state;
}

const store = createStore(reducer);

export default store;