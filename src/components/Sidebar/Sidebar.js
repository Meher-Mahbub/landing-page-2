import React from "react";
import "./Sidebar.css";
import {
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaVimeoV,
  FaLinkedinIn,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-v">V</span>
        <span className="logo-i">i</span>
      </div>

      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noreferrer">
          <FaDribbble />
        </a>
        <a href="https://behance.net" target="_blank" rel="noreferrer">
          <FaBehance />
        </a>
        <a href="https://vimeo.com" target="_blank" rel="noreferrer">
          <FaVimeoV />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
