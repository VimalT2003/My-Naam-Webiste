import React from "react";
import MyCarousel from "./MyCarousel";
import TestimonialCard from "./TestimonialCard";
import StatsSection from "./StatsSection";
import "../styles/Home.css";
import ProductCategories from "./ProductCategories";
import HoverCards from "./HoverCards";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Home - NAAM Tools</title>
        <meta
          name="description"
          content="NAAM supplies industrial tools, heavy equipment, and safety products in Coimbatore, near Saravanampatty. Explore our range of fire safety, hygiene, and automation products."
        />
        <meta
          name="keywords"
          content="industrial tools Coimbatore, heavy equipment supplier, safety products Saravanampatty, NAAM tools, flameproof products Coimbatore"
        />
        <meta name="author" content="NAAM" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <MyCarousel />

      <HoverCards />

      <ProductCategories />

      <StatsSection />

      <section className="testimonials-section">
        <TestimonialCard />
      </section>
    </div>
  );
};

export default Home;
