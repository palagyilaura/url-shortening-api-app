import React, { useState } from "react";
import Logo from "../images/logo.svg";
import Menu from "../images/icon-menu.svg";
import "../css/Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  }

  return (
    <nav className="nav">
      <ul className="links">
        <div className="logo-header">
          <img src={Logo} alt="logo" />
        </div>
        <div className={open === true ? "responsive-nav unfold" : "responsive-nav"} >
          <div className="nav-links">
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Resources</a>
            </li>
          </div>
          <div className="login">
            <li>
              <a href="/">Login</a>
            </li>
            <li className="signup">
              <a href="/">Sign Up</a>
            </li>
          </div>
        </div>
      </ul>

      <li className="nav-toggle" onClick={handleClick}>
        <a href="#">
          <img src={Menu} alt="mobile menu" />
        </a>
      </li>
    </nav>
  );
}

export default Header;
