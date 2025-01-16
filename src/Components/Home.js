import React, { useState } from 'react';
import '../App.css';
import CV from '../Assets/Rezume[1].pdf';
import Modal from './Modal'; // Import the Modal component
import profileImg from '../Assets/my.jpg'; // Import the image

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen px-8 text-white shared-background">
      {/* Left Section */}
      <div className="flex flex-col items-start space-y-4 ml-40">
        <h1 className="text-6xl font-bold">Hi, I'm Akeel</h1>
        <p
          className="text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lightBlue-500 animate-gradientMove bg-[length:200%_200%]"
        >
          Full Stack Developer
        </p>
        <p className="text-gray-300 mt-4 max-w-md">
        As a Software Engineering Intern specializing in full-stack development, I bring comprehensive skills in MERN (MongoDB, Express.js, React, Node.js) stack technologies. My experience includes designing and implementing scalable web applications, utilizing React for dynamic front-end interfaces and Node.js for efficient back-end solutions.

I thrive in agile environments, where my ability to collaborate across teams and my commitment to delivering high-quality code contribute to project success. With a solid foundation in database management, RESTful API development, and cloud deployment, I am eager to leverage my technical expertise to tackle complex challenges and drive innovation.

Let's connect to discuss opportunities where I can apply my passion for full-stack development to contribute effectively to your organization.
        </p>
        <div className="flex space-x-4 mt-6">
          {/* Download CV Button */}
          <a
            href={CV}
            download="Akeel_CV.pdf"
            className="px-6 py-2 bg-cyan-500 rounded-lg text-white font-medium hover:bg-cyan-600"
          >
            Download CV
          </a>
          <button
            onClick={() => setIsModalOpen(true)} // Open the modal
            className="px-6 py-2 bg-transparent border-2 border-cyan-500 rounded-lg text-cyan-500 font-medium hover:bg-cyan-500 hover:text-white"
          >
            Let's Talk
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative mt-8 md:mt-0 mr-40">
        <img
          src={profileImg} // Use the imported image
          alt="Profile"
          className="w-96 h-96 rounded-full shadow-lg border-4 border-cyan-500"
        />
      </div>

      {/* Modal */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};


export default HomePage;
