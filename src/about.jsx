import React from 'react';
import './styles.css';

const About = () => {
  return (
    <div className="about">
      {/* Button Container for the Devfolio, Discord, and Register Buttons */}
      <div className="button-container">
        {/* Apply with Devfolio Button */}
        <button className="custom-button devfolio-button">
          <img src="./devfolio.png" alt="Devfolio Icon" className="button-icon" />
          Devfolio
        </button>

        {/* Join the Discord Button */}
        <button className="custom-button discord-button">
          <img src="./discord.png" alt="Discord Icon" className="button-icon" />
          Discord
        </button>
      </div>

      {/* About Us Text Section */}
      <div className="abouttext">
        <h1>ABOUT</h1>
        <p>
          The SRM Quantum Computing Club is a dynamic student organization at SRM University, united by a passion for quantum computing. Through engaging workshops and interactive sessions, we explore quantum mechanics, algorithms, and practical applications. Hands-on learning with cutting-edge platforms like Qiskit and Cirq enhances our problem-solving skills and understanding.
          Guest lectures and industry interactions keep us updated with the latest advancements. Our inclusive environment welcomes students from all disciplines, fostering lasting friendships and professional connections. We are excited about the potential of quantum computing to shape the future and drive innovation. Together, we embrace the challenges and opportunities on this inspiring journey.
        </p>
      </div>
    </div>
  );
}

export default About;
