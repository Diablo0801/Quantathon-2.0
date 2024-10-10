import React from 'react';
import './sponsors.css';

const sponsors = {
  platinum: [
    { name: 'Kwantum Research Labs', logo: './Kwantum.jpg' },
    { name: 'IBM', logo: './IBM.jpg' },
    { name: 'QUENTANGLE', logo: './Quentangle.jpg' },
  ],
  gold: [
    { name: 'Devfolio', logo: './Devfolio.jpg' },
    { name: 'Polygon', logo: './Polygon.jpg' },
    { name: 'ETH', logo: './ETH.jpg' },
  ],
  silver: [
    { name: 'Replit', logo: './Replit.jpg' },
    // Add any additional silver sponsors here
  ],
};

const SponsorCard = ({ level, sponsors }) => {
  return (
    <div className="sponsor-level">
      <h2 className={`${level.toLowerCase()}-title`}>{level.toUpperCase()}</h2>
      <div className={`sponsor-grid ${level.toLowerCase()}-grid`}>
        {/* Add an empty div to shift the Replit card */}
        {level === 'Silver' && <div className="shift-right"></div>}
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-card">
            <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
            <p>{sponsor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <h1 className="sponsor-title">SPONSORS</h1>
      <SponsorCard level="Platinum" sponsors={sponsors.platinum} />
      <SponsorCard level="Gold" sponsors={sponsors.gold} />
      <SponsorCard level="Silver" sponsors={sponsors.silver} />
    </div>
  );
};

export default Sponsors;
