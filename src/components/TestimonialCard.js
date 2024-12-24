import React from 'react';
import '../styles/TestimonialCard.css'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    // role: "Marketing Director",
    content: "This product has completely transformed how we handle our daily operations. The efficiency gains have been remarkable.",
  },
  {
    id: 2,
    name: "Michael Chen",
    // role: "Software Engineer",
    content: "The level of customer support is outstanding. Every interaction has been prompt and helpful.",
  },
  {
    id: 3,
    name: "Emma Williams",
    // role: "Product Manager",
    content: "I've worked with many similar tools, but this one stands out for its intuitive design and powerful features.",
  }
];

const TestimonialCard = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2>What Our Clients Say</h2>
          <p>Discover why companies trust us to deliver exceptional results</p>
        </div>
        
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="card-background"></div>
              
              <div className="card-content">
                <div className="avatar">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                
                <div className="testimonial-text">
                  <p>"{testimonial.content}"</p>
                  
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;