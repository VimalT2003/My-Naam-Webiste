// AboutUs.js
import React, { useEffect, useRef } from "react";
import "../styles/aboutStyles.css";
import {
  MapPinHouse,
  Phone,
  MailOpenIcon,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import naambanner from "../images/naambanner.webp";
import { motion } from "framer-motion";
import blood1 from "../images/blood1.jpeg";
import blood2 from "../images/blood2.jpeg";
import event2 from "../images/event2.jpeg";
import event3 from "../images/event3.jpeg";
import event4 from "../images/event4.jpeg";
import event5 from "../images/event5.jpeg";
import warehouse from "../images/warehouse.jpeg";
import event11 from "../images/event11.jpeg";
import blood3 from "../images/blood3.jpeg";
import group from "../images/group.jpeg";
import mainimage from "../images/mainimage.jpeg";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about-animate");
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(
        ".about-cards-container, .about-timeline-item, .about-team-grid, .about-stats-grid, .about-contact-content"
      )
      .forEach((element) => {
        observer.observe(element);
      });
  }, []);

  return (
    <div className="about-container">
      <AboutHero />
      <AboutMainContent />
      <ProductsServicesSection />
      <AboutTimelineSection />
      {/* <AboutTeamSection /> */}
      <AboutStatsSection />
      <ImageGallerySection />
      <BloodDonationSection />
      <EventCards />
      <AboutContactSection />
      <LastSection />
    </div>
  );
};

const AboutHero = () => (
  <section className="about-hero">
    <div className="shape shape-1"></div>
    <div className="shape shape-2"></div>

    <div className="hero-container mt-md-4">
      <div className="hero-content">
        <h1>NAAM Industrial Solutions</h1>
        <h3 style={{ color: "#FFFF00" }}>
          ( NEED, ANALYSE, and ARRANGE THE MATERIAL )
        </h3>{" "}
        {/* Added abbreviation */}
        <p>
          With 19 years of experience in Industrial Safety Products, NAAM
          Industrial Solutions is emerging as a leading solution provider. We
          take immense pleasure in introducing ourselves as your trusted
          partner, dedicated to fulfilling all your industrial requirements.
        </p>
        <p className="client-message">
          We are responsible for your{" "}
          <strong style={{ color: "#FFFF00" }}>
            <span style={{ fontSize: "37px" }}>H</span>appy{" "}
            <span style={{ fontSize: "37px" }}>S</span>mil
            <span style={{ fontSize: "37px" }}>E</span>
          </strong>{" "}
          😃!
        </p>{" "}
        {/* Added client message */}
      </div>

      <div className="hero-image">
        <img src={naambanner} alt="Innovation Tech" />
      </div>
    </div>
  </section>
);

const AboutMainContent = () => (
  <section className="about-main-content">
    <h2 className="about-section-title">Who We Are</h2>
    <div className="about-cards-container">
      <div className="about-card">
        <h2>Our Mission</h2>
        <p>
          To provide comprehensive industrial solutions that address safety,
          security, and environmental challenges while continuously improving
          quality standards through training and collaboration.
        </p>
      </div>
      <div className="about-card">
        <h2>Our Vision</h2>
        <p>
          To become a globally recognized leader in industrial safety solutions
          by aligning customer needs with innovative and reliable products and
          services, ensuring sustainable growth and safety excellence.
        </p>
      </div>
      <div className="about-card">
        <section id="our-values">
          <h2>Our Values</h2>
          <p>
            We are committed to meeting and exceeding customer expectations
            through dedication and innovation. Integrity is at the core of our
            operations, ensuring honesty and transparency in all our dealings.
          </p>
        </section>
      </div>
    </div>
  </section>
);

