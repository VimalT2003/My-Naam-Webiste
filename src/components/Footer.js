// Footer.jsx
import React from 'react';
import '../styles/Footer.css'
import { Link } from 'react-router-dom';
import CounterComponent from './CounterComponent';

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
            <li>📍 2/268 A, Annai Vellankanni Nagar, 3rd Street East, Saravanampatty Post, Vilankurichi Road, Coimbatore - 641 035.</li>
            <li>📧 naamuser21@gmail.com</li>
            <li>📧 naamsales1@gmail.com</li>
            <li>📞 95668 88208</li>
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

      <CounterComponent/>
      <div className="footer-bottom">
        <p className='text-white'>&copy; 2024 NAAM Industrial Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;