import React, { useEffect, useRef, useState } from 'react';
import { EXPERIENCE_DATA, BriefcaseIcon } from '../lib/constants.tsx';
import type { ExperienceItem } from '../lib/types.ts';


const ExperienceCard: React.FC<{ item: ExperienceItem, isLast: boolean }> = ({ item, isLast }) => {
    return (
        <div className="flex gap-6 relative">
            <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-[#2E8BFF] rounded-full border-4 border-gray-900 z-10"></div>
                {!isLast && <div className="w-0.5 flex-grow bg-gray-700"></div>}
            </div>
            <div className="pb-16 w-full">
                <h3 className="text-xl font-bold text-[#00FFFF]">{item.company}</h3>
                <p className="font-semibold text-lg text-white">{item.role}</p>
                <p className="text-sm text-gray-400 mb-4">{item.date}</p>
                <p className="text-gray-300">{item.description}</p>
            </div>
        </div>
    )
}

const Experience: React.FC = () => {
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
    <section 
      id="experience" 
      className={`pt-16 transition-all duration-[900ms] ease-out delay-100 ${
        isVisible ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-[40px]'
      }`}
      ref={sectionRef}
    >
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white">
        <BriefcaseIcon className="w-8 h-8" />
        Experience
      </h2>
      <div className="max-w-2xl">
        {EXPERIENCE_DATA.map((item, index) => (
          <ExperienceCard key={item.company} item={item} isLast={index === EXPERIENCE_DATA.length - 1} />
        ))}
      </div>
    </section>
  );
};

export default Experience;