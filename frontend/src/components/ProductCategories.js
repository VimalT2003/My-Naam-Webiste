import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductCategories.css'

const categories = [
  {
    id: 1,
    name: 'MAT',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/11/359669209/TM/EL/BX/14294248/industrial-waves-mat-500x500.jpg',
  },
  {
    id: 2,
    name: 'Hygiene',
    image: 'https://euronics.co.in/wp-content/uploads/2024/04/ES83AC-IMG1-1-jpg.webp',
    yellowBackground: true
  },
  {
    id: 3,
    name: 'Fire Safety Products',
    image: 'https://www.firesupplies.in/wp-content/uploads/2023/03/Improfire-Short-branch-pipe-with-nozzle-SS-ISI.jpg',
  },
  {
    id: 4,
    name: 'Lockout Tagout',
    image: 'https://protectorfiresafety.com/33391-thickbox_default/loto-common-kit-plus.jpg',
  },
  {
    id: 5,
    name: 'Dustbins',
    image: 'https://www.indosurgicals.com/images/products/18028-waste-segregation-trolley-ss-60-liter-4.jpg',
  },
  {
    id: 6,
    name: 'Ladders',
    image: 'https://store.youngman.co.in/cdn/shop/products/FRPDoubleSide-7_1_2048x.png?v=1631000329',
  },
  {
    id: 7,
    name: 'Non-sparking Tools',
    image: 'https://5.imimg.com/data5/SELLER/Default/2020/11/IJ/EU/FR/3959002/non-sparking-spanner.jpg',
  }
  ,
  {
    id: 8,
    name: 'Flame Proff Products',
    image: 'https://cpimg.tistatic.com/08814296/b/4/40-W-LED-Flameproof-Light.jpg',
  }
];

const ProductCategories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(categories.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const navigatePage = useNavigate()

  return (
    <div className="categories-container">
      <div className="header-container">
        <button className="nav-button" onClick={prevSlide}>‹</button>
        <h2 className="category-title">Shop By Popular Category</h2>
        <button className="nav-button" onClick={nextSlide}>›</button>
      </div>

      <div className="categories-grid">
        {categories.slice(
          currentSlide * itemsPerSlide,
          (currentSlide + 1) * itemsPerSlide
        ).map((category) => (
          <div key={category.id} className="category-card">
            <div onClick={() => navigatePage('/product')} className={`image-container ${category.yellowBackground ? 'yellow-bg' : ''}`}>
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
            </div>
            <h3 className="category-name">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;