import React from "react";
import "../css/Hero.css";
import HeroBg from "../images/illustration-working.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <div className="text-content">
          <h1 className="hero-text">More than just shorter links</h1>
          <h5 className="text">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </h5>
          <button>Get Started</button>
        </div>
        <div className="hero-bg">
          <img src={HeroBg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
