import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Huddle (Chat App)',
    desc: 'Real-time MERN chat app with Socket.io & JWT authentication.',
  },
  {
    title: 'Selective Repeat ARQ Simulator',
    desc: 'Reliable data transfer simulation using JavaScript & networking concepts.',
  },
  {
    title: 'YouTube Clone',
    desc: 'Responsive UI built with vanilla HTML, CSS, and JavaScript.',
  },
  {
    title: 'FestX',
    desc: 'College fest management website built during a hackathon; showcased at NMIMS.',
  },
  {
    title: 'Gemini Clone',
    desc: 'Chatbot-style UI using HTML, CSS, and JavaScript.',
  },
];

const certs = [
  'Generative AI (upGrad & Microsoft)',
  'React JS (Scaler)',
  'DSA in C++ (Udemy)',
  'Python for Beginners (Scaler)',
  'Intro to LLMs (Simplilearn)',
  'Bloomberg Finance Fundamentals',
  'Gemini AI Clone (LetsUpgrade)'
];

const ProjectsCerts = () => {
  return (
    <section id="projects" className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-[#0a0a13] to-[#0b0b12] p-8 ring-1 ring-white/5 sm:p-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-14 top-10 h-60 w-60 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.2),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Projects */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Projects</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/[0.08]"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 p-2 ring-1 ring-white/10">
                      <Code className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-semibold text-white">{p.title}</h3>
                        <a
                          href="https://github.com/tanmaypaliwal576"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-cyan-200"
                        >
                          View <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="w-full max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Certifications</h2>
            <ul className="mt-6 space-y-3">
              {certs.map((c) => (
                <li
                  key={c}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                >
                  <span className="block truncate">{c}</span>
                  <span className="ml-3 inline-flex rounded-md bg-white/10 px-2 py-0.5 text-xs text-white/70">Cred</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCerts;
