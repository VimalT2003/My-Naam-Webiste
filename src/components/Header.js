import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Navbar from './Navbar';

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    // <header className={`header ${scrolled ? 'scrolled' : ''}`}>
    //   {/* <div className="email-bar">
    //     <a href="mailto:response@xyz.com" className="email-link">
    //       <span>✉️</span> response@xyz.com
    //     </a>
    //   </div> */}

    //   <div className="nav-container">
    //     <div className="nav-content">
    //       <div className="logo">NAAM</div>

    //       <nav className="navigation">
    //         <Link to="/" className="nav-link">Home</Link>
    //         <Link to="/about" className="nav-link">About Us</Link>
    //         <Link to="/product" className="nav-link">All Products</Link>
    //         <Link to="/safety" className="nav-link">Safety First</Link>
    //         <Link to="/contact" className="nav-link">Contact Us</Link>
    //         <Link to="/enquiry" className="nav-link">Enquiry</Link>
    //       </nav>

    //       <button 
    //         className="mobile-menu-button"
    //         onClick={() => setIsMenuOpen(!isMenuOpen)}
    //       >
    //         {isMenuOpen ? '✕' : '☰'}
    //       </button>
    //     </div>
    //   </div>

    //   {isMenuOpen && (
    //     <div className="mobile-menu">
    //       <Link to="/" className="nav-link">Home</Link>
    //       <Link to="/about" className="nav-link">About Us</Link>
    //       <Link to="/product" className="nav-link">All Products</Link>
    //       <Link to="/safety" className="nav-link">Safety First</Link>
    //       <Link to="/contact" className="nav-link">Contact Us</Link>
    //       <Link to="/enquiry" className="nav-link">Enquiry</Link>
    //     </div>
    //   )}
    // </header>
    <>
    <Navbar/>
    </>
  );
};

export default Header;