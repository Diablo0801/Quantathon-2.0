import React from 'react';
import './guests.css';
import bgImage from './images/bg.jpg'; // Path to your background image
import guestImage1 from './images/Guest1.jpg'; // Path to your guest image
import guestImage2 from './images/Guest2.jpg';
import guestImage3 from './images/Guest3.jpg';

const Guest = () => {
    return (
        <div className="background" style={{ backgroundImage: `url(${bgImage})` }}>
            <h2 className="guest-title">CHIEF GUEST</h2>
            {/* guest 1 */}
            <div className="guest-container">
                <div className="guest-card">
                    <img src={guestImage1} alt="Guest" className="guest-card-image" />
                    <div className="guest-details">
                        <h3 className="guest-name">Dr.Mohit Lamba</h3>
                        <p className="guest-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto fugit illum suscipit ullam consequuntur natus aperiam, voluptatum odit animi officiis eligendi eius laudantium? Hic, fuga obcaecati minima repellat sequi pariatur.</p>
                    </div>
                </div>
            </div>
            {/* guest 2 */}
            <div className="guest-container">
                <div className="guest-card">
                    <img src={guestImage2} alt="Guest" className="guest-card-image" />
                    <div className="guest-details">
                        <h3 className="guest-name">DR. MOhit Lamba</h3>
                        <p className="guest-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ullam veritatis odit labore autem corporis iure ea est neque. Ullam, aliquid. Dolores accusantium id autem possimus quia minima reiciendis itaque?</p>
                    </div>
                </div>
            </div>
            {/* guest3 */}
            <div className="guest-container">
                <div className="guest-card">
                    <img src={guestImage3} alt="Guest" className="guest-card-image" />
                    <div className="guest-details">
                        <h3 className="guest-name">DR.Mohit Lamba</h3>
                        <p className="guest-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum deserunt dignissimos voluptates iusto magni? Placeat harum eum repellendus dolorum inventore est in. Laboriosam aliquam fuga hic vero autem excepturi dignissimos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, quisquam quae. Natus voluptate amet nobis id quibusdam aliquam eos, voluptatibus sint dolore corrupti at. Aspernatur delectus beatae cupiditate consequuntur rem.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guest;