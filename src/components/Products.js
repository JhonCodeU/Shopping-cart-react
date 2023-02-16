import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

const Products = ({ products, addToCart }) => {

  return (
    <div>
      <h3>Products</h3>
      <ContenedorProductos>
        {products.map((product, index) => (
          <Producto key={index}>
            <p>{product.name}</p>
            <p>${product.price}</p>
            <Boton
              onClick={() => addToCart(product)}
            >
              Add to cart
            </Boton>
          </Producto>
        ))}
      </ContenedorProductos>
    </div>
  );
}

const ContenedorProductos = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;

const Producto = styled.div`
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;
 
    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
`;

const Boton = styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: .3s ease all;
 
    &:hover {
        background: #1c6ab9;
    }
`;

const mapStateToProps = (state) => {
  return {
    products: state.product
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart (product) {
      dispatch({
        type: 'ADD_TO_CART',
        product
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);