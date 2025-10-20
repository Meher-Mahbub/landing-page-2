import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="info-footer">
      <div className="info-row">
        <div className="info-item">
          <h4>Email</h4>
          <p>venissa@gotham.com</p>
        </div>
        <div className="info-item">
          <h4>Phone</h4>
          <p>+190-300-444-5555</p>
        </div>
        <div className="info-item">
          <h4>Location</h4>
          <p>Gotham City, Arkham</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
