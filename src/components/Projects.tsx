import React from 'react';
import Section from './Section';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section id="projects" title="Projects">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <div className="bg-slate-900 text-white p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>

                <span className="text-blue-600 font-mono text-sm font-bold tracking-widest block mb-2">
                    {String(index + 1).padStart(2, '0')}
                </span>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                </h3>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-6 max-w-3xl">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 text-slate-200 text-xs font-bold uppercase tracking-wider rounded">
                        {tag}
                    </span>
                    ))}
                </div>
              </div>
            </a>
          ))}
        </div>
    </Section>
  );
};

export default Projects;
