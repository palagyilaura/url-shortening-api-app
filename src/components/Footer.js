import React from "react";
import LogoWhite from "../images/logo-white.svg";
import "../css/Footer.css";
import Fb from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";

function Footer() {
  return (
    <div>
      <div className="boost">
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </div>
      <div className="footer">
        <div className="container-footer">
          <div className="logo">
            <img src={LogoWhite} alt="logo" />
          </div>

          <div>
            <ul className="footer-links">
              <li className="white">Features</li>
              <li><a href="/">Link Shortening</a></li>
              <li><a href="/">Branded Links</a></li>
              <li><a href="/">Analytics</a></li>
            </ul>
          </div>
          <div>
            <ul className="footer-links">
              <li className="white">Resources</li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Developers</a></li>
              <li><a href="/">Support</a></li>
            </ul>
          </div>
          <div>
            <ul className="footer-links">
              <li className="white">Company</li>
              <li><a href="/">About</a> </li>
              <li><a href="/">Our Team</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          <div className="social">
            <a href="https://facebook.com"><img src={Fb} alt="facebook logo" /></a>
            <a href="https://twitter.com"><img src={Twitter} alt="twitter logo" /></a>
            <a href="https://pinterest.com"><img src={Pinterest} alt="pinterest logo" /></a>
            <a href="https://instagram.com"><img src={Instagram} alt="instagram logo" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
