import React from 'react'
import Products from './Products';

const Store = ({ addToCart }) => {
  return (
    <div>
      <h1>Store</h1>
      <Products
        addToCart={addToCart}
      />
    </div>
  );
}

export default Store;