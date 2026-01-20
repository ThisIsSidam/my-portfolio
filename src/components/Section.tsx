import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left Column: Sticky Title */}
        <div className="md:col-span-4 lg:col-span-3">
          <div className="sticky top-24">
             <h2 className="text-4xl md:text-5xl font-bold flex flex-col relative w-max group">
                <span className="relative z-10">{title}</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100 -z-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <span className="h-1.5 w-16 bg-blue-600 mt-2 rounded-full"></span>
             </h2>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-8 lg:col-span-9">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
