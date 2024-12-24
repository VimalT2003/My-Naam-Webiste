import React, { useState, useEffect } from 'react';
import '../styles/ContactPage.css';
import { MapPinHouse, Phone, MailOpenIcon } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState({
    gallery: false,
    info: false,
    form: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const gallery = document.querySelector('.image-gallery');
      const info = document.querySelector('.contact-info');
      const form = document.querySelector('.contact-form');

      if (gallery) {
        const position = gallery.getBoundingClientRect();
        setIsVisible(prev => ({
          ...prev,
          gallery: position.top < window.innerHeight - 100
        }));
      }

      if (info) {
        const position = info.getBoundingClientRect();
        setIsVisible(prev => ({
          ...prev,
          info: position.top < window.innerHeight - 100
        }));
      }

      if (form) {
        const position = form.getBoundingClientRect();
        setIsVisible(prev => ({
          ...prev,
          form: position.top < window.innerHeight - 100
        }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="contact-page">
      <div className="hero">
        <div className="hero-content mt-5">
          <h1>Contact Us</h1>
          <p className='text-white'>Get in touch with our team</p>
        </div>
      </div>

      {/* <div className={`image-gallery ${isVisible.gallery ? 'visible' : ''}`}>
        <div className="gallery-item">
          <img src={training} alt="Office" />
          <div className="overlay">
            <h3>Our Office</h3>
            <p>Where innovation happens</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" alt="Team" />
          <div className="overlay">
            <h3>Our Team</h3>
            <p>Dedicated professionals</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" alt="Projects" />
          <div className="overlay">
            <h3>Our Projects</h3>
            <p>Success stories</p>
          </div>
        </div>
      </div> */}

      <div className={`contact-info ${isVisible.info ? 'visible' : ''}`}>
        <div className="info-card">
          <div className="icon"><Phone size={28} color="blue" /></div>
          <h3>Phone</h3>
          <p>+91 9566888290</p>
        </div>
        <div className="info-card">
          <div className="icon"><MailOpenIcon size={28} color="blue" /></div>
          <h3>Email</h3>
          <p>Naamuser21@gmail.com</p>
        </div>
        <div className="info-card">
          <div className="icon"><MapPinHouse size={28} color="blue" /></div>
          <h3>Address</h3>
          <p>123 Street, City, Country</p>
        </div>
      </div>

      <div className={`contact-form ${isVisible.form ? 'visible' : ''}`}>
        <h2>Send us a message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className='contactBtn' type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;