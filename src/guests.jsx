import React from 'react';
import './guests.css';
import guestImage1 from '/public/assets/Guest1.jpg'; // Path to your guest image
import guestImage2 from '/public/assets/Guest2.jpeg';
import guestImage3 from '/public/assets/Guest1.jpeg';

const Guest = () => {
    return (
        <div className="background" >
            <h2 className="guest-title">CHIEF GUEST</h2>
            {/* guest 1 */}
            <div className="guest-container">
                <div className="guest-card">
                    <img src={guestImage1} alt="Guest" className="guest-card-image" />
                    <div className="guest-details">
                        <h3 className="guest-name">Jagan Narayan Natarajan</h3>
                        <p className="guest-info">Jagan Narayan Natarajan completed his Masters in Opto Electronics and Optical Communication from IIT Delhi in the year 2002, and prior to that completed his Masters in Physics from IIT Madras. He has played different roles in the industry, spent most of his time as a mainframe developer, architect. He joined IBM in 2018 as a technical sales specialist for Z DevOps products, moved to London for the same role managing the UK & Ireland region, before joining IBM Research labs in 2023, in the quantum support team.</p>
                    </div>
                </div>
            </div>
            {/* guest 2 */}
            <div className="guest-container">
                <div className="guest-card">
                    <img src={guestImage2} alt="Guest" className="guest-card-image" />
                    <div className="guest-details">
                        <h3 className="guest-name">Sreekuttan LS</h3>
                        <p className="guest-info">Sreekuttan LS is the CEO of Bloq Quantum, leading innovations in quantum computing solutions for diverse industries. With a strong foundation in quantum mechanics and entrepreneurship, he has positioned Bloq Quantum as a key player in applying quantum technology to fields like finance, healthcare, and cybersecurity.</p>
                    </div>
                </div>
            </div>
            {/* guest3 */}
            <div className="guest-container">
                <div className="guest-card">
                    <img src={guestImage3} alt="Guest" className="guest-card-image" />
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