import React from 'react';
import "../styles/MyCarousel.css"

const MyCarousel = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.shutterstock.com/image-photo/instructor-demonstrate-used-fire-extinguisher-260nw-1328655671.jpg" className="d-block w-100 carousel-image" alt="Slide 1" />
          <div className="carousel-caption d-none d-md-block" style={{position: "absolute",top: "155px",left: "465px"}}>
            <h2 style={{fontSize:'5rem'}}>NAAM</h2>
          </div>
        </div>

        <div className="carousel-item">
          <img src="https://media.licdn.com/dms/image/D4D12AQE-_31sP8pMrg/article-cover_image-shrink_600_2000/0/1660907348876?e=2147483647&v=beta&t=vLi_GEN-Pg2dY2i_Sr9QQyBUZbcpN5roThGgz1r-00U" className="d-block w-100 carousel-image" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block" style={{position: "absolute",top: "-10px",left: "0px"}}>
          <h2>NAAM</h2>
          </div>
        </div>

        <div className="carousel-item">
          <img src="https://5.imimg.com/data5/SELLER/Default/2024/11/467114283/SW/ZL/AL/234876236/fire-system-and-fire-safety-equipment-in-india.jpg" className="d-block w-100 carousel-image" alt="Slide 3" />
          {/* <div className="carousel-caption d-none d-md-block" style={{position: "absolute",top: "0px",left: "-178px"}}>
          <h2>NAAM</h2>
          </div> */}
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MyCarousel;

