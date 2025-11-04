import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const Item = ({ icon: Icon, title, subtitle, period, points }) => (
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]">
    <div className="flex items-start gap-4">
      <div className="mt-1 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 p-2 ring-1 ring-white/10">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <h4 className="text-base font-semibold text-white">{title}</h4>
        <p className="text-sm text-white/60">{subtitle}</p>
        <p className="mt-1 text-xs text-white/50">{period}</p>
        {points && (
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
            {points.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

const ExperienceEducation = () => {
  return (
    <section id="experience" className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-[#0b0b12] to-[#0a0a13] p-8 ring-1 ring-white/5 sm:p-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-6 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Background</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Item
            icon={GraduationCap}
            title="B.Tech in Computer Engineering"
            subtitle="NMIMS Indore"
            period="2024 – 2028"
          />
          <Item
            icon={Briefcase}
            title="Python Instructor"
            subtitle="Samyak Computer Classes"
            period="Jun 2024 – Dec 2024"
            points={[
              'Taught Python fundamentals, OOP, and data structures.',
              'Conducted coding sessions and guided students in mini‑projects.',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
