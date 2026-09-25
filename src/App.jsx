import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AIML } from './components/AIML';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-200 selection:bg-brand-cyan/20 selection:text-brand-cyan">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <AIML />
        <Education />
        <Certifications />
        <Achievements />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
