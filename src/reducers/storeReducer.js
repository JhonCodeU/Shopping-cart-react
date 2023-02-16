import { createStore } from 'redux';
import products from '../data/products';

const initialState = {
  product: products,
  cart: [],
}

// Reducer is a function that takes the current state and an action as arguments, and returns a new state result.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':

      const { product } = action;
      const { cart } = state;

      const productInCart = cart.find((item) => item.id === product.id)

      // If the product is already in the cart, increase the quantity by 1
      if (cart.length === 0) {
        return {
          ...state,
          cart: [{ ...product, quantity: 1 }]
        }
      } else {
        if (productInCart) {
          return {
            ...state,
            cart: cart.map((item) => {
              if (item.id === product.id) {
                return {
                  ...item,
                  quantity: item.quantity + 1
                }
              }
              return item;
            })
          }
        } else {
          return {
            ...state,
            cart: [...cart, { ...product, quantity: 1 }]
          }
        }
      }

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;