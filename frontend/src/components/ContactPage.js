import React, { useState, useEffect } from "react";
import "../styles/ContactPage.css";
import { MapPinHouse, Phone, MailOpenIcon } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  const adminEmail = "naamuser21@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState({
    gallery: false,
    info: false,
    form: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const gallery = document.querySelector(".image-gallery");
      const info = document.querySelector(".contact-info");
      const form = document.querySelector(".contact-form");

      if (gallery) {
        const position = gallery.getBoundingClientRect();
        setIsVisible((prev) => ({
          ...prev,
          gallery: position.top < window.innerHeight - 100,
        }));
      }

      if (info) {
        const position = info.getBoundingClientRect();
        setIsVisible((prev) => ({
          ...prev,
          info: position.top < window.innerHeight - 100,
        }));
      }

      if (form) {
        const position = form.getBoundingClientRect();
        setIsVisible((prev) => ({
          ...prev,
          form: position.top < window.innerHeight - 100,
        }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); 
  
  //   try {
  //     const scriptURL = "https://script.google.com/macros/s/AKfycbxp4vD0MT2kCXxRyct1q12zvR1SnpfBiS9dPSNN7GEV-bJewVaXR5FEKongqeiJTCfB/exec";
  
  //    const { name, email, phone, subject, message} = formEle 
  
  //     const response = await fetch(scriptURL, {
  //       method: "POST",
  //       body: (`Name=${name}&Email=${email}&Phone=${phone}&Subject=${subject}&Message=${message}`), 
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded", 
  //       },
  //     });
  
  //     if (response.ok) {
  //       setFormData({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         subject: "",
  //         message: "",
  //       });
  
  //       toast.success("Form submitted successfully");
  
  //       emailjs
  //         .send(
  //           "service_8g6la6o",
  //           "template_vp3ylni", 
  //           {
  //             to_email: adminEmail, 
  //             from_name: formEle.name,
  //             from_email: formEle.email,
  //             phone_number: formEle.phone,
  //             subject: formEle.subject,
  //             message: formEle.message,
  //           },
  //           "zsqpZoT5yn5i1ZHt9"
  //         )
  //         .then((response) => {
  //           console.log("Email sent to admin:", response); 
  //         })
  //         .catch((error) => {
  //           console.error("Failed to send email:", error); 
  //         });
  //     } else {
  //       toast.error("Form data not submitted, try again");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         subject: "",
  //         message: "",
  //       });
  //       throw new Error("Failed to submit form data.");
  //     }
  //   } catch (error) {
  //     console.error("Submission Error:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwifvl4AG4_6V6vPNj5-bVvsYHB_7GtFeSA52JMIV3Rrmq3jopWKVLlNKqqXTGyFhT1/exec";
  
      const { name, email, phone, subject, message } = formData;
  
      const formBody = new URLSearchParams();
      formBody.append("Name", name);
      formBody.append("Email", email);
      formBody.append("Phone", phone);
      formBody.append("Subject", subject);
      formBody.append("Message", message);
  
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formBody.toString(), // Ensure it's URL-encoded
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Important header
        },
      });
  
      if (response.ok) {
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
  
        toast.success("Form submitted successfully");
  
        // Email notification
        emailjs
          .send(
            "service_8g6la6o", // Replace with your EmailJS service ID
            "template_vp3ylni", // Replace with your EmailJS template ID
            {
              to_email: adminEmail, // Replace with admin's email
              from_name: name,
              from_email: email,
              phone_number: phone,
              subject: subject,
              message: message,
            },
            "zsqpZoT5yn5i1ZHt9" // Replace with your EmailJS public key
          )
          .then((response) => {
            console.log("Email sent to admin:", response);
          })
          .catch((error) => {
            console.error("Failed to send email:", error);
          });
      } else {
        toast.error("Form data not submitted, try again.");
        throw new Error("Failed to submit form data.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact NAAM - Industrial Tools Supplier in Coimbatore</title>
        <meta
          name="description"
          content="Get in touch with NAAM for industrial tools, safety equipment, and heavy equipment supplies in Coimbatore. Located near Saravanampatty, we are ready to assist you."
        />
        <meta
          name="keywords"
          content="contact NAAM, tools supplier Coimbatore, safety equipment inquiries, heavy equipment near Saravanampatty, NAAM contact page"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="hero">
        <div className="hero-content mt-5">
          <h1>Contact Us</h1>
          <p className="text-white">Get in touch with our team</p>
        </div>
      </div>

      <div className={`contact-info ${isVisible.info ? "visible" : ""}`}>
        <div className="info-card">
          <div className="icon">
            <Phone size={28} color="blue" />
          </div>
          <h3>Phone</h3>
          <p>+91 9566888290</p>
        </div>
        <div className="info-card">
          <div className="icon">
            <MailOpenIcon size={28} color="blue" />
          </div>
          <h3>Email</h3>
          <p>naamuser21@gmail.com</p>
          <p>naamsales1@gmail.com</p>
        </div>
        <div className="info-card">
          <div className="icon">
            <MapPinHouse size={28} color="blue" />
          </div>
          <h3>Address</h3>
          <p>
            2/268 A, Annai Vellankanni Nagar, 3rd Street East, Saravanampatty
            Post, Vilankurichi Road, Coimbatore - 641 035.
          </p>
        </div>
      </div>

      <div className={`contact-form ${isVisible.form ? "visible" : ""}`}>
        <h2>Send us a message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Phone no.</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className="contactBtn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
