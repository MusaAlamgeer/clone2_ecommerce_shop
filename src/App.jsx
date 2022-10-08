/* eslint-disable no-shadow */
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
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };
  // console.log(cart);

  return (
    <>
      <Navbar totalItems={cart.total_items} />
      <Routes>
        <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
        <Route
          path="/cart"
          element={(
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          )}
        />
      </Routes>
    </>
  );
}

export default App;
