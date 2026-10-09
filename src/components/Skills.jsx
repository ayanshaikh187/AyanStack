const skills = [
  {
    name: "HTML5",
    category: "Frontend",
    level: "Advanced",
    icon: "HTML",
  },
  {
    name: "CSS3",
    category: "Frontend",
    level: "Advanced",
    icon: "CSS",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Advanced",
    icon: "JS",
  },
  {
    name: "React",
    category: "Frontend",
    level: "Advanced",
    icon: "RE",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    level: "Advanced",
    icon: "TW",
  },
  {
    name: "Bootstrap",
    category: "Styling",
    level: "Intermediate",
    icon: "BS",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Intermediate",
    icon: "NO",
  },
  {
    name: "Express.js",
    category: "Backend",
    level: "Intermediate",
    icon: "EX",
  },
  {
    name: "MongoDB",
    category: "Database",
    level: "Intermediate",
    icon: "MO",
  },
  {
    name: "Supabase",
    category: "Backend / Database",
    level: "Intermediate",
    icon: "SU",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    level: "Intermediate",
    icon: "GH",
  },
  {
    name: "REST APIs",
    category: "Backend",
    level: "Intermediate",
    icon: "API",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-white/5 px-6 py-24 sm:py-32"
    >
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-green-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            My Skills
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Technologies I{" "}
            <span className="text-green-400">work with.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            A modern technology stack for building responsive frontend
            interfaces, scalable backend systems and full-stack applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-green-400/10 bg-green-400/10 text-xs font-black text-green-400 transition duration-300 group-hover:bg-green-400 group-hover:text-slate-950">
                  {skill.icon}
                </div>

                {/* Name */}
                <div className="min-w-0">
                  <h3 className="truncate font-bold text-white">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {skill.category}
                  </p>
                </div>
              </div>

              {/* Skill Level */}
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-slate-500">Experience</span>

                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-400">
                  {skill.level}
                </span>
              </div>

              {/* Progress */}
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800">
                <div
                  className={`h-full rounded-full bg-green-400 ${
                    skill.level === "Advanced"
                      ? "w-[85%]"
                      : "w-[65%]"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tech Stack */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold text-green-400">
                CURRENT STACK
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                React + Tailwind + Node.js
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-slate-500">
                I combine modern frontend technologies with backend tools and
                databases to create complete web applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind", "Node.js", "Express", "MongoDB"].map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;