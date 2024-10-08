import React from 'react';
import './guests.css';

const Guest = () => {
    return (
        <div className="background">
            <h2 className="guest-title">CHIEF GUEST</h2>
            {/* guest 1 */}
            <div className="guest-container">
                <div className="guest-card">
                    <img src="/assets/Guest1.jpg" alt="Guest" className="guest-card-image" />
                    <div className="guest-details">
                        <h3 className="guest-name">Jagan Narayan Natarajan</h3>
                        <p className="guest-info">Jagan Narayan Natarajan holds a Master’s in Opto Electronics and Optical Communication from IIT Delhi and a Master’s in Physics from IIT Madras. He has worked extensively as a mainframe developer and architect. Joining IBM in 2018 as a technical sales specialist for Z DevOps, he later moved to London, managing the UK & Ireland region, and in 2023, he joined IBM Research Labs in the quantum support team.</p>
                    </div>
                </div>
            </div>
            {/* guest 2 */}
            <div className="guest-container">
                <div className="guest-card">
                    <img src="/assets/Guest2.jpeg" alt="Guest" className="guest-card-image" />
                    <div className="guest-details">
                        <h3 className="guest-name">Sreekuttan LS</h3>
                        <p className="guest-info">Sreekuttan LS is the CEO of Bloq Quantum, leading innovations in quantum computing solutions for diverse industries. With a strong foundation in quantum mechanics and entrepreneurship, he has positioned Bloq Quantum as a key player in applying quantum technology to fields like finance, healthcare, and cybersecurity.</p>
                    </div>
                </div>
            </div>
            {/* guest3 */}
            <div className="guest-container">
                <div className="guest-card">
                    <img src="/assets/Guest3.jpeg" alt="Guest" className="guest-card-image" />
                    <div className="guest-details">
                        <h3 className="guest-name">Jayakumar Vaithiyashankar</h3>
                        <p className="guest-info">Jayakumar Vaithiyashankar is an IBM Qiskit Advocate Mentor and Senior IEEE Member dedicated to quantum computing education and outreach. Known for simplifying complex quantum concepts, he actively mentors new developers and is a recognized leader within the quantum computing community.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guest;
