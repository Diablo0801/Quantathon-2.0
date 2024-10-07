import React, { useState, useEffect } from 'react';
import './qiskit.css';

const Qiskit = () => {
  const cards = [
    {
      id: 1,
      image: '/qiskit.jpg', 
      heading: 'IBM qiskit',
      text: 'Card 1 Description',
    },
    {
      id: 2,
      image: 'Timeline.png', 
      heading: '',
      text: '', 
    }
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


  useEffect(() => {
    const interval = setInterval(() => {
      handleSwipeLeft();
    }, 5000); 
    
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="content">
      <div className="header"></div>
      <div className="qiskitstuff">
        <div className="cardscontainer">
          <div 
            className="cards-slider" 
            style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={card.id} className="card">
                {index === 1 ? (
                  <img src={card.image} alt={`Card ${index + 1}`} className="full-card-image" />
                ) : (
                  <>
                    <img src={card.image} alt={`Card ${index + 1}`} />
                    <h2>{card.heading}</h2>
                    <p>{card.text}</p>
                  </>
                )}
              </div>
            ))}
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
