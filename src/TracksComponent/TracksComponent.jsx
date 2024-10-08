import React, { useState } from "react";

// Importing the images
import quantumCoreImage from './assets/corequantum.png';
import aiMlImage from './assets/aiml.png';
import quantumMlImage from './assets/quantum_ml.png';
import openInnovationImage from './assets/openinnovation.png';

const TracksComponent = () => {
  const [selectedTrack, setSelectedTrack] = useState("Core Quantum");

  const tracks = [
    { 
      name: "Core Quantum", 
      description: `The Core Quantum Track delves into the fundamental concepts of quantum computing and quantum technologies. Participants will embark on a quest to understand the principles behind quantum mechanics, quantum algorithms, and quantum hardware. The track aims to provide a hands-on experience in working with quantum programming languages, simulators, and actual quantum devices.
From exploring quantum superposition and entanglement to implementing quantum algorithms such as Shor's algorithm and Grover's algorithm, this track will challenge participants to stretch their minds and develop quantum solutions to real-world problems. Participants will gain insights into the unique advantages and limitations of quantum computing compared to classical computing.`,
      image: quantumCoreImage 
    },
    { 
      name: "AI/ML", 
      description: `The AI ML Track is focused on exploring the vast potential of artificial intelligence and machine learning in solving complex challenges across various domains. Participants in this track will have the opportunity to work on cutting-edge projects, applying state-of-the-art algorithms and techniques to real-world datasets.
From predictive analytics and natural language processing to computer vision and reinforcement learning, the AI ML Track encompasses a wide range of exciting areas in the field of AI. Participants can choose projects aligned with their interests, enabling them to delve deep into specific subdomains of AI and build their expertise.`,
      image: aiMlImage 
    },
    { 
      name: "Quantum Machine Learning", 
      description: `The Quantum Machine Learning Track merges the fields of quantum computing and machine learning, exploring how quantum algorithms can enhance AI applications. Participants will gain hands-on experience in developing and optimizing quantum machine learning models, delving into topics such as quantum data encoding, variational quantum classifiers, and more.
This track will challenge participants to build cutting-edge quantum machine learning solutions while understanding how these quantum algorithms compare to classical methods.`,
      image: quantumMlImage 
    },
    { 
      name: "Open Innovation", 
      description: `The Open Innovation Track is a blank canvas where participants are encouraged to think outside the box and tackle problems from various domains. There are no predefined themes or restrictions in this track, allowing participants to explore a wide array of topics that spark their curiosity and passion.
Whether it's developing cutting-edge technologies, addressing societal issues, or creating novel applications, the track invites participants to let their imaginations run wild and embrace the freedom to innovate. Participants can choose to work on solo projects, form cross-functional teams, or collaborate with other participants during the Hackathon. They are encouraged to bring diverse skill sets, backgrounds, and perspectives to the table, fostering an environment of open dialogue and co-creation.`,
      image: openInnovationImage 
    }
  ];

  return (
    <div id="tracks" className="flex flex-col items-center py-10">
      <h1 className="text-[#94D92A] text-3xl sm:text-5xl font-bold mb-6 sm:mb-12">
        Tracks
      </h1>

      <div className="flex justify-center space-x-4 sm:space-x-10 mb-8 sm:mb-12">
        {tracks.map((track, index) => (
          <button
            key={index}
            className={`w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center border-4 sm:border-8 ${
              selectedTrack === track.name ? "border-[#94D92A]" : "border-white"
            }`}
            onClick={() => setSelectedTrack(track.name)}
          >
            <img src={track.image} alt={track.name} className="w-10 h-10 sm:w-16 sm:h-16" />
          </button>
        ))}
      </div>

      <div className="bg-gray-800 text-white p-6 sm:p-10 rounded-lg max-w-xs sm:max-w-2xl text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-[#94D92A]">
          {selectedTrack}
        </h2>
        <p className="text-base sm:text-lg sm:leading-8 tracking-wide leading-relaxed">
          {tracks.find((track) => track.name === selectedTrack).description}
        </p>
      </div>
    </div>
  );
};

export default TracksComponent;