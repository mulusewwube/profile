import React, { useState, useEffect } from "react";
import "../assets/AboutMe.css";
import { FaGraduationCap, FaCode, FaPalette, FaBriefcase, FaLaptopCode, FaStar } from "react-icons/fa";
import myImage from "../assets/images/my-photo.jpg";

function AboutMe() {
  const timelineItems = [
    { year: "2024", description: "Earned a Bachelor’s degree in Computer Science" },
    { year: "2023", description: "Completed a certification in web development from Udemy" },
    { year: "2022", description: "Developed graphic design skills using tools like Adobe Illustrator and Figma" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % timelineItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [timelineItems.length]);

  return (
    <section className="about-me" id="about">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span>Mulusew Wube</span>
          </h1>
          <p className="hero-subtitle">Web Developer | Graphic Designer | UI/UX Enthusiast</p>
          <button className="cta-button">Resume</button>
        </div>
        <img src={myImage} alt="Profile" className="hero-image" />
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I'm a passionate developer and designer with a keen eye for aesthetics and functionality. I create impactful
          web applications and design solutions that connect with users and bring ideas to life.
        </p>
      </div>

      <div className="content-container">
        {/* Timeline Section */}
        <div className="timeline-section">
          <h2 className="section-title">Education & Growth</h2>
          <div className="timeline">
            {timelineItems.map((item, index) => (
              <div
                className={`timeline-item ${index === currentIndex ? "active" : ""}`}
                key={index}
                style={{
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                <span className="timeline-year">{item.year}</span>
                <p className="timeline-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill">
              <FaCode className="icon" /> <p>Web Development</p>
            </div>
            <div className="skill">
              <FaPalette className="icon" /> <p>Graphic Design</p>
            </div>
            <div className="skill">
              <FaGraduationCap className="icon" /> <p>UI/UX Design</p>
            </div>
            <div className="skill">
              <FaBriefcase className="icon" /> <p>Project Management</p>
            </div>
            <div className="skill">
              <FaLaptopCode className="icon" /> <p>Problem Solving</p>
            </div>
            <div className="skill">
              <FaStar className="icon" /> <p>Creativity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
