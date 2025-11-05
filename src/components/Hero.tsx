import React, { useState, useEffect } from 'react';
import { MailIcon, GithubIcon, LinkedinIcon, InstagramIcon } from '../lib/constants.tsx';
import ProfileImage from "../assets/images/aswin_profile_image.jpeg";


const Hero: React.FC = () => {
  const fullText = 'Hey there! I’m Aswin Mohanan.';
  const [isMounted, setIsMounted] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative flex flex-col justify-center items-center text-center pt-56 pb-32 lg:min-h-screen lg:pt-24 lg:pb-0 overflow-hidden">
      <div className={`relative w-36 h-36 md:w-44 md:h-44 mb-12 transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <img
          src={ProfileImage}
          alt="Aswin"
          className="rounded-full w-full h-full object-cover border-4 border-[#00FFFF] shadow-[0_0_20px_rgba(46,139,255,0.3)]"
        />
        <div className="absolute top-1/3 left-[80%] transform -translate-y-1/2 -rotate-12 bg-white text-black text-sm font-semi-bold py-1.5 px-4 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.15)] whitespace-nowrap">
            Flutter Developer
        </div>
      </div>
      <h1
        className={`font-handlee text-5xl font-normal max-w-4xl leading-[1.3] mb-2 min-h-[84px] flex items-center justify-center text-center transition-all duration-700 ease-out delay-150 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{
          letterSpacing: '0.6px',
          textShadow: '0 0 10px rgba(0, 255, 255, 0.2)'
        }}
      >
        <span>{fullText}</span>
      </h1>
      <p className={`text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] font-medium max-w-4xl mt-4 leading-[1.6] transition-all duration-700 ease-out delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        Building <span className="font-semibold bg-gradient-to-b from-[#2E8BFF] to-[#00FFFF] text-transparent bg-clip-text">modern mobile applications with Flutter</span>, focused on design, performance and functionality.
      </p>
      <div className={`mt-8 flex flex-col sm:flex-row items-center gap-5 transition-all duration-700 ease-out delay-[450ms] ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <a href="https://mail.google.com/mail/?view=cm&to=aswinmohan242@gmail.com" className="flex items-center gap-2 bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
          <MailIcon className="w-5 h-5" />
          Contact me
        </a>
        <div className="flex items-center gap-4">
            <a
          href="https://github.com/aswinmohan24"
                                 target="_blank"
                                   rel="noopener noreferrer"
                          className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                                                              >
                                     <GithubIcon className="w-6 h-6 text-white" />
                            </a>

           
            <a href="https://www.linkedin.com/in/aswin-mohanan-flutter-dev/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                <LinkedinIcon className="w-6 h-6"/>
            </a>
            <a href="https://www.instagram.com/__asw1n_______?igsh=amIyY253c2dzM3py" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                <InstagramIcon className="w-6 h-6"/>
            </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#about" aria-label="Scroll to about section" className={`absolute bottom-2 left-1/2 -translate-x-1/2 hidden lg:flex animate-bounce text-gray-400 hover:text-white transition-opacity duration-700 delay-[600ms] ${isMounted && !hasScrolled ? 'opacity-100' : 'opacity-0'}`}>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </a>
    </section>
  );
};

export default Hero;