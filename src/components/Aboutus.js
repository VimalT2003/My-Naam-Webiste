import React from 'react';
import '../styles/Aboutus.css'
import visit from '../images/visit.jfif'
import expo from '../images/expo.jfif'
import training from '../images/training.jfif'

const Aboutus = () => {
  const events = [
    {
      title: "Fire Safety Training Programs",
      description: "Our specialized Fire Safety Training programs cover comprehensive chemical safety protocols, mock drills, and evacuation procedures. We believe in practical, hands-on training that ensures your team is well-prepared for any emergency situation.",
      date: "Ongoing",
      location: "Pan India",
      imagePosition: "right",
      image: training
    },
    {
      title: "Industrial Solutions Showcase",
      description: "We regularly showcase our complete range of industrial safety solutions, from material handling equipment to advanced protective coatings. These events provide hands-on experience with our products and direct interaction with our technical experts.",
      date: "Monthly",
      location: "Multiple Locations",
      imagePosition: "left",
      image: expo
    }
  ];

  return (
    <div className="about-us-container">
      {/* Header Section */}
      <header className="header">
        <h1>NAAM Industrial Solutions</h1>
        <p>19 Years of Excellence in Industrial Safety Products and Solutions</p>
      </header>

      {/* Who We Are Section */}
      <section className="who-we-are">
        <div className="content">
          <div className="text-content">
            <h2>Who We Are</h2>
            <p>At NAAM Industrial Solutions, we are dedicated to being your complete solution provider for industrial safety needs. Our approach is defined by our name: we find your NEEDS, ANALYSE requirements, and ARRANGE MATERIAL for all your industrial demands. With 19 years of expertise, we've established ourselves as a trusted partner in industrial safety and solutions.</p>
          </div>
          <div className="image-content">
            <img 
              src={visit} 
              alt="NAAM Industrial Team" 
              className="team-image"
            />
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="journey-timeline">
        <h2>Our Journey of Excellence</h2>
        <div className="timeline-container">
          {[
            { 
              year: 2005, 
              title: "Foundation", 
              description: "Started our journey in industrial safety products with a vision to become a comprehensive solution provider.",
              icon: "🚀"
            },
            { 
              year: 2015, 
              title: "Service Expansion", 
              description: "Expanded our portfolio to include specialized training programs and comprehensive industrial solutions.",
              icon: "🏆"
            },
            { 
              year: 2024, 
              title: "Market Leadership", 
              description: "Achieved 19 years of excellence in providing industrial safety solutions across various sectors.",
              icon: "🌍"
            }
          ].map((milestone, index) => (
            <div 
              key={milestone.year} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-icon">{milestone.icon}</div>
              <div className="timeline-content">
                <h3>{milestone.year}: {milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <div className="events-container">
        <h2 className="events-title">Our Solutions & Services</h2>
        
        {events.map((event) => (
          <div 
            key={event.title} 
            className={`event-wrapper ${event.imagePosition === 'right' ? 'image-right' : 'image-left'}`}
          >
            <div className={`event-image ${event.imagePosition === 'right' ? 'order-2' : ''}`}>
              <img 
                src={event.image} 
                alt={event.title} 
                className="event-photo"
              />
            </div>
            <div className={`event-content ${event.imagePosition === 'right' ? 'order-1 pr-8' : 'pl-8'}`}>
              <h3 className="event-name">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <div className="event-details">
                <span className="event-date-location">
                  {event.date} | {event.location}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="event-wrapper image-right">
          <div className="event-content order-1 pr-8">
            <h3 className="event-name">Contact Us</h3>
            <p className="event-description">
              We're here to help with all your industrial safety needs. Get in touch with us for professional consultation and solutions.
            </p>
            <div className="event-details">
              <span className="event-date-location">
                Email: Naamuser21@gmail.com, naamsales1@gmail.com | Phone: +91 9566888290
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Aboutus;