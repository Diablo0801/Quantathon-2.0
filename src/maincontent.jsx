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
          <h1>QUANTATHON 2.0</h1>
          <h2>X IBM QISKIT FALLFEST</h2>

        </div>
      </div>
      

      
    </div>
  );
}

export default Navbar;
