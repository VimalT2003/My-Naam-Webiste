import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, User, ShoppingCart, Phone, Menu, X } from 'lucide-react';
import naamlogo from '../images/naamlogo.jpg'
import '../styles/ModernNavbar.css';

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const navigate = useNavigate(); // React Router navigation hook

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: '/', label: 'Home', icon: Home },
    { id: '/about', label: 'About', icon: User },
    { id: '/product', label: 'Products', icon: ShoppingCart },
    { id: '/contact', label: 'Contact', icon: Phone }
  ];

  const handleNavigation = (id) => {
    setActiveItem(id);
    navigate(id);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <div className="logo">
        <span className={`logo-text ${scrolled ? 'scrolled' : ''}`}>
         <img src={naamlogo} style={{height:"70px",width:"100%",background:"transparent"}} alt="naam"/>
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="nav-menu">
        <div className="menu-items">
          {menuItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              className={`menu-item ${activeItem === id ? 'active' : ''} ${
                scrolled ? 'scrolled' : ''
              }`}
            >
              <Icon className="menu-icon" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-toggle ${scrolled ? 'scrolled' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {menuItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => {
              handleNavigation(id);
              setIsOpen(false); // Close mobile menu after navigation
            }}
            className={`mobile-item ${activeItem === id ? 'active' : ''}`}
          >
            <Icon className="menu-icon" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default ModernNavbar;
