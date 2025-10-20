import React from "react";
import "./Header.css";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#portfolio" className="active">
          portfolio
        </a>
        <a href="#about">about me</a>
        <a href="#blog">my blog</a>
        <a href="#reviews">reviews</a>
        <a href="#contact">contact me</a>
      </nav>

      <div className="call-btn">
        <FaPhoneAlt className="phone-icon" />
        <a href="#schedule">Schedule a Call</a>
      </div>
    </header>
  );
}

export default Header;
