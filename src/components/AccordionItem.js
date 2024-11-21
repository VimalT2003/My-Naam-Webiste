// Accordion.js
import React, { useState, useRef, useEffect } from "react";
import "../styles/Accordion.css";

const AccordionItem = ({ title, content, iconUrl, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(contentRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isOpen]);

  return (
    <div>
      <div className="accordion-item">
        <div className="accordion-header" onClick={onClick}>
          <div className="accordion-title">
            <span>{title}</span>
          </div>
          <button className={`accordion-toggle ${isOpen ? "open" : ""}`}>
            <span className="toggle-icon">{isOpen ? "-" : "+"}</span>
          </button>
        </div>
        <div
          className="accordion-content-wrapper"
          style={{ maxHeight: `${maxHeight}px` }}
        >
          <div className="accordion-content" ref={contentRef}>
            <img src={iconUrl} alt="Icon" className="accordion-icon" />
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <AccordionItem
        title="Mission"
        content="It's the policy of the company to provide customers with products and services which achieve and sustain the highest possible quality standards. This statement is the basis of our management philosophy and reflects the commitment of every individual within the organization."
        iconUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXymVsr4AK4_Y214jUQIwlJjGfklOfAFh0F-xxUaf19GOkxp4qNO4oxEHM1Et4-ucA5M&usqp=CAU" // Replace with your icon URL
        isOpen={openIndex === 0}
        onClick={() => handleAccordionClick(0)}
      />
      <AccordionItem
        title="Vision"
        content="Our vision is to be a leader in the industry by offering quality services."
        iconUrl="https://cdn-icons-png.flaticon.com/512/561/561094.png" // Replace with your icon URL
        isOpen={openIndex === 1}
        onClick={() => handleAccordionClick(1)}
      />
      <AccordionItem
        title="Quality"
        content="We are dedicated to maintaining quality standards in all our processes."
        iconUrl="https://img.freepik.com/free-vector/award-ribbon-check-mark-with-stars_78370-1097.jpg" // Replace with your icon URL
        isOpen={openIndex === 2}
        onClick={() => handleAccordionClick(2)}
      />
    </div>
  );
};

export default Accordion;
