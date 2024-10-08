import React from 'react';
import styles from './PrizeSection.module.css';
import quantumIcon from './assets/icons/corequantum.png';
import aimlIcon from './assets/icons/aiml.png';
import quantumMLIcon from './assets/icons/quantum_ml.png';
import innovationIcon from './assets/icons/openinnovation.png';
import firstPrizeIcon from './assets/icons/firstPrizeIcon.svg';
import secondPrizeIcon from './assets/icons/secondPrizeIcon.svg';
import thirdPrizeIcon from './assets/icons/thirdPrizeIcon.svg';

const PrizeSection = () => {
  const mainPrizes = [
    {
      title: "Winner",
      amount: "₹15,000",
      icon: firstPrizeIcon,
      borderClass: styles.goldBorder, // Gold border for 1st prize
    },
    {
      title: "Runner Up",
      amount: "₹10,000",
      icon: secondPrizeIcon,
      borderClass: styles.silverBorder, // Silver border for 2nd prize
    },
    {
      title: "Second Runner Up",
      amount: "₹5,000",
      icon: thirdPrizeIcon,
      borderClass: styles.bronzeBorder, // Bronze border for 3rd prize
    },
  ];

  const trackPrizes = [
    { title: "Quantum Core", amount: "₹2,000", icon: quantumIcon },
    { title: "AI/ML", amount: "₹2,000", icon: aimlIcon },
    { title: "Quantum Machine Learning", amount: "₹2,000", icon: quantumMLIcon },
    { title: "Open Innovation", amount: "₹2,000", icon: innovationIcon },
  ];

  return (
    <div className={styles.prizeContainer}>
      <h2 className={styles.prizeTitle}>Prizes</h2>

      {/* Main Prizes Section */}
      <div className={styles.mainPrizeGrid}>
        {mainPrizes.map((prize, index) => (
          <div key={index} className={`${styles.mainPrizeCard} ${prize.borderClass}`}>
            <img src={prize.icon} alt={`${prize.title} icon`} className={styles.mainPrizeIcon} />
            <h3 className={styles.prizeTitleCard}>{prize.title}</h3>
            <p className={styles.prizeAmount}>{prize.amount}</p>
          </div>
        ))}
      </div>

      {/* Track Prizes Section */}
      {/* <h2 className={styles.categoryTitle}>Track Prizes</h2> */}
      <div className={styles.categoryGrid}>
        {trackPrizes.map((prize, index) => (
          <div key={index} className={styles.categoryCard}>
            <img src={prize.icon} alt={`${prize.title} icon`} className={styles.icon} />
            <h3 className={styles.prizeTitleCard}>{prize.title}</h3>
            <p className={styles.prizeAmount}>{prize.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizeSection;