import React, { useEffect, useRef, useState } from 'react';
import { UserIcon } from '../lib/constants.tsx';
import ProfileImage from "../assets/images/aswin_profile_image.jpeg";

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[#00FFFF] font-semibold">{children}</span>
);

const skills = [
{ name: 'Express.js', logo: 'https://cdn.simpleicons.org/express/FFFFFF' },
  { name: 'Nest.js', logo: 'https://cdn.simpleicons.org/nestjs/FFFFFF' },
  
    { name: 'Flutter', logo: 'https://cdn.simpleicons.org/flutter/FFFFFF' },
  { name: 'Dart', logo: 'https://cdn.simpleicons.org/dart/FFFFFF' },
  { name: 'Firebase', logo: 'https://cdn.simpleicons.org/firebase/FFFFFF' },
  { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/FFFFFF' },
  { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/FFFFFF' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/FFFFFF' },
  
];

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-16" ref={sectionRef}>
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white">
        <UserIcon className="w-8 h-8" />
        About Me
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div
          className={`flex justify-center lg:justify-end lg:col-start-3 transition-all duration-[800ms] ease-out delay-200 ${
            isVisible ? 'md:opacity-100 md:translate-x-0' : 'md:opacity-0 md:translate-x-[40px]'
          }`}
        >
          <img
            src={ProfileImage}
            alt="Aswin"
            className="rounded-full w-64 h-64 object-cover border-4 border-[#2E8BFF]/50"
          />
        </div>
        <div
          className={`lg:col-span-2 lg:row-start-1 text-gray-300 text-lg leading-relaxed space-y-6 transition-all duration-[800ms] ease-out delay-100 ${
            isVisible ? 'md:opacity-100 md:translate-x-0' : 'md:opacity-0 md:-translate-x-[40px]'
          }`}
        >
          <p>
            I’m <Highlight>Aswin Mohanan</Highlight>, a passionate <Highlight>Flutter developer</Highlight> dedicated to building <Highlight>scalable</Highlight>, high-performance mobile applications with clean design and strong functionality.
          </p>
          <p>
            I specialize in <Highlight>Flutter</Highlight> and <Highlight>Dart</Highlight>, integrating <Highlight>Firebase</Highlight> and state management tools like <Highlight>BLoC</Highlight>, <Highlight>Provider</Highlight>, and <Highlight>Riverpod</Highlight> to craft smooth, responsive user experiences.
          </p>
          <p>
            Alongside mobile development, I have experience with <Highlight>JavaScript</Highlight>, <Highlight>TypeScript</Highlight>, <Highlight>Express.js</Highlight>, and <Highlight>MongoDB</Highlight>, enabling me to deliver <Highlight>end-to-end full-stack solutions</Highlight>. I’m currently learning <Highlight>Nest.js</Highlight> to build <Highlight>production-grade</Highlight>, scalable backend systems.
          </p>
        </div>
      </div>
      <div className="mt-24">
        <h3 className="text-2xl font-bold text-center mb-8 text-white">My Tech Stack</h3>
        <div className="relative w-full overflow-hidden group [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex animate-scroll">
            {[...skills, ...skills].map((skill, index) => (
              <div key={`${skill.name}-${index}`} className="flex-shrink-0 w-32 sm:w-40 h-24 mx-1 sm:mx-2 flex items-center justify-center" title={skill.name}>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="h-12 max-w-full transition-transform duration-300 ease-in-out hover:scale-125"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;