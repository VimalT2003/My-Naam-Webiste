import React from 'react';
import MyCarousel from './MyCarousel';
import "../styles/Home.css"


const Home = () => {
  return (
    <div>
      <MyCarousel/>
      
      <div className="content my-5">
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
          <button className='buttonClass mt-4'>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
