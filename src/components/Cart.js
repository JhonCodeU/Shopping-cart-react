import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Cart = ({ cart }) => {

  return (
    <Contenedor>
      <h2>Shopping Cart</h2>
      <Total>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</Total>
      {cart.length > 0 ?
        cart.map((cartItem) => (
          <Product key={cartItem.id}>
            <ProductName>{cartItem.name}</ProductName>
            <p>Price: ${cartItem.price}</p>
            <p>Quantity: {cartItem.quantity}</p>
          </Product>
        ))
        :
        <p>There are no products in the cart</p>
      }
    </Contenedor >
  );
}

const Contenedor = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Product = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ebebf3;
  font-size: 14px;
`;

const ProductName = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #000;
`;

const Total = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: green;
`;

export default connect((state) => ({ cart: state.cart }))(Cart)