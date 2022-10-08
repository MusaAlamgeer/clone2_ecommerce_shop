/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import commerce from './lib/commerce';
import { Products, Navbar, Cart } from './components';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    const tempCart = await commerce.cart.retrieve();
    setCart(tempCart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  // console.log(cart);

  return (
    <>
      <Navbar totalItems={cart.total_items} />
      <Routes>
        <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
