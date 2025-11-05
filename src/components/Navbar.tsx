import React, { useState } from 'react';
import { NAV_LINKS } from '../lib/constants.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl border border-white/10 bg-black/30 shadow-2xl shadow-blue-500/10 backdrop-blur-lg">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-bold transition-transform duration-300 ease-in-out hover:scale-110 inline-block tracking-wide">
            <span className="text-[#2E8BFF]">{'{'}</span>
            <span className="text-white">A</span>
            <span className="text-[#2E8BFF]">{'}'}</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div 
        className={`
          md:hidden bg-gray-900/95 rounded-b-2xl overflow-hidden 
          transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;