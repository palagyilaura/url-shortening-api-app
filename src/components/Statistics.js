import React from "react";
import "../css/Statistics.css";
import Brand from "../images/icon-brand-recognition.svg";
import Detailed from "../images/icon-detailed-records.svg";
import Custom from "../images/icon-fully-customizable.svg";

function Statistics() {
  return (
    <div className="statistics">
      <div className="content">
        <h1 className="statistics-title">Advanced Statistics</h1>
        <p className="title-text">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="cards">
          <div className="card">
            <div className="circle">
              <img src={Brand} alt="brand recognition" />
            </div>
            <h4>Brand Recognition</h4>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="card">
            <div className="circle">
              <img src={Detailed} alt="Detailed Records" />
            </div>
            <h4>Detailed Records</h4>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="card">
            <div className="circle">
              <img src={Custom} alt="Fully Customizable" />
            </div>
            <h4>Fully Customizable</h4>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
        <div className="line" />
      </div>
    </div>
  );
}

export default Statistics;
