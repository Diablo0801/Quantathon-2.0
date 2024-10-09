import React from 'react';
import './qiskit.css';

const Qiskit = () => {
  const card = {
    id: 1,
    image: '/qiskit.jpg',
    heading: 'IBM qiskit',
    text: '18/10/2024 - 9 AM to 2 PM',
  };

  return (
    <div className="content">
      {/* Header image added directly as an <img> */}
      <div className="header">
        <img src="/header.png" alt="Header" className="header-image" />
      </div>
      <div className="qiskitstuff">
        <div className="cardscontainer">
          <div id="qiskit" className="cards-slider">
            <div key={card.id} className="card">
              <img src={card.image} alt="IBM qiskit" />
              <h2>{card.heading}</h2>
              <p>{card.text}</p>
            </div>
          </div>
        </div>
        <div id="timeline" className="timelinecontainer">
          <img src="/assets/timeline.jpg" alt="Timeline" />
        </div>
      </div>
    </div>
  );
};

export default Qiskit;