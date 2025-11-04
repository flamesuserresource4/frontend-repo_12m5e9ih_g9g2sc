import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden rounded-3xl bg-[#0b0b12] ring-1 ring-white/5">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ambient gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),transparent_60%)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
          Building futuristic web experiences
        </span>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Tanmay Paliwal
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Aspiring Software Engineer focused on MERN stack, AI, and real-world product engineering.
          I craft performant, beautiful interfaces and scalable backends.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/80">
          <span className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">
            <MapPin className="h-4 w-4 text-cyan-300" /> Indore, India
          </span>
          <a
            href="mailto:tanmaypaliwal2006@outlook.com"
            className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10 hover:bg-white/10"
          >
            <Mail className="h-4 w-4 text-violet-300" /> tanmaypaliwal2006@outlook.com
          </a>
          <a
            href="tel:6260153962"
            className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10 hover:bg-white/10"
          >
            <Phone className="h-4 w-4 text-blue-300" /> 6260153962
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/tanmaypaliwal576"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-violet-500/20 transition hover:brightness-95"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-white/5 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
          >
            View Projects <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
