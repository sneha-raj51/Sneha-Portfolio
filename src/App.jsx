import React from 'react';
import BackgroundAtmosphere from './components/BackgroundAtmosphere';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BeyondTheCode from './components/BeyondTheCode';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f8] selection:bg-violet-600/30 selection:text-violet-200">
      {/* Cinematic Ambient Atmosphere */}
      <BackgroundAtmosphere />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 focus:outline-none" id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <BeyondTheCode />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
