import React, { useState, useEffect } from 'react';
import Header from './Header';
import './ShoppingCartPage.css';

const ShoppingCartPage = ({ cartCount, setCartCount }) => {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    // Load cart items from local storage or state management
  }, []);

  const handleIncrease = (id) => {
    setCartItems((prevItems) => {
      const newItems = { ...prevItems };
      newItems[id].quantity += 1;
      return newItems;
    });
    setCartCount(cartCount + 1);
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) => {
      const newItems = { ...prevItems };
      if (newItems[id].quantity > 1) {
        newItems[id].quantity -= 1;
      } else {
        delete newItems[id];
      }
      return newItems;
    });
    setCartCount(cartCount - 1);
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => {
      const newItems = { ...prevItems };
      setCartCount(cartCount - newItems[id].quantity);
      delete newItems[id];
      return newItems;
    });
  };

  const totalItems = Object.values(cartItems).reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = Object.values(cartItems).reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart-page">
      <Header cartCount={totalItems} />
      <div className="cart-items">
        {Object.values(cartItems).map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleIncrease(item.id)}>Increase</button>
              <button onClick={() => handleDecrease(item.id)}>Decrease</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="summary">
        <p>Total Items: {totalItems}</p>
        <p>Total Cost: ${totalCost}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;