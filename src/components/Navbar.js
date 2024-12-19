import React, { useState } from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img 
            src="/api/placeholder/40/40" 
            alt="Logo" 
            className="logo-image"
          />
          <span className="logo-text">MyApp</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <a href="#" className="navbar-link">
            <i className="icon home-icon"></i>
            <span>Home</span>
          </a>

          {/* Products Dropdown */}
          <div 
            className="navbar-dropdown"
            onMouseEnter={() => setIsProductDropdownOpen(true)}
            onMouseLeave={() => setIsProductDropdownOpen(false)}
          >
            <button className="navbar-link dropdown-toggle">
              <i className="icon shopping-icon"></i>
              <span>Products</span>
              <i className={`dropdown-arrow ${isProductDropdownOpen ? 'rotate' : ''}`}></i>
            </button>

            {isProductDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-column">
                  <h4 className="dropdown-column-title">
                    <i className="icon droplet-icon"></i>
                    Hygiene Products
                  </h4>
                  <ul>
                    <li><a href="#">Hand Sanitizers</a></li>
                    <li><a href="#">Disinfectant Sprays</a></li>
                    <li><a href="#">Cleaning Wipes</a></li>
                  </ul>
                </div>

                <div className="dropdown-column">
                  <h4 className="dropdown-column-title">
                    <i className="icon leaf-icon"></i>
                    Organic Products
                  </h4>
                  <ul>
                    <li><a href="#">Natural Soaps</a></li>
                    <li><a href="#">Eco-friendly Cleaners</a></li>
                    <li><a href="#">Biodegradable Wipes</a></li>
                  </ul>
                </div>

                <div className="dropdown-column">
                  <h4 className="dropdown-column-title">
                    <i className="icon cart-icon"></i>
                    Accessories
                  </h4>
                  <ul>
                    <li><a href="#">Dispensers</a></li>
                    <li><a href="#">Protective Gear</a></li>
                    <li><a href="#">Cleaning Tools</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="navbar-link">
            <i className="icon user-icon"></i>
            <span>Profile</span>
          </a>

          <a href="#" className="navbar-link">
            <i className="icon settings-icon"></i>
            <span>Settings</span>
          </a>

          <a href="#" className="navbar-link">
            <i className="icon mail-icon"></i>
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#" className="mobile-link">
            <i className="icon home-icon"></i>
            <span>Home</span>
          </a>

          <div 
            className="mobile-dropdown"
            onClick={toggleProductDropdown}
          >
            <div className="mobile-dropdown-header">
              <div>
                <i className="icon shopping-icon"></i>
                <span>Products</span>
              </div>
              <i className={`dropdown-arrow ${isProductDropdownOpen ? 'rotate' : ''}`}></i>
            </div>

            {isProductDropdownOpen && (
              <div className="mobile-dropdown-content">
                <div className="mobile-dropdown-section">
                  <h4>Hygiene Products</h4>
                  <ul>
                    <li><a href="#">Hand Sanitizers</a></li>
                    <li><a href="#">Disinfectant Sprays</a></li>
                  </ul>
                </div>

                <div className="mobile-dropdown-section">
                  <h4>Organic Products</h4>
                  <ul>
                    <li><a href="#">Natural Soaps</a></li>
                    <li><a href="#">Eco-friendly Cleaners</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="mobile-link">
            <i className="icon user-icon"></i>
            <span>Profile</span>
          </a>

          <a href="#" className="mobile-link">
            <i className="icon settings-icon"></i>
            <span>Settings</span>
          </a>

          <a href="#" className="mobile-link">
            <i className="icon mail-icon"></i>
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;