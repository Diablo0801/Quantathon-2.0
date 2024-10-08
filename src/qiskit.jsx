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
      <div className="header"></div>
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
        <div id="timeline" className='timelinecontainer'>
          {/* <h1>QUANTATHON TIMELINE</h1> */}
          <img src="/assets/timeline.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Qiskit;
