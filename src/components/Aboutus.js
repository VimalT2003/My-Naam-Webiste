import React from "react";
import "../styles/Aboutus.css";
import AccordionItem from "./AccordionItem";
// import sampleImage from './sample-image.png';

const Aboutus = () => {
  return (
    <div>

<div className="safety-banner">
      <div className="overlay ms-5">
        <h1>About Us</h1>
        <p>Home / About Us</p>
      </div>
    </div>

 <div className="container">
      <div className="intro-text">
        <p>
          We offer a wide range of safety products and equipment, from
          protective gear to fire safety solutions. Our products include
          helmets, gloves, fire alarms, extinguishers, and more, catering to
          various safety needs.
        </p>
      </div>

      <div className="content">
        <div className="image-container">
          {/* <img src={sampleImage} alt="Safety Equipment" /> */}
          <img
            src="https://150533017.v2.pressablecdn.com/wp-content/uploads/2016/05/iStock_000068633157_Large.jpg"
            alt="Safety Equipment"
          />
        </div>
        <div className="description">
          <p>
            Our company is dedicated to providing top-quality safety solutions
            for industrial and commercial applications. With state-of-the-art
            technology, we ensure all our products meet the highest safety
            standards and offer excellent customer support to guarantee
            satisfaction.
          </p>
        </div>
      </div>
      <AccordionItem/>
    </div>
    </div>
   
  );
};

export default Aboutus;
