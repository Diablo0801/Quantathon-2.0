import React from 'react';
import './styles.css';

function Navbar() {
  return (
    <div className="floating-navbar">
      <div className="main-circle">
        <img
          src="https://fontmeme.com/permalink/241005/71792b734988fad71ee7bf1436cf67ce.png"
          alt="quantathon-logo"
          className="circle-image"
        />
        <div className="dropdown">
          <a href="#link1" className="dropdown-circle">
            <img src="https://via.placeholder.com/50" alt="Icon 1" />
          </a>
          <a href="#link2" className="dropdown-circle">
            <img src="https://via.placeholder.com/50" alt="Icon 2" />
          </a>
          <a href="#link3" className="dropdown-circle">
            <img src="https://via.placeholder.com/50" alt="Icon 3" />
          </a>
          <a href="#link4" className="dropdown-circle">
            <img src="https://via.placeholder.com/50" alt="Icon 4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
