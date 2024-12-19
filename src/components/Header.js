import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const productItems = [
    'Hygiene',
    'Road Construction Safety Equipments',
    'Fire Safety Personal Protective Equipments',
    'Fire Safety Training Services',
    'Emergency Escape Route Plans, Signages, Sign Boards'
  ];

  return (
    <div className="header-container">
      {/* Top Email Bar */}
      {/* <div className="email-bar">
        <div className="email-content">
          <div className="mail-icon"></div>
          <a href="mailto:response@saifiresafety.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope me-2" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg> response@xyz.com
          </a>
        </div>
      </div> */}

      {/* Main Header */}
      <div className="main-header">
        <div className="header-content">
          {/* Logo Section */}
          <div className="logo-section">
            {/* <img src={logo} alt="Company Logo" className="logo" /> */}
            NAAM
          </div>

          {/* Navigation */}
          <nav className="navigation">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/product" className="nav-link">All Products</Link>
            {/* Products Dropdown */}
            {/* <div className="dropdown">
              <button className="nav-link dropdown-button">
                Products
                <div className="chevron-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg></div>
              </button>
              <div className="dropdown-content">
                {productItems.map((item, index) => (
                  <Link
                    key={index}
                    to={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="dropdown-item"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div> */}

            <Link to="/safety" className="nav-link">Safety First</Link>
            {/* <Link to="/gallery" className="nav-link">Gallery</Link> */}
            <Link to="/contact" className="nav-link">Contact Us</Link>
            <Link to="/enquiry" className="nav-link">Enquiry</Link>
            {/* <Link to="/sitemap" className="nav-link">Sitemap</Link> */}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
