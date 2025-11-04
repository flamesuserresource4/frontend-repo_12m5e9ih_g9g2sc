import React from 'react';

const skillGroups = [
  {
    title: 'Web & Frameworks',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Socket.io', 'JWT'],
  },
  {
    title: 'Databases & Tools',
    items: ['MongoDB', 'Git', 'GitHub'],
  },
  {
    title: 'Programming & Data',
    items: ['Python', 'C++', 'Pandas', 'NumPy', 'Matplotlib', 'DSA', 'OOP'],
  },
];

const About = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-b from-[#0c0c14] to-[#090912] p-8 ring-1 ring-white/5 sm:p-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">About</h2>
        <p className="mt-3 max-w-3xl text-white/70">
          Aspiring Software Engineer with strong foundations in the MERN stack and problem-solving.
          Passionate about building real-world applications, AI, and full‑stack technologies. I love
          shipping clean, reliable code and thoughtful user experiences.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-medium text-white">Interests</h3>
            <p className="mt-2 text-white/70">
              Competitive Programming, Web & AI Development. Exploring interactive 3D on the web,
              modern design systems, and performant APIs.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-medium text-white">Skills</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-medium text-white/80">{group.title}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
