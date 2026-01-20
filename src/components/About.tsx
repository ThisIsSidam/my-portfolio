import React from 'react';
import Section from './Section';

interface AboutProps {
  text: string;
  skills: string[];
}

const About: React.FC<AboutProps> = ({ text, skills }) => {
  return (
    <Section id="about" title="About Me">
        <div className="space-y-8">
            <p className="text-xl leading-relaxed text-slate-600 font-light">
                {text}
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
                {skills.map((skill, index) => (
                    <span 
                        key={index} 
                        className="px-5 py-2 bg-slate-100 text-slate-700 font-medium rounded-full text-sm hover:bg-white hover:shadow-md transition-all cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    </Section>
  );
};

export default About;
