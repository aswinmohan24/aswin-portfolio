import React from 'react';
import Navbar from '../src/components/Navbar.tsx';
import Hero from '../src/components/Hero.tsx';
import Projects from '../src/components/Projects.tsx';
import About from '../src/components/About.tsx';
import Experience from '../src/components/Experience.tsx';
import Contact from '../src/components/Contact.tsx';
import Footer from '../src/components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="text-gray-200 min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;