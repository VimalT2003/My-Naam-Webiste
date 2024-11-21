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
          <img src="https://kanexfire.com/blog/wp-content/uploads/2023/05/Fire-Safety-Training-for-employee.jpg" className="d-block w-100 carousel-image" alt="Slide 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Prevent Fires Before They Start</h5>
            <p className="text-white">Identify and eliminate fire hazards in your workplace and home. Regular inspections and safe practices can prevent fires before they happene.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="https://t3.ftcdn.net/jpg/09/53/72/96/360_F_953729664_fu7i3MeZW9deLQk7pL1xRQMHgF9pF2Ap.jpg" className="d-block w-100 carousel-image" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Equip Yourself with the Right Tool</h5>
            <p className="text-white">Fire extinguishers, alarms, and protective gear are essential for immediate response. Make sure your fire safety equipment is accessible and in working order.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="https://www.shutterstock.com/image-photo/fire-extinguisher-has-hand-engineer-260nw-2302759673.jpg" className="d-block w-100 carousel-image" alt="Slide 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Know the Emergency Exits</h5>
            <p className="text-white">In case of a fire, every second counts. Familiarize yourself with emergency exits and evacuation routes to ensure a quick, safe escape.</p>
          </div>
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

