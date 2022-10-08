/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import commerce from './lib/commerce';
import { Products, Navbar } from './components';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="App">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;