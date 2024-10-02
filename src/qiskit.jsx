import React, { useState } from 'react';
import './qiskit.css';

const Qiskit = () => {
  // Sample card data
  const cards = [
    {
      id: 1,
      image: './public/', 
      text: 'Card 1 Description',
    },
    {
      id: 2,
      image: 'image2.png', 
      text: 'Card 2 Description',
    },
    {
      id: 3,
      image: 'image3.png', 
      text: 'Card 3 Description',
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSwipeRight = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="content">
      <div className="header"></div>
      <div className="qiskitstuff">
        <div className="cardscontainer">
          <div className="card">
            <img src={cards[currentCardIndex].image} alt="image" />
            <div className="cardtext">
              {cards[currentCardIndex].text}
            </div>
          </div>
        </div>
        <div className="controls">
          <button onClick={handleSwipeRight} className="swipe-button">Swipe Right</button>
          <button onClick={handleSwipeLeft} className="swipe-button">Swipe Left</button>
        </div>
      </div>
    </div>
  );
};

export default Qiskit;
