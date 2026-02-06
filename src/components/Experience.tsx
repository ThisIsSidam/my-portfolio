import React, { useState } from 'react';
import Section from './Section';

interface ExperienceSection {
    title: string;
    description: string;
    items: string[];
    link?: string;
    status?: string;
    images?: string[];
}

interface Job {
    title: string;
    company: string;
    period: string;
    items: string[];
    sections?: ExperienceSection[];
}

interface ExperienceProps {
    experience: Job[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
    return (
        <Section id="experience" title="Experience">
            <div className="relative border-l-2 border-slate-200 ml-3 md:ml-0 space-y-12 pb-4">
                {experience.map((job, index) => (
                    <JobCard key={index} job={job} />
                ))}
            </div>
        </Section>
    );
};

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white shadow-sm transition-colors duration-300 ${expanded ? 'bg-blue-600' : 'bg-slate-300'}`}></div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">{job.title}</h3>
                        <h4 className="text-lg font-medium text-blue-600">{job.company}</h4>
                    </div>
                    <span className="text-sm font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">
                        {job.period}
                    </span>
                </div>

                {/* Main High-level items */}
                <ul className="space-y-3 mb-6">
                    {job.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                            <span className="text-blue-400 mt-2.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Nested Sections Trigger */}
                {job.sections && job.sections.length > 0 && (
                    <div className="mt-8 border-t border-slate-100 pt-6">
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                        >
                            <span>{expanded ? 'Hide Details' : 'View Projects'}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-5 w-5 transform transition-transform duration-300 ${expanded ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <div className={`grid gap-6 mt-6 transition-all duration-500 ease-in-out overflow-hidden ${expanded ? 'opacity-100 max-h-[1500px]' : 'opacity-0 max-h-0'}`}>
                            {job.sections.map((section, idx) => (
                                <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 relative group/section">
                                    <div className="flex justify-between items-start mb-2">
                                        <h5 className="font-bold text-lg text-slate-800">{section.title}</h5>

                                        {/* Link or Status */}
                                        {section.link ? (
                                            <a
                                                href={section.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-blue-600 transition-colors p-1"
                                                title="View Project"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        ) : (
                                            <span className="text-xs font-mono text-slate-400 bg-slate-200/50 px-2 py-1 rounded">
                                                {section.status || 'Internal'}
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-slate-500 text-sm mb-4 italic">{section.description}</p>
                                    <ul className="space-y-2">
                                        {section.items.map((item, k) => (
                                            <li key={k} className="flex gap-2 text-sm text-slate-700">
                                                <span className="text-slate-400 mt-1.5">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    {/* Images */}
                                    {section.images && section.images.length > 0 && (
                                        <div className="mb-4">
                                            <div className="flex gap-3 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory">
                                                {section.images.map((img, i) => (
                                                    <img
                                                        key={i}
                                                        src={img}
                                                        alt={`${section.title} screenshot ${i + 1}`}
                                                        loading="lazy"
                                                        className="h-96 rounded-xl border border-slate-200 shadow-sm flex-shrink-0 object-cover snap-start hover:scale-[1.03] transition-transform" />
                                                ))}
                                            </div>
                                        </div>
                                    )}


                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Experience;
