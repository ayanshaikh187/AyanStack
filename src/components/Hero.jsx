function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left Content */}
        <div>
          {/* Availability Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>

            <span className="text-sm font-medium text-green-300">
              Available for freelance work
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            I build
            <span className="text-green-400"> modern </span>
            <br />
            web experiences.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I'm Ayan, a web developer focused on creating modern, responsive
            and functional web applications that help businesses turn ideas
            into real digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3.5 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-xl hover:shadow-green-500/20"
            >
              View My Work

              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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

            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Let's Talk
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-5">
            <span className="text-sm text-slate-500">Find me on</span>

            <a
              href="https://github.com/ayanshaikh187"
              className="text-sm font-semibold text-slate-300 transition hover:text-green-400"
            >
              GitHub
            </a>

            <span className="h-1 w-1 rounded-full bg-slate-700" />

            <a
              href="https://www.linkedin.com/in/ayan-shaikh-web/"
              className="text-sm font-semibold text-slate-300 transition hover:text-green-400"
            >
              LinkedIn
            </a>

            <span className="h-1 w-1 rounded-full bg-slate-700" />

            <a
              href="https://www.fiverr.com/ayanshaikhdev"
              className="text-sm font-semibold text-slate-300 transition hover:text-green-400"
            >
              Fiverr
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-md">
          {/* Outer Glow */}
          <div className="absolute inset-0 scale-90 rounded-full bg-green-500/10 blur-3xl" />

          {/* Main Card */}
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-black/30 backdrop-blur-sm">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
              {/* Image Placeholder */}
              <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950">
                <img
                  src="/profile.png"
                  alt="Ayan profile"
                  className="absolute inset-0 z-10 h-full w-full object-cover"
                  onError={(event) => { event.currentTarget.style.display = "none"; }}
                />
                <div className="text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-green-400/30 bg-green-400/10">
                    <span className="text-4xl font-black text-green-400">
                      A
                    </span>
                  </div>

                  <p className="mt-5 text-sm font-medium text-slate-400">
                    Your profile image
                  </p>

                  <p className="mt-1 text-xs text-slate-600">
                    Add your photo later
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Dots */}
          <div className="absolute -bottom-6 -right-5 grid grid-cols-4 gap-2 opacity-40">
            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-green-400"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
