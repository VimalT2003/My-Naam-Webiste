import React from "react";
import "../styles/Footer.css"; // For custom styling

const Footer = () => {
  return (
    <div className="footer-info-container">
      {/* Company Information */}
      <div className="company-details container">
        <p className="company-title">
          Dealers, Distributors, Suppliers, Traders, Sales And Services
          Providers of Fire Fighting Equipment, Personal Protective Equipment &
          All types of Safety Items
        </p>
        <div className="row mt-5">
          <div className="col-md-6">
            <p className="company-name">Sai Fire And Safety Solution</p>
            <p className="company-address">
              <span className="location-icon">📍</span>
              xyz,Tamilnadu,India..
            </p>
          </div>

          <div className="col-md-6">
            <p className="company-email">
              <span className="email-icon">✉️</span>
              <a href="mailto:response@saifiresafety.com">response@xyz.com</a>
            </p>
          </div>
        </div>
        <hr className="hr"/>
      </div>

      

      {/* Quick Links Section */}
      <div className="quick-links-container mb-4">
        <p className="quick-links-title">Quick Links :</p>
        <nav className="quick-links">
          <a href="/">Home</a>
          <span>|</span>
          <a href="/about">About Us</a>
          <span>|</span>
          <a href="#safety">Safety First</a>
          <span>|</span>
          <a href="#gallery">Gallery</a>
          <span>|</span>
          <a href="/contact">Contact</a>
          <span>|</span>
          <a href="#enquiry">Enquiry</a>
          <span>|</span>
          <a href="#sitemap">Sitemap</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
