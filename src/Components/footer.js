import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi'; // Location icon
import { TbBrandX } from 'react-icons/tb'; // New Twitter (X) logo

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-6">
      <div className="container mx-auto flex flex-col items-center text-center space-y-8">
        {/* Logo Section */}
        <div>
          <span className="text-2xl font-bold text-white">Akeel</span>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            <TbBrandX size={24} />
          </a>
          <a
            href="https://wa.me/94752941767"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <FaEnvelope className="mr-2 text-cyan-400" />
            <a
              href="mailto:noormohommaduakeel@gmail.com"
              className="hover:underline"
            >
              noormohommaduakeel@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center">
            <FaPhone className="mr-2 text-cyan-400" />
            <span>+94752941767</span>
          </div>
          <div className="flex items-center justify-center">
            <HiLocationMarker className="mr-2 text-cyan-400" />
            <span>53, Muslimcolony, Kaduruwela, Polonnaruwa</span>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Your Brand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
