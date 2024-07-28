import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ cartCount }) => {
  return (
    <header>
      <Link to="/">
        <h1>Paradise Nursery</h1>
        <p>Where Green Meets Serenity</p>
      </Link>
      <Link to="/cart">
        <div className="cart-icon">
          <span>{cartCount}</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;