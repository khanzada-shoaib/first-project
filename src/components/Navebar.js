import React from 'react';
import './Navebar.css';
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a>FRN</a>
      </div>
      <ul className="links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#support">Support</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
