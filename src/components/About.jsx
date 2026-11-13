function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            About Me
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Turning ideas into{" "}
            <span className="text-green-400">digital experiences.</span>
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left - Profile Card */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-green-500/5 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              {/* Image Placeholder */}
              <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
                  <img
                  src="/profile.png"
                  alt="Ayan profile"
                  className="inset-0 z-10 h-full w-full object-cover"
                  onError={(event) => { event.currentTarget.style.display = "none"; }}
                />
              </div>

              {/* Small Info */}
              <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                <div>
                  <p className="text-xs text-slate-500">Based in</p>
                  <p className="mt-1 font-semibold text-white">Karachi</p>
                </div>

                <div className="h-8 w-px bg-white/10" />

                <div>
                  <p className="text-xs text-slate-500">Focus</p>
                  <p className="mt-1 font-semibold text-white">
                    Web Development
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - About Content */}
          <div>
            <p className="text-lg leading-8 text-slate-400">
              I'm Ayan, a web developer passionate about building modern,
              responsive and functional web applications. I enjoy turning
              ideas into clean digital products that are easy to use and
              visually engaging.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              My development journey started with the fundamentals of web
              development and has grown into working with modern frontend and
              backend technologies. I focus on writing organized code while
              creating interfaces that work smoothly across different devices.
            </p>

            {/* Highlights */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-green-400/20">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10">
                  <svg
                    className="h-5 w-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h3 className="font-bold text-white">
                  Modern Development
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Building responsive applications with modern frontend and
                  backend technologies.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-green-400/20">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10">
                  <svg
                    className="h-5 w-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h3 className="font-bold text-white">
                  Responsive Design
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Creating interfaces that look and work well on desktop,
                  tablet and mobile devices.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-9">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 font-semibold text-green-400 transition hover:text-green-300"
              >
                Explore my projects
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
      </div>
    </section>
  );
}

export default About;
