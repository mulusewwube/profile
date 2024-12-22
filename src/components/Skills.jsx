import React from "react";
import "../assets/Skills.css"; // Ensure the CSS file has the corresponding styles
import { FaCode, FaPaintBrush } from "react-icons/fa";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { SiAdobeillustrator, SiAdobephotoshop, SiDjango, SiBootstrap, SiCanva } from "react-icons/si";
import { RiFileWord2Fill, RiFileExcel2Fill, RiFilePpt2Fill } from "react-icons/ri";
import { FaMicrosoft, FaRegLightbulb } from "react-icons/fa";

function Skills() {
  const skillsData = [
    {
      category: "Technical Skills",
      icon: <FaCode className="category-icon" />,
      skills: [
        { name: "HTML", level: 90, icon: <AiOutlineHtml5 className="skill-icon" /> },
        { name: "CSS", level: 85, icon: <DiCss3 className="skill-icon" /> },
        { name: "JavaScript", level: 80, icon: <DiJavascript1 className="skill-icon" /> },
        { name: "React", level: 75, icon: <DiReact className="skill-icon" /> },
        { name: "Django", level: 70, icon: <SiDjango className="skill-icon" /> },
        { name: "Bootstrap", level: 80, icon: <SiBootstrap className="skill-icon" /> },
      ],
    },
    {
      category: "Design Skills",
      icon: <FaPaintBrush className="category-icon" />,
      skills: [
        { name: "Figma", level: 90, icon: <FiFigma className="skill-icon" /> },
        { name: "Adobe Illustrator", level: 85, icon: <SiAdobeillustrator className="skill-icon" /> },
        { name: "Adobe Photoshop", level: 80, icon: <SiAdobephotoshop className="skill-icon" /> },
        { name: "UI/UX Design", level: 85, icon: <AiFillGithub className="skill-icon" /> },
        { name: "Canva", level: 85, icon: <SiCanva className="skill-icon" /> },
      ],
    },
    {
      category: "Other Skills",
      icon: <FaMicrosoft className="category-icon" />,
      skills: [
        { name: "Word", level: 95, icon: <RiFileWord2Fill className="skill-icon" /> },
        { name: "Excel", level: 90, icon: <RiFileExcel2Fill className="skill-icon" /> },
        { name: "PowerPoint", level: 85, icon: <RiFilePpt2Fill className="skill-icon" /> },
        { name: "Publisher", level: 80, icon: <FaMicrosoft className="skill-icon" /> },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-background">
        {skillsData.map((category, catIndex) =>
          category.skills.map((skill, skillIndex) => (
            <div
              key={`background-skill-${catIndex}-${skillIndex}`}
              className="background-skill-icon"
              style={{
                animationDuration: `${Math.random() * 5 + 10}s`, // Randomized duration for smooth animation
                animationDelay: `${Math.random() * 5}s`, // Randomized delay for each icon
              }}
            >
              {skill.icon}
            </div>
          ))
        )}
        <div
          className="background-problem-solving-icon"
          style={{
            animationDuration: "15s",
            animationDelay: "3s",
          }}
        >
          <FaRegLightbulb className="problem-solving-icon" />
        </div>
      </div>
      <h2 className="skill-title" >My Skills</h2>
      <hr className="horizontal-line" />
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div className="skills-category" key={index}>
            <h3 className="category-title">
              {category.icon} {category.category}
            </h3>
            <ul className="skills-list">
              {category.skills.map((skill, index) => (
                <li className="skill-item" key={index}>
                  <div className="skill-header">
                    {skill.icon}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar"
                      style={{
                        width: `${skill.level}%`,
                        transition: "width 1s ease-in-out, background-color 0.5s ease",
                        backgroundColor: `hsl(${skill.level}, 70%, 50%)`,
                      }}
                    ></div>
                  </div>
                  <div className="skill-level">{skill.level}%</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
