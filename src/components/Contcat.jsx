import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa"; // Icons for form fields and contact details
import { FaShoppingCart, FaMobileAlt, FaDesktop, FaCode, FaSearch, FaPaintBrush, FaChartLine } from "react-icons/fa"; // Icons for solve-problem list
import "../assets/Contact.css"; // Make sure to create a CSS file for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [hoverEffect, setHoverEffect] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert("Form Submitted!");
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <hr className="horizontal-line" />
      <div className="contact-container">
        {/* Solve Problem Section */}
        <div className="solve-problem">
          <h3 className="h">Let's Solve Problems with Digital Solutions</h3>

          {/* <ul className="solve-list">
            <li><FaShoppingCart className="icon" /> e-Commerce Solutions</li>
            <li><FaMobileAlt className="icon" /> Mobile App Development</li>
            <li><FaDesktop className="icon" /> Website Development</li>
            <li><FaCode className="icon" /> Custom Software Development</li>
            <li><FaSearch className="icon" /> Search Engine Optimization (SEO)</li>
            <li><FaPaintBrush className="icon" /> UI/UX Design Services</li>
            <li><FaChartLine className="icon" /> Data Analytics & Business Intelligence</li>
          </ul> */}
        </div>

        {/* Contact Details and Form */}
        <div 
          className={`contact-left ${hoverEffect}`}
          onMouseEnter={() => setHoverEffect("magic-hover")}
          onMouseLeave={() => setHoverEffect("")}
        >
          <img 
            src="/assets/images/my1.png"
            alt="Contact" 
            className="contact-image"
          />

          <div className="contact-info">
            <p>
              <button
                className="phone-button"
                onClick={() => window.location.href = "tel:0988540393"}
              >
                <FaPhoneAlt className="icon" /> +251988540393/712177404
              </button>
            </p>

            <p>
              <button
                className="email-button"
                onClick={() => window.location.href = "mailto:mulusewwube0@gmail.com"}
              >
                <FaRegEnvelope className="icon" /> mulusewwube0@gmail.com
              </button>
            </p>
          </div>
        </div>

        {/* Vertical line between the sections */}
        <div className="vertical-line"></div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <FaUser className="icon" /> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="icon" /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                <FaPaperPlane className="icon" /> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <FaPaperPlane className="icon animated-icon" /> Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
