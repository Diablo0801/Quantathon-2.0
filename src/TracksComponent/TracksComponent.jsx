import React, { useState } from "react";

// Importing the images
import quantumCoreImage from './assets/corequantum.png';
import aiMlImage from './assets/aiml.png';
import quantumMlImage from './assets/quantum_ml.png';
import openInnovationImage from './assets/openinnovation.png';

const TracksComponent = () => {
  const [selectedTrack, setSelectedTrack] = useState("Quantum Core");

  const tracks = [
    { 
      name: "Quantum Core", 
      description: `Quantum Core is focused on exploring the fundamental principles of quantum mechanics and their applications to develop advanced computational techniques. 
                    Our research aims to enhance quantum algorithms and push the boundaries of current quantum systems.`,
      image: quantumCoreImage 
    },
    { 
      name: "AI/ML", 
      description: `The AI/ML track leverages artificial intelligence and machine learning algorithms to solve complex problems in quantum computing. 
                    We develop models that can accelerate quantum processes and bring innovation to classical machine learning systems.`,
      image: aiMlImage 
    },
    { 
      name: "Quantum Machine Learning", 
      description: `Quantum Machine Learning combines quantum computing with traditional machine learning techniques to process data more efficiently. 
                    We focus on creating quantum-enhanced algorithms that can outperform classical approaches in certain problem domains.`,
      image: quantumMlImage 
    },
    { 
      name: "Open Innovation", 
      description: `The Open Innovation track is designed to foster collaborative research and development in quantum computing. 
                    We encourage cross-industry partnerships to accelerate the adoption of quantum technologies and drive innovation in a rapidly evolving field.`,
      image: openInnovationImage 
    }
  ];

  return (
    <div id="tracks" className="flex flex-col items-center  py-10 min-h-screen">
      <h1 className="text-[#94D92A] text-3xl sm:text-5xl font-bold mb-6 sm:mb-12">Tracks</h1>
      
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
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-[#94D92A]">{selectedTrack}</h2>
        <p className="text-base sm:text-lg sm:leading-8">
          {tracks.find(track => track.name === selectedTrack).description}
        </p>
      </div>
    </div>
  );
};

export default TracksComponent;