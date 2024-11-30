// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <p>&copy; 2024 Your Food Company</p>
    </footer>
  );
}

export default Footer;
