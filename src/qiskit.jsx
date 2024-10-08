import React from 'react';
import './qiskit.css';

const Qiskit = () => {
  const card = {
    id: 1,
    image: '/qiskit.jpg',
    heading: 'IBM qiskit',
    text: 'Card 1 Description',
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
      </div>
    </div>
  );
};

export default Qiskit;
