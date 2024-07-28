import React, { useState } from 'react';
import Header from './Header';
import './ProductListingPage.css';

const products = [
  { id: 1, name: 'Snake Plant', price: 15, description: 'Produces oxygen at night, improving air quality.', image: 'path/to/snake-plant.jpg' },
  { id: 2, name: 'Spider Plant', price: 12, description: 'Filters formaldehyde and xylene from the air.', image: 'path/to/spider-plant.jpg' },
  // add more products here
];

const ProductListingPage = ({ cartCount, setCartCount }) => {
  const [cartItems, setCartItems] = useState({});

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const newItems = { ...prevItems };
      if (newItems[product.id]) {
        newItems[product.id].quantity += 1;
      } else {
        newItems[product.id] = { ...product, quantity: 1 };
      }
      return newItems;
    });
    setCartCount(cartCount + 1);
  };

  return (
    <div className="product-listing-page">
      <Header cartCount={cartCount} />
      <div className="product-groups">
        <h2>Air Purifying Plants</h2>
        <div className="product-cards">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p>{product.description}</p>
              <button onClick={() => handleAddToCart(product)}>
                {cartItems[product.id] ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
        {/* Add more groups here */}
      </div>
    </div>
  );
};

export default ProductListingPage;