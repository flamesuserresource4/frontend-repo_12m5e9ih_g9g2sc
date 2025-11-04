import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceEducation from './components/ExperienceEducation';
import ProjectsCerts from './components/ProjectsCerts';
import { Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a12] text-white antialiased">
      {/* Global background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/4 top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute right-1/4 bottom-[-6rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />
      </div>

      <main className="relative mx-auto max-w-6xl space-y-8 px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10 lg:space-y-12 lg:py-14">
        <Hero />
        <About />
        <ExperienceEducation />
        <ProjectsCerts />
      </main>

      <footer className="relative mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/70 backdrop-blur-sm sm:flex-row">
          <p>
            © {new Date().getFullYear()} Tanmay Paliwal. Built with care — gradients, type, and 3D.
          </p>
          <a
            href="https://github.com/tanmaypaliwal576"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-white hover:bg-white/15"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
