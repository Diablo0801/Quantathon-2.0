import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="scroll-to-top">
        <a href="#top"><i className="fas fa-arrow-up"></i></a>
      </div>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/public/assets/QUANTUMLOGO.png" alt="Quantum Logo" />
        </div>
        <div className="footer-menu">
          <div className="explore">
            <h4>Explore</h4>
            <ul>
              {/* Replace <a> with <Link> for client-side routing */}
              <li><Link to="/">Home</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/Event">Events</Link></li>
            </ul>
          </div>
          <div className="contact">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="mailto:srmqcc@gmail.com">srmqcc@gmail.com</a></li>
              <li><a href="tel:+917995738255">+917995738255</a></li>
              <li><a href="tel:+918011922099">+918011922099</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/company/quantumsrm/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/quantum_srm/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/quantum-srm" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://x.com/quantum_srm" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://discord.gg/3cNZr6jD" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-discord"></i>
        </a>
      </div>
      <div className="copyright">
        <p>&copy;copyright 2023 - QUANTUM COMPUTING CLUB SRM </p>
      </div>
    </footer>
  );
};

export default Footer;
