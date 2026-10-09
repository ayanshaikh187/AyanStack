const services = [
  {
    number: "01",
    title: "React Web Development",
    description:
      "Modern and responsive React websites and web applications built with clean, reusable and maintainable components.",
    tags: ["React", "JavaScript", "Vite"],
  },
  {
    number: "02",
    title: "Full-Stack Development",
    description:
      "Complete web applications with frontend, backend, APIs and database integration for real-world business needs.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    number: "03",
    title: "E-Commerce Development",
    description:
      "Professional e-commerce websites with product listings, shopping carts, wishlist functionality and responsive interfaces.",
    tags: ["React", "Tailwind", "Context API"],
  },
  {
    number: "04",
    title: "Responsive UI Development",
    description:
      "Clean and modern interfaces that look great and work smoothly across desktop, tablet and mobile devices.",
    tags: ["Tailwind CSS", "CSS3", "Bootstrap"],
  },
  {
    number: "05",
    title: "API Integration",
    description:
      "Connect your application with REST APIs, third-party services and backend systems to create dynamic experiences.",
    tags: ["REST API", "Fetch", "Axios"],
  },
  {
    number: "06",
    title: "Bug Fixing & Improvements",
    description:
      "Fix frontend and backend issues, improve existing functionality and make your application more reliable and user-friendly.",
    tags: ["Debugging", "React", "Node.js"],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-y border-white/5 px-6 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-green-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            What I Do
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Services I{" "}
            <span className="text-green-400">offer.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            I help businesses, startups and individuals turn their ideas into
            modern, responsive and functional web applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-2 hover:border-green-400/25 hover:bg-white/[0.05]"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-green-400">
                  {service.number}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 group-hover:border-green-400/20 group-hover:bg-green-400/10">
                  <svg
                    className="h-5 w-5 text-slate-400 transition duration-300 group-hover:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h3 className="mt-7 text-xl font-bold text-white transition group-hover:text-green-400">
                {service.title}
              </h3>

              <p className="mt-4 min-h-[96px] text-sm leading-7 text-slate-500">
                {service.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-green-400 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-green-400/10 bg-gradient-to-r from-green-400/[0.08] to-transparent p-8 sm:p-10">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
                Have a project?
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Let's turn your idea into reality.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                Tell me what you're building and I'll help you create a modern
                web experience around it.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/20"
            >
              Let's Talk

              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;