import React from "react";
import "../assets/Footer.css"; // Reusing the same CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Mulusew | Designed 💙 by{" "}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          Mulusew Wube
        </a>
      </p>
    </footer>
  );
};

export default Footer;
