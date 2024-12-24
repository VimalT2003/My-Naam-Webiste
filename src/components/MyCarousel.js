import React, { useState, useEffect } from 'react';
import recycleBin from '../images/Naam.png'
import Mat from '../images/matnaam.webp'
import '../styles/MyCarousel.css'
import { useNavigate } from 'react-router-dom';
import barrierNaam from '../images/barrier.webp'

const MyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate()
  const slides = [
    {
      image: recycleBin,
      title: "Smart Waste Solution",
      description: "Designed for durability with high-quality materials and innovative craftsmanship to keep your space clean and organized.",
      buttonText: "Shop Now"
    },
    {
      image: "https://files.oaiusercontent.com/file-KF7LQEAobS5qnjPibHA8b1?se=2024-12-24T07%3A18%3A42Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D231ab3b4-4522-429b-b8e9-1b6306616a5d.webp&sig=UpVBIAryZZXUm6oKHF2M7GcAJPioYxM3CfV4%2BhRs/FU%3D",
      title: "NAAM Parking Barrier System",
      description: "Secure and efficient access control with a sleek, durable design, perfect for modern parking solutions.",
      buttonText: "Learn More"
    },
    {
      image: Mat,
      title: "Superior Floor Mat",
      description: "Engineered with premium materials and expert craftsmanship to provide maximum durability, comfort, and style for any space.",
      buttonText: "Explore"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleButtonClick = () => {
    // Add your button click handler here
    navigate('/product')
    console.log('Button clicked for slide:', currentSlide);
  };

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div
            className="carousel-image"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="carousel-overlay" />
          <div className="carousel-content">
            <h1 className="carousel-title">{slide.title}</h1>
            <p className="carousel-subtitle">{slide.description}</p>
            <button 
              className="carousel-button"
              onClick={handleButtonClick}
            >
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCarousel;