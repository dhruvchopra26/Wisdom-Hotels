import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Wisdom</span>
          <span className="secondaryText">
            Mail to us and find super attractive price quotes.
            <br />
            Elevate your Ladakh stay experience
          </span>
          <button className="button" href>
            <a href="mailto:zainkeepscode@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
