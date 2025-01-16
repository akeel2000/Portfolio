import React, { useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shared-background text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        {/* Logo or Brand Name */}
        <a href="#" className="text-3xl font-bold hover:text-cyan-400">
          Akeel
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-cyan-400 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-6 md:static absolute top-16 left-0 w-full md:w-auto bg-[#0a2233] md:bg-transparent py-4 md:py-0 z-50`}
        >
          <li>
          <Link
              to="Home"
              smooth={true}
              duration={500}
              className="block md:inline hover:text-cyan-400 transition duration-300 px-6 md:px-0 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
          <Link
              to="About"
              smooth={true}
              duration={500}
              className="block md:inline hover:text-cyan-400 transition duration-300 px-6 md:px-0 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
          <Link
              to="Education"
              smooth={true}
              duration={500}
              className="block md:inline hover:text-cyan-400 transition duration-300 px-6 md:px-0 cursor-pointer"
            >
              Education
            </Link>
          </li>
          <li>
          <Link
              to="Skills"
              smooth={true}
              duration={500}
              className="block md:inline hover:text-cyan-400 transition duration-300 px-6 md:px-0 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
          <Link
              to="Projects"
              smooth={true}
              duration={500}
              className="block md:inline hover:text-cyan-400 transition duration-300 px-6 md:px-0 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
          <Link
              to="Contact"
              smooth={true}
              duration={500}
              className="block md:inline hover:text-cyan-400 transition duration-300 px-6 md:px-0 cursor-pointer"
            >
             Conatct
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
