import React from 'react';
import Section from './Section';

interface School {
  degree: string;
  school: string;
  period: string;
  items: string[];
}

interface EducationProps {
  education: School[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <Section id="education" title="Education">
        <div className="space-y-8">
            {education.map((edu, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-bold text-slate-900">{edu.school}</h3>
                    <h4 className="text-lg text-blue-600">{edu.degree}</h4>
                    <h5 className="text-sm text-slate-400">{edu.period}</h5>
                    <ul className="space-y-2">
                        {edu.items.map((item, i) => (
                            <li key={i} className="flex gap-3 text-slate-600">
                                <span className="text-blue-400 mt-2">•</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </Section>
  );
};

export default Education;