const ProductsServicesSection = () => {
  const productservice = [
    {
      title: "Fire Safety Trainings",
      description: "Chemical Safety, Mock and Evacuation Drills",
      icon: "🔥",
    },
    {
      title: "Security Products",
      description: "Face Recognition Attendance",
      icon: "🔒",
    },
    {
      title: "Environmental Products",
      description: "Dustbins, Entry Mats",
      icon: "🌱",
    },
    {
      title: "Material Handling Equipment",
      description: "Professional grade equipment",
      icon: "🏗️",
    },
    {
      title: "FRP Ladders",
      description: "Durable and safe access solutions",
      icon: "🪜",
    },
    {
      title: "Traffic Safety Products",
      description: "Comprehensive traffic management",
      icon: "🚦",
    },
    {
      title: "Industrial Water Tanks",
      description: "Reliable storage solutions",
      icon: "💧",
    },
    {
      title: "Health Center Furniture",
      description: "Professional medical furniture",
      icon: "🏥",
    },
    {
      title: "Industrial Tapes and Adhesives",
      description: "High-performance bonding solutions",
      icon: "🔧",
    },
    {
      title: "Industrial Coatings",
      description: "Specialized protective coatings",
      icon: "🎨",
    },
  ];

  return (
    <section className="naam-products-section">
      <div className="naam-products-wrapper">
        <h2 className="about-section-title">Our Products and Services</h2>
        <div className="naam-products-grid">
          {productservice.map((product, index) => (
            <motion.div
              key={index}
              className="naam-product-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              <div className="naam-product-icon">{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutTimelineSection = () => (
  <section className="about-timeline-section">
    <h2 className="about-section-title">Our Journey</h2>
    <div className="about-timeline">
      <div className="about-timeline-item">
        <div className="about-timeline-content">
          <h3>December 30, 2020 - Founded</h3>
          <p>
            NAAM Industrial Solutions was established, marking the beginning of
            a journey toward excellence in industrial safety solutions.
          </p>
        </div>
      </div>
      <div className="about-timeline-item">
        <div className="about-timeline-content">
          <h3>July 2023 - Warehouse Inauguration</h3>
          <p>
            Celebrated the opening of our state-of-the-art warehouse, enhancing
            our storage and distribution capabilities.
          </p>
        </div>
      </div>
      <div className="about-timeline-item">
        <div className="about-timeline-content">
          <h3>September 2023 - First CTP</h3>
          <p>
            Successfully launched our first Certified Training Program (CTP) to
            empower professionals with industry-leading safety practices.
          </p>
        </div>
      </div>
      <div className="about-timeline-item">
        <div className="about-timeline-content">
          <h3>2024 - NAAM Safety Professional Association Groups</h3>
          <p>
            Formed exclusive professional groups dedicated to promoting
            industrial safety standards and collaboration within the community.
          </p>
        </div>
      </div>
      {/* <div className="about-timeline-item">
        <div className="about-timeline-content">
          <h3>2024</h3>
          <p>Revolutionizing the future with cutting-edge technologies</p>
        </div>
      </div> */}
    </div>
  </section>
);

// const AboutTeamSection = () => {
//   const teamMembers = [
//     {
//       name: "Sarah Johnson",
//       role: "CEO & Founder",
//       description: "Visionary leader with 15+ years in tech innovation",
//       image: "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png" // Replace with your image path
//     },
//     {
//       name: "David Chen",
//       role: "CTO",
//       description: "Technical genius behind our groundbreaking solutions",
//       image: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" // Replace with your image path
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "COO",
//       description: "Operations expert ensuring seamless delivery",
//       image: "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369990.png" // Replace with your image path
//     },
//     {
//       name: "Michael Kim",
//       role: "Head of Innovation",
//       description: "Leading our R&D initiatives into the future",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTV7zNI3SMqTFg6_L_3veUQrrAFJz_Utwf-L_wuW8vw1n9r35kPDvyQ9TiPuLgqWhFeI&usqp=CAU" // Replace with your image path
//     }
//   ];

//   return (
//     <section className="about-team-section">
//       <h2 className="about-section-title">Our Leadership</h2>
//       <div className="about-team-grid">
//         {teamMembers.map((member, index) => (
//           <div key={index} className="about-team-member">
//             <div className="about-member-image">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="member-img"
//               />
//             </div>
//             <h3>{member.name}</h3>
//             <p className="member-role">{member.role}</p>
//             <p className="member-description">{member.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

const AboutStatsSection = () => (
  <section className="about-stats-section">
    <h2 className="about-section-title" style={{ color: "white" }}>
      Our Impact
    </h2>
    <div className="about-stats-grid">
      <div className="about-stat-item">
        <div className="about-stat-number">15+</div>
        <p className="text-white">Years of Experience</p>
      </div>
      <div className="about-stat-item">
        <div className="about-stat-number">50+</div>
        <p className="text-white">Products Avaliable</p>
      </div>
      <div className="about-stat-item">
        <div className="about-stat-number">5+</div>
        <p className="text-white">Training Programs Provided</p>
      </div>
      <div className="about-stat-item">
        <div className="about-stat-number">PAN India</div>
        <p className="text-white">Service Available</p>
      </div>
    </div>
  </section>
);

const ImageGallerySection = () => {
  const scrollRef = useRef(null);
  const galleryImages = [
    {
      id: 1,
      src: mainimage,
      alt: "Industrial Safety Equipment",
      title: "Safety First",
      description: "State-of-the-art safety equipment for industrial use",
      date: "March 2024",
    },
    {
      id: 2,
      src: event2,
      alt: "Training Session",
      title: "Professional Training",
      description: "Expert-led training sessions for industrial safety",
      date: "February 2024",
    },
    {
      id: 3,
      src: event3,
      alt: "Product Display",
      title: "Quality Products",
      description: "Premium quality industrial safety products",
      date: "January 2024",
    },
    {
      id: 4,
      src: event4,
      alt: "Team Meeting",
      title: "Collaborative Approach",
      description: "Team discussions for better solutions",
      date: "December 2023",
    },
    {
      id: 5,
      src: event5,
      alt: "Warehouse",
      title: "State-of-art Facility",
      description: "Modern warehouse facility for efficient operations",
      date: "November 2023",
    },
    // {
    //   id: 6,
    //   src: vivega,
    //   alt: "Client Meeting",
    //   title: "Customer Focus",
    //   description: "Dedicated customer service and support",
    //   date: "October 2023"
    // }
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="gallery-section">
      <h2 className="about-section-title">Our Events</h2>
      <div className="gallery-container">
        <button className="scroll-button left" onClick={() => scroll("left")}>
          <ChevronLeft size={24} />
        </button>

        <div className="gallery-scroll" ref={scrollRef}>
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="gallery-image-container">
                <img src={image.src} alt={image.alt} />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h3>{image.title}</h3>
                    <p className="image-description">{image.description}</p>
                    <span className="image-date">{image.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-button right" onClick={() => scroll("right")}>
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

const BloodDonationSection = () => {
  const donationEvents = [
    {
      id: 1,
      date: "March 15, 2024",
      location: "Shanthi Social Services.",
      donors: 45,
      image: blood1,
      description: "Annual Blood Donation Camp",
    },
    {
      id: 2,
      date: "December 10, 2023",
      location: "Royal care hospital...",
      donors: 32,
      image: blood2,
      description: "Emergency Blood Drive",
    },
    {
      id: 3,
      date: "August 20, 2023",
      location: "Marathon",
      donors: 20,
      image: blood3,
      description: "Marathon",
    },
  ];

  return (
    <section className="blood-donation-section">
      <Helmet>
        <title>
          About NAAM - Trusted Industrial Tools and Equipment Supplier in
          Coimbatore
        </title>
        <meta
          name="description"
          content="NAAM is a leading supplier of industrial tools, safety products, and heavy equipment in Coimbatore. Learn more about our commitment to quality and customer service."
        />
        <meta
          name="keywords"
          content="NAAM Coimbatore, industrial tools supplier, about NAAM, equipment supplier Saravanampatty, safety equipment"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <h2 className="about-section-title">CSR Initiatives</h2>
      <p className="donation-intro">
        Making a difference in our community through regular blood donation
        camps
      </p>

      <div className="donation-events-grid">
        {donationEvents.map((event) => (
          <div key={event.id} className="donation-event-card">
            <div className="event-image">
              <img src={event.image} alt={event.description} />
            </div>
            <div className="event-details">
              <h3>{event.description}</h3>
              <p className="event-date">Date: {event.date}</p>
              <p className="event-location">Location: {event.location}</p>
              <div className="donor-count">
                <span className="donor-number">{event.donors}</span>
                <span className="donor-label">
                  {event.donors !== 20 ? "Donor" : "KM"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const EventCards = () => {
  const events = [
    {
      id: 1,
      title: "Warehouse inauguration",
      description:
        "We are thrilled to announce the grand inauguration of our new warehouse, marking a significant milestone in our journey. Join us in celebrating this step towards enhanced efficiency and growth!",
      image: warehouse,
    },
    {
      id: 2,
      title: "Ergonomics Program",
      description:
        "An Ergonomics Program focuses on designing work environments and tasks to improve comfort, safety, and efficiency, reducing the risk of work-related injuries. It includes workstation assessments, training, equipment adjustments, and regular monitoring to ensure employee well-being.",
      image: group,
    },
    {
      id: 3,
      title: "Ergonomics Program",
      description:
        "An Ergonomics Program focuses on designing work environments and tasks to improve comfort, safety, and efficiency, reducing the risk of work-related injuries. It includes workstation assessments, training, equipment adjustments, and regular monitoring to ensure employee well-being.",
      image: event11,
    },
  ];

  return (
    <div className="events-container">
      <h1 className="text-center mb-5">Our Programs</h1>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>

              {/* <div className="event-detail">
                <Calendar className="icon" />
                <span>{event.date}</span>
              </div> */}

              {/* <div className="event-detail">
                <Clock className="icon" />
                <span>{event.time}</span>
              </div> */}
              {/*               
              <div className="event-detail">
                <MapPin className="icon" />
                <span>{event.location}</span>
              </div> */}

              <p className="event-description">{event.description}</p>

              {/* <button className="register-button">
                Register Now
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutContactSection = () => (
  <section className="about-contact-section">
    <div className="about-contact-content">
      <h2 className="about-section-title">Get In Touch</h2>
      <p>
        Ready to transform your business with NAAM Industrial solutions? We're
        here to help you.
      </p>
      <p>
        <MailOpenIcon size={20} color="blue" /> Email: naamsales1@gmail.com ,
        naamuser21@gmail.com
      </p>
      <p>
        <Phone size={20} color="blue" /> Phone: 95668 88208
      </p>
      <p>
        <MapPinHouse size={28} color="blue" /> Location: 2/268 A, Annai
        Vellankanni Nagar, 3rd Street East, Saravanampatty Post, Vilankurichi
        Road, Coimbatore - 641 035.
      </p>
    </div>
  </section>
);

const LastSection = () => (
  <div class="appreciation-message mb-5">
    <p>
      Thank you for being a part of our journey. Your trust and support are the
      driving force behind our success—without you, we wouldn't be where we are
      today. Together, we can achieve great things!
    </p>
  </div>
);

export default AboutUs;
