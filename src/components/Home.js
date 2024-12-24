import React from 'react';
// import Header from './Header';
import MyCarousel from './MyCarousel'
// import ProductCard from './ProductGrid';
import TestimonialCard from './TestimonialCard';
import StatsSection from './StatsSection';
import '../styles/Home.css'
// import ProductGrid from './ProductGrid';
import ProductCategories from './ProductCategories';
import HoverCards from './HoverCards';

const Home = () => {
  const products = [
    {
      name: "Fire Extinguishers",
      description: "High-quality fire extinguishers for various fire types",
      image: "/assets/images/products/fire-extinguisher.jpg"
    },
    {
      name: "Safety Gear",
      description: "Personal protective equipment for industrial use",
      image: "/assets/images/products/safety-gear.jpg"
    },
    {
      name: "Emergency Lighting",
      description: "Reliable emergency lighting solutions",
      image: "/assets/images/products/emergency-lighting.jpg"
    },
    {
      name: "First Aid Kits",
      description: "Comprehensive first aid solutions for workplaces",
      image: "/assets/images/products/first-aid.jpg"
    }
  ];

  // const testimonials = [
  //   {
  //     name: "John Smith",
  //     position: "Safety Manager, ABC Industries",
  //     text: "The quality of their safety equipment and training services is exceptional. Highly recommended!",
  //     image: "/assets/images/testimonials/person1.jpg"
  //   },
  //   {
  //     name: "Sarah Johnson",
  //     position: "Plant Director, XYZ Corp",
  //     text: "Their prompt service and expert guidance have significantly improved our workplace safety standards.",
  //     image: "/assets/images/testimonials/person2.jpg"
  //   },
  //   {
  //     name: "Michael Brown",
  //     position: "CEO, Safety First Ltd",
  //     text: "A reliable partner in industrial safety. Their products and support are top-notch.",
  //     image: "/assets/images/testimonials/person3.jpg"
  //   }
  // ];

  return (
    <div className="home">
      {/* <Header /> */}
      <MyCarousel />
      {/* <ProductGrid/> */}
      
      {/* <section className="products-section">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="products-grid">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section> */}

      <HoverCards/>    

      <ProductCategories/>

  

      <StatsSection />

      <section className="testimonials-section">
        {/* <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div> */}
        <TestimonialCard/>
      </section>
    </div>
  );
};

export default Home;