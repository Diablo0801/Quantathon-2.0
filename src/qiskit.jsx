import React, { useState } from 'react';
import './qiskit.css';

const Qiskit = () => {
  const cards = [
    {
      id: 1,
      image: '/qiskit.jpg', // First card's image
      heading: 'IBM qiskit',
      text: 'Card 1 Description',
    },
    {
      id: 2,
      image: 'image2.png', // Second card's image
      heading: 'Heading 2',
      text: 'Card 2 Description',
    },
    {
      id: 3,
      image: 'image3.png', // Third card's image
      heading: '',
      text: '',
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
          <div className={`card card-${cards[currentCardIndex].id}`}>
            {currentCardIndex === 0 && (
              <>
                <img src={cards[0].image} alt="Card 1" />
                <h2>{cards[0].heading}</h2>
              </>
            )}
            {currentCardIndex === 1 && (
              <>
                <img src={cards[1].image} alt="Card 2" className="image-left" />
                <div className="text-right">
                  <h2>{cards[1].heading}</h2>
                  <p>{cards[1].text}</p>
                </div>
              </>
            )}
            {currentCardIndex === 2 && (
              <img src={cards[2].image} alt="Card 3" className="full-card-image" />
            )}
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
