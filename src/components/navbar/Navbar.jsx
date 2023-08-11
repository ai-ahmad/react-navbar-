import React from "react";
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="container">
      <div className="left">
        <h1>React</h1>
        <img src="../src/assets/react.svg" alt="" />
      </div>
      <div className="right">
        <ul>
          <li className="active"><i class="fa-solid fa-house-user"></i>  Home</li>
          <li className="list"><i class="fa-solid fa-circle-info"></i> About</li>
          <li className="list"><i class="fa-solid fa-briefcase"></i> Service</li>
          <li className="list"><i class="fa-solid fa-address-book"></i> Contact</li>
          <li className="btn">Sigin Up</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
