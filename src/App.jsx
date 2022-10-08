/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import commerce from './lib/commerce';
import { Products, Navbar } from './components';

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

  console.log(cart);

  return (
    <div className="App">
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
