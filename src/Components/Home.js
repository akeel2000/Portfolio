import React, { useState } from 'react';
import '../App.css';
import CV from '../Assets/Rezume[1].pdf';
import Modal from './Modal'; // Import the Modal component
import profileImg from '../Assets/my.jpg'; // Import the image

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen px-6 md:px-8 text-white shared-background">
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start space-y-4 mt-6 md:ml-40">
        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
          Hi, I'm Akeel
        </h1>
        <p
          className="text-2xl md:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lightBlue-500 animate-gradientMove bg-[length:200%_200%] text-center md:text-left"
        >
          Full Stack Developer
        </p>
        <p className="text-gray-300 mt-4 max-w-md text-center md:text-left">
          As a Software Engineering Intern specializing in full-stack development, I bring comprehensive skills in MERN (MongoDB, Express.js, React, Node.js) stack technologies. My experience includes designing and implementing scalable web applications, utilizing React for dynamic front-end interfaces and Node.js for efficient back-end solutions.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
          {/* Download CV Button */}
          <a
            href={CV}
            download="Akeel_CV.pdf"
            className="px-6 py-2 bg-cyan-500 rounded-lg text-white font-medium hover:bg-cyan-600 text-center"
          >
            Download CV
          </a>
          <button
            onClick={() => setIsModalOpen(true)} // Open the modal
            className="px-6 py-2 bg-transparent border-2 border-cyan-500 rounded-lg text-cyan-500 font-medium hover:bg-cyan-500 hover:text-white text-center"
          >
            Let's Talk
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative mt-6 md:mt-0">
        <img
          src={profileImg} // Use the imported image
          alt="Profile"
          className="w-40 h-40 md:w-96 md:h-96 rounded-full shadow-lg border-4 border-cyan-500"
        />
      </div>

      {/* Modal */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default HomePage;
