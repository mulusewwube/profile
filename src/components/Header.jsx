import React, { useState } from "react";
import "../assets/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="portfolio-header">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <h1>
            <a href="/">Mulusew</a>
          </h1>
        </div>
        {/* Hamburger Menu Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav className={`navigation ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;