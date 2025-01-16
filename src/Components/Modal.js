import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { TbBrandX } from 'react-icons/tb'; // Import the X logo from react-icons/tb

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      {/* Modal Content */}
      <div className="bg-opacity-0 rounded-lg p-8 text-center w-96">
        <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
        <div className="flex justify-around text-4xl text-cyan-500">
          {/* Social Media Icons */}
          <a href="https://www.facebook.com/share/144MrWFkJ6/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-600 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/mohmd_akee?igsh=ZXRzMjMydXB2Nmxu&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/noormohommadu-akeel-b3949526a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-700 transition duration-300" />
          </a>
          <a href="https://wa.me/+94752941767" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-green-500 transition duration-300" />
          </a>
          <a href="https://github.com/akeel2000" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-700 transition duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TbBrandX className="hover:text-blue-500 transition duration-300" />
          </a>
        </div>
        <button
          onClick={onClose} // Close the modal
          className="mt-6 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

