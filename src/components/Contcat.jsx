import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa"; // Icons for form fields and contact details
import { FaShoppingCart, FaMobileAlt, FaDesktop, FaCode, FaSearch, FaPaintBrush, FaChartLine } from "react-icons/fa"; // Icons for solve-problem list
import "../assets/Contact.css"; // Make sure to create a CSS file for styling

const BrainIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="200"
    height="100"
    fill="none"
    stroke="currentColor"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M32 2c2 0 4 3 4 6s-2 6-4 6c-2 0-4-3-4-6s2-6 4-6zm0 12c4 0 8 4 8 8 0 4-4 8-8 8-4 0-8-4-8-8 0-4 4-8 8-8zM32 40c2 0 4 3 4 6s-2 6-4 6c-2 0-4-3-4-6s2-6 4-6zM16 2c2 0 4 3 4 6s-2 6-4 6c-2 0-4-3-4-6s2-6 4-6zm16 0c2 0 4 3 4 6s-2 6-4 6c-2 0-4-3-4-6s2-6 4-6zm16 8c4 0 8 4 8 8 0 4-4 8-8 8-4 0-8-4-8-8 0-4 4-8 8-8zM16 40c2 0 4 3 4 6s-2 6-4 6c-2 0-4-3-4-6s2-6 4-6z" />
  </svg>
);

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

          {/* New Brain Icon Section */}
          <div className="ai-brain-graphic">
            <BrainIcon />
{/*             <p className="ai-description">AI-driven solutions for smarter business decisions</p> */}
          </div>


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
              <label htmlFor="name" style={{ color: '#2c2a6e' }}>
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
{/*               <label htmlFor="email">
                <FaEnvelope className="icon" /> Email
              </label> */}

              <label htmlFor="email" style={{ color: '#2c2a6e' }}>
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
              <label htmlFor="message" style={{ color: '#2c2a6e' }}>
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
