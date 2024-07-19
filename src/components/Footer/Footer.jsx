import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make Ladakh <br />
            the best travel destination.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Wisdom Himalayan</span>
          <span className="secondaryText">145 Leh, FL 5467, Ladkah</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
