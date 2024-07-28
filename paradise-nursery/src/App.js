import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListingPage cartCount={cartCount} setCartCount={setCartCount} />} />
          <Route path="/cart" element={<ShoppingCartPage cartCount={cartCount} setCartCount={setCartCount} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;