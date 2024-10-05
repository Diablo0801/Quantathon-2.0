import React from 'react';
import './styles.css';

function Navbar() {
  return (
    <div className="first">

      <div className="maincontent">
        <nav className="navbar">
          <ul>
            <li><a href="#Home-Main">QUANTATHON</a></li>
            <li><a href="#Home-Categories">IBM FALLFEST</a></li>
            <li><a href="#">SUPPORT</a></li>
          </ul>
        </nav>
        
        <div className="content">
          <img
            src="https://fontmeme.com/permalink/241005/71792b734988fad71ee7bf1436cf67ce.png"
            alt="tron-font"
            className="quantathon-logo"
          />
          
          <h2>X IBM QISKIT FALLFEST</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
