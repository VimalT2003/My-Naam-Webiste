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
          <i className="fas fa-phone-alt"></i>
        </div>
        <h3>Phone</h3>
        <p>Customer Support:</p>
        <p>9566888290</p>
      </div>
      
      <div className="contact-card">
        <div className="icon">
          <i className="fas fa-envelope"></i>
        </div>
        <h3>Email</h3>
        <p>Support: Naamuser21@gmail.com,,</p>
        <p>naamsales1@gmail.com</p>
      </div>
    </div>
    </div>
   
  );
};

export default ContactInfo;
