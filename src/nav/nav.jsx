import dashboardIcon from './assets/dashboard.png';
import faqsIcon from './assets/faqs.png';
import prizesIcon from './assets/prizes.png';
import timelineIcon from './assets/timeline.png';

function Navbar() {
  return (
    <div className="floating-navbar">
      <div className="main-circle">
        <img
          src="SQCCLogo.png"
          alt="quantathon-logo"
          className="circle-image"
        />
        <div className="dropdown">
          <a href="#main" className="dropdown-circle">
            <img src={dashboardIcon} alt="Dashboard" />
          </a>
          <a href="#qiskit" className="dropdown-circle">
            <img src={timelineIcon} alt="Timeline" />
          </a>
          <a href="#prizes" className="dropdown-circle">
            <img src={prizesIcon} alt="Prizes" />
          </a>
          <a href="#faqs" className="dropdown-circle">
            <img src={faqsIcon} alt="FAQs" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;