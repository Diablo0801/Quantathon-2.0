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
      description: `Explore fundamental quantum computing concepts, quantum mechanics, algorithms like Shor’s and Grover’s, and quantum hardware. Participants will work with quantum programming languages and simulators, gaining insights into the unique advantages of quantum computing.`,
      image: quantumCoreImage 
    },
    { 
      name: "AI/ML", 
      description: `Dive into AI and machine learning projects, applying algorithms to real-world datasets. Participants can explore predictive analytics, NLP, computer vision, and more, choosing projects aligned with their interests.`,
      image: aiMlImage 
    },
    { 
      name: "Quantum Machine Learning", 
      description: `Merge quantum computing with AI, exploring quantum algorithms that enhance machine learning. Participants will build quantum models and compare them with classical methods.`,
      image: quantumMlImage 
    },
    { 
      name: "Open Innovation", 
      description: `An open track for creative problem-solving across various domains, where participants can work on solo or collaborative projects, addressing a wide range of challenges without predefined themes.`,
      image: openInnovationImage 
    }
  ];

  return (
    <div id="tracks" className="flex flex-col items-center py-10">
      <h1 className="text-[#94D92A] text-3xl sm:text-5xl font-bold mb-6 sm:mb-12">
        TRACKS
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