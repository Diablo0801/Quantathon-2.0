import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Nav from './nav/nav';
import Countdown from './countdown';
import About from './about';
import Qiskit from './qiskit';
import Footer from './Footer';
import Main from './maincontent';
import EventDetails from './EventDetails';
import FAQ from './faq';
import Sponsors from './sponsors';
import TracksComponent from './TracksComponent/TracksComponent';
import Guest from './guests';
import PrizeSection from './Prizes/PrizeSection'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="home"><Main /></section>
      <Nav />
      <section id="countdown"><Countdown /></section>
      <section id="about"><About /></section>
      <section id="qiskit"><Qiskit /></section>
      <section id="guests"><Guest /></section>
      <section id="events"><EventDetails /></section>
      <section id="tracks"><TracksComponent /></section>
      <section id="PrizeSection"><PrizeSection /></section>
      <section id="sponsors"><Sponsors /></section>
      <section id="faq"><FAQ /></section>
      <Footer />
    </>
  );
}

export default App;
