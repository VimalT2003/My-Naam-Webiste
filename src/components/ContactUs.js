import React from 'react';
import '../styles/ContactUs.css'
// import '../styles/Banner.css'

const ContactInfo = () => {
  return (
    <div>

 <div className="safety-banner">
      <div className="overlay ms-5">
        <h1>Contact us</h1>
        <p>Home / Contact us</p>
      </div>
    </div>

 <div className="contact-info-container">
      <div className="contact-card">
        <div className="icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <h3>Address</h3>
        <p>123 Main St, Downtown,</p>
        <p>Springfield, IL 62701</p>
        <p>United States</p>
      </div>
      
      <div className="contact-card">
        <div className="icon">
          <i className="fas fa-phone-alt"></i>
        </div>
        <h3>Phone</h3>
        <p>Customer Support:</p>
        <p>(+1) 555-123-4567</p>
        <p>Office: (+1) 555-987-6543</p>
      </div>
      
      <div className="contact-card">
        <div className="icon">
          <i className="fas fa-envelope"></i>
        </div>
        <h3>Email</h3>
        <p>Support: support@example.com</p>
        <p>Sales: sales@example.com</p>
        <p>General Inquiries: info@example.com</p>
      </div>
    </div>
    </div>
   
  );
};

export default ContactInfo;
