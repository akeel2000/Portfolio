import React, { useState } from 'react';
import '../App.css';
import aboutimg from '../Assets/myhome.jpg';

const AboutPage = () => {
  const [showMore, setShowMore] = useState(false); // State to toggle visibility

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-white shared-background">
      {/* Header */}
      <h1 className="text-5xl font-bold mb-6">
        About <span className="text-cyan-400">Me</span>
      </h1>

      {/* Profile Image */}
      <div className="relative">
        <img
          src={aboutimg}
          alt="Profile"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-cyan-400 shadow-lg"
        />
      </div>

      {/* Role and Initial Description */}
      <h2 className="text-3xl font-semibold mt-6">Full Stack Developer!</h2>
      <p className="text-center text-gray-300 max-w-2xl mt-4">
        As a Software Engineering Intern specializing in full-stack development, I bring comprehensive skills in MERN (MongoDB, Express.js, React, Node.js) stack technologies. My experience includes designing and implementing scalable web applications, utilizing React for dynamic front-end interfaces and Node.js for efficient back-end solutions.
      </p>

      {/* Toggleable Paragraph */}
      {showMore && (
        <p className="text-center text-gray-300 max-w-2xl mt-4">
          I thrive in agile environments, where my ability to collaborate across teams and my commitment to delivering high-quality code contribute to project success. With a solid foundation in database management, RESTful API development, and cloud deployment, I am eager to leverage my technical expertise to tackle complex challenges and drive innovation.
          <br />
          Let's connect to discuss opportunities where I can apply my passion for full-stack development to contribute effectively to your organization.
        </p>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setShowMore(!showMore)} // Toggle visibility
        className="mt-6 px-6 py-2 bg-cyan-500 rounded-lg text-white font-medium hover:bg-cyan-600"
      >
        {showMore ? 'Show Less' : 'Know More'}
      </button>
    </div>
  );
};

export default AboutPage;

