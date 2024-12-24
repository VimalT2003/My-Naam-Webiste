// Footer.jsx
import React from 'react';
import '../styles/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* <div className="footer-section">
          <h3>NAAM</h3>
          <p>We're dedicated to creating amazing digital experiences that bring value to our users.</p>
          <div className="social-links">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div> */}

        <div className="footer-section ulsection">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className='ms-md-3'><Link to="/about">About Us</Link></li>
            <li className='ms-md-3'><Link to="/product">Products</Link></li>
            <li className='ms-md-3'><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section ms-md-5">
          <h3>Contact Info</h3>
          <ul>
            <li>📍 123 Business Street</li>
            <li>📧 Naamuser21@gmail.com</li>
            <li>📞 9566888290</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p className='text-white'>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;