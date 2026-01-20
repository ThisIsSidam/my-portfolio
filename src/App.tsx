import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import { portfolioData } from './data';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header 
        name={portfolioData.name} 
        title={portfolioData.title} 
        contact={portfolioData.contact} 
      />
      
      <main className="max-w-6xl mx-auto px-6 space-y-24 pb-24">
        <About text={portfolioData.about} skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Experience experience={portfolioData.experience} />
        <Education education={portfolioData.education} />
      </main>

      <Footer name={portfolioData.name} contact={portfolioData.contact} />
    </div>
  );
}

export default App;
