// SiteMap.js
import React from "react";
import "../styles/SiteMap.css"

const SiteMap = () => {
  return (
    <div>
        <div className="safety-banner">
      <div className="overlay ms-5">
        <h1>Sitemap</h1>
        <p>Home / Sitemap</p>
      </div>
    </div>

    <div className="footer-container my-4">
      <nav className="nav-menu">
        <a href="#home">Home</a> | <a href="#about">About Us</a> | <a href="#safety">Safety First</a> | 
        <a href="#gallery">Gallery</a> | <a href="#contact">Contact Us</a> | <a href="#enquiry">Enquiry</a> | 
        <a href="#sitemap">Sitemap</a>
      </nav>

      <div className="menu-section">
        <div className="menu-column">
          <h3 className="menu-heading">Our Products</h3>
          <ul className="menu-list">
            <li>Fire Safety / Protection Equipments, Systems</li>
            <li>Road Construction Safety Equipments</li>
            <li>Fire Safety Personal Protective Equipments</li>
            <li>Fire Safety Training Services</li>
            <li>Emergency Escape Route Plans, Signages, Sign Boards</li>
          </ul>
        </div>

        <div className="menu-column">
          <h3 className="menu-heading">Our Services</h3>
          <ul className="menu-list">
            <li>Fire Fighting Equipments</li>
            <li>Fire Service</li>
            <li>Safety</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default SiteMap;
