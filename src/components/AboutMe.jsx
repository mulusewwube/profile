import React, { useState, useEffect } from "react";
import "../assets/AboutMe.css";
import { FaGraduationCap, FaCode, FaPalette, FaBriefcase, FaLaptopCode, FaStar } from "react-icons/fa";
import myImage from "../assets/images/my-photo.jpg";

function AboutMe() {
  const timelineItems = [
    {
      year: "2024",
      description: "I hold a Bachelor's degree in Computer Science.",
    },
    {
      year: "2023",
      description: "Completed a certification in web development from Udemy",
    },
    {
      year: "2022",
      description: "Developed graphic design skills using tools like Adobe Illustrator and Figma.",
    },
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
      {/* Header Section */}
      <div className="about-me-header" >
      <h2 className="aboutme-title">About Me</h2>
      <hr className="horizontal-line" />
      </div>

      <div className="about-me-container">                                                                                             
        {/* Name Section */}
        <div className="name-section" style={{ position: "relative", textAlign: "center", padding: "2rem", borderRadius: "15px",  background: " #", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", color: "#fff",  height:"250px" ,width:"400px" }}>
  <h3 className="name-title" style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", textShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", transform: "translateY(-20px)", color: "#2c2a6e", animation: "bounce 2s infinite" }}>
    Mulusew Wube
  </h3>
  <ul className="description-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", justifyContent: "center", gap: "1.5rem" }}>
    <li style={{ display: "inline-block", padding: "0.5rem 1rem", border: "2px solid rgba(255,255,255,0.6)", borderRadius: "50px", background: "rgba(255, 255, 255, 0.1)", boxShadow: "0 2px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s" }}>Web Developer</li>
    <li style={{ display: "inline-block", padding: "0.5rem 1rem", border: "2px solid rgba(255,255,255,0.6)", borderRadius: "50px", background: "rgba(255, 255, 255, 0.1)", boxShadow: "0 2px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s" }}>Graphics Designer</li>
    <li style={{ display: "inline-block", padding: "0.5rem 1rem", border: "2px solid rgba(255,255,255,0.6)", borderRadius: "50px", background: "rgba(255, 255, 255, 0.1)", boxShadow: "0 2px 10px rgba(0,0,0,0.2)", transition: "transform 0.3s" }}>UI/UX Enthusiast</li>
  </ul>
</div>


        {/* Image Section */}
        <div className="about-me-image">
          <img src={myImage} alt="Profile" className="profile-image" />
        </div>

        {/* Education Timeline Section */}
        <div className="education-timeline"  style={{ position: "relative", textAlign: "center", padding: "2rem", borderRadius: "15px", background: "", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", color: "white" ,  height:"250px" ,width:"400px"}}   >
          <h4 className="section-subtitle" style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", textShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", transform: "translateY(-20px)", animation: "bounce 2s infinite" , color: " #2c2a6e" }} >
            <FaGraduationCap className="icon" /> Education & Growth
          </h4>
          <div className="about-me-timeline" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", justifyContent: "center", gap: "1.5rem" }} >
          <div className="timeline-item" key={timelineItems[currentIndex].year} style={{ animation: "slideInRight 1s ease-out" }}>
   

              <span className="year">
    <span className="year-text">{timelineItems[currentIndex].year}</span>
    <span className="year-vertical-line"></span>
</span>


              <p className="timeline-description">{timelineItems[currentIndex].description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-section">
        {/* <h4 className="skills-title"></h4> */}
        <div className="skills-grid">
          <div className="skill">
            <FaCode className="icon" />
            <p>Web Development</p>
          </div>
          <div className="skill">
            <FaPalette className="icon" />
            <p>Graphic Design</p>
          </div>
          <div className="skill">
            <FaGraduationCap className="icon" />
            <p>UI/UX Design</p>
          </div>
          <div className="skill">
            <FaBriefcase className="icon" />
            <p>Project Management</p>
          </div>
          <div className="skill">
            <FaLaptopCode className="icon" />
            <p>Problem Solving</p>
          </div>
          <div className="skill">
            <FaStar className="icon" />
            <p>Creativity</p>
          </div>
        </div>
      </div>

   
 
    </section>
  );
}

export default AboutMe;
