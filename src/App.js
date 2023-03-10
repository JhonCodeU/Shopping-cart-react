import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import Store from './components/Store'
import Error404 from './components/Error404'
import products from './data/products'
import Cart from './components/Cart'

const App = () => {

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id)
    if (productInCart) {
      setCart(
        cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  return (
    <Contenedor>
      <Menu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/store">Store</NavLink>
      </Menu>
      <main>
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/store" element={
            <Store
              products={products}
              addToCart={addToCart}
            />
          } />
        </Routes>
      </main>
      <aside>
        <Cart cart={cart} />
      </aside>
    </Contenedor>
  );
}

const Contenedor = styled.div`
      max-width: 1000px;
      padding: 40px;
      width: 90%;
      display: grid;
      gap: 20px;
      grid-template-columns: 2fr 1fr;
      background: #fff;
      margin: 40px 0;
      border-radius: 10px;
      box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
      `;

const Menu = styled.nav`
      width: 100%;
      text-align: center;
      background: #092c4c;
      grid-column: span 2;
      border-radius: 3px;

    a {
      color: #fff;
      display: inline-block;
      padding: 15px 20px;
    }

    a:hover {
      background: #1d85e8;
      text-decoration: none;
    }
      `;

export default App;