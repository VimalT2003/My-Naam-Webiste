// AboutUs.js
import React, { useEffect } from 'react';
import '../styles/aboutStyles.css';

const AboutUs = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('about-animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.about-cards-container, .about-timeline-item, .about-team-grid, .about-stats-grid, .about-contact-content').forEach(element => {
      observer.observe(element);
    });
  }, []);

  return (
    <div className="about-container">
      <AboutHero />
      <AboutMainContent />
      <AboutTimelineSection />
      <AboutTeamSection />
      <AboutStatsSection />
      <AboutContactSection />
    </div>
  );
};

const AboutHero = () => (
  <section className="about-hero">
    <div className="about-hero-content">
      <h1>Innovation Tech</h1>
      <p>Transforming ideas into reality through innovative technology solutions</p>
    </div>
  </section>
);

const AboutMainContent = () => (
  <section className="about-main-content">
    <h2 className="about-section-title">Who We Are</h2>
    <div className="about-cards-container">
      <div className="about-card">
        <h2>Our Mission</h2>
        <p>We strive to deliver cutting-edge solutions that empower businesses to thrive in the digital age. Through innovation and expertise, we help our clients achieve their goals and stay ahead of the competition.</p>
      </div>
      <div className="about-card">
        <h2>Our Vision</h2>
        <p>To be the leading force in technological innovation, creating solutions that positively impact businesses and communities worldwide while maintaining our commitment to excellence and sustainability.</p>
      </div>
      <div className="about-card">
        <h2>Our Values</h2>
        <p>Innovation, integrity, collaboration, and excellence form the cornerstone of our company culture. We believe in fostering an environment where creativity thrives and challenges become opportunities.</p>
      </div>
    </div>
  </section>
);

const AboutTimelineSection = () => (
  <section className="about-timeline-section">
    <h2 className="about-section-title">Our Journey</h2>
    <div className="about-timeline">
      <div className="about-timeline-item">
        <div className="about-timeline-content">
          <h3>2014</h3>
          <p>Founded with a vision to transform the technology landscape</p>
        </div>
      </div>
      <div className="about-timeline-item">
        <div className="about-timeline-content">
          <h3>2016</h3>
          <p>Expanded operations to international markets</p>
        </div>
      </div>
      <div className="about-timeline-item">
        <div className="about-timeline-content">
          <h3>2018</h3>
          <p>Launched our innovative cloud solutions platform</p>
        </div>
      </div>
      <div className="about-timeline-item">
        <div className="about-timeline-content">
          <h3>2020</h3>
          <p>Achieved industry leadership in AI and machine learning solutions</p>
        </div>
      </div>
      <div className="about-timeline-item">
        <div className="about-timeline-content">
          <h3>2024</h3>
          <p>Revolutionizing the future with cutting-edge technologies</p>
        </div>
      </div>
    </div>
  </section>
);

const AboutTeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in tech innovation",
      image: "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png" // Replace with your image path
    },
    {
      name: "David Chen",
      role: "CTO",
      description: "Technical genius behind our groundbreaking solutions",
      image: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" // Replace with your image path
    },
    {
      name: "Emily Rodriguez",
      role: "COO",
      description: "Operations expert ensuring seamless delivery",
      image: "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369990.png" // Replace with your image path
    },
    {
      name: "Michael Kim",
      role: "Head of Innovation",
      description: "Leading our R&D initiatives into the future",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTV7zNI3SMqTFg6_L_3veUQrrAFJz_Utwf-L_wuW8vw1n9r35kPDvyQ9TiPuLgqWhFeI&usqp=CAU" // Replace with your image path
    }
  ];

  return (
    <section className="about-team-section">
      <h2 className="about-section-title">Our Leadership</h2>
      <div className="about-team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="about-team-member">
            <div className="about-member-image">
              <img 
                src={member.image} 
                alt={member.name}
                className="member-img"
              />
            </div>
            <h3>{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const AboutStatsSection = () => (
  <section className="about-stats-section">
    <h2 className="about-section-title" style={{ color: 'white' }}>Our Impact</h2>
    <div className="about-stats-grid">
      <div className="about-stat-item">
        <div className="about-stat-number">10+</div>
        <p className='text-white'>Years of Experience</p>
      </div>
      <div className="about-stat-item">
        <div className="about-stat-number">500+</div>
        <p className='text-white'>Projects Completed</p>
      </div>
      <div className="about-stat-item">
        <div className="about-stat-number">100+</div>
        <p className='text-white'>Team Members</p>
      </div>
      <div className="about-stat-item">
        <div className="about-stat-number">50+</div>
        <p className='text-white'>Countries Served</p>
      </div>
    </div>
  </section>
);

const AboutContactSection = () => (
  <section className="about-contact-section">
    <div className="about-contact-content">
      <h2 className="about-section-title">Get In Touch</h2>
      <p>Ready to transform your business with innovative technology solutions? We're here to help you succeed.</p>
      <p>Email: contact@innovationtech.com</p>
      <p>Phone: (555) 123-4567</p>
      <p>Location: Silicon Valley, CA</p>
    </div>
  </section>
);

export default AboutUs;