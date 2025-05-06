import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">FRN</div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#shop">Shop</a>
          <a href="#support">Support</a>
        </div>
        <p className="footer-copy">&copy; 2025 Furniture Co. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
