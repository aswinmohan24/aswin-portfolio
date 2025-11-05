import React, { useEffect, useRef, useState } from 'react';
import { PROJECTS_DATA, FolderIcon, GithubIcon } from '../lib/constants.tsx';
import type { Project } from '../lib/types.ts';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 flex flex-col group transition-all duration-300 hover:scale-105 hover:border-[#2E8BFF]/50 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="overflow-hidden rounded-lg mb-4">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-white pr-2">{project.title}</h3>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.title}`}
            className="text-gray-400 hover:text-white transition-colors duration-300 flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon className="w-6 h-6" />
          </a>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-400 text-sm flex-grow">{project.description}</p>
    </div>
  );
};

const Projects: React.FC = () => {
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
      id="projects" 
      className={`py-16 transition-all duration-[900ms] ease-out delay-100 ${
        isVisible ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-[40px]'
      }`}
      ref={sectionRef}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold flex items-center gap-3 text-white">
          <FolderIcon className="w-8 h-8" />
          Projects
        </h2>
        {/* <a 
          href="https://github.com/aswinmohan24" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="View all projects on GitHub"
          className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
        >
            <GithubIcon className="w-6 h-6 text-white" />
        </a> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;