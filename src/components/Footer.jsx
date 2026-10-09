function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6">
      <div className="mx-auto max-w-7xl py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto] md:items-start">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-black tracking-tight"
            >
              Ayan<span className="text-green-400">.</span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
              Full-stack web developer creating modern, responsive and
              functional digital experiences.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-400/10 bg-green-400/5 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-green-400" />

              <span className="text-xs font-medium text-green-400">
                Available for freelance work
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#home"
                className="text-sm text-slate-500 transition hover:text-green-400"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-sm text-slate-500 transition hover:text-green-400"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-sm text-slate-500 transition hover:text-green-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="text-sm text-slate-500 transition hover:text-green-400"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-sm text-slate-500 transition hover:text-green-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Social
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="https://github.com/ayanshaikh187"
                className="text-sm text-slate-500 transition hover:text-green-400"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ayan-shaikh-web/"
                className="text-sm text-slate-500 transition hover:text-green-400"
              >
                LinkedIn
              </a>

              <a
                href="https://www.fiverr.com/ayanshaikhdev"
                className="text-sm text-slate-500 transition hover:text-green-400"
              >
                Fiverr
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-600">
            © {currentYear} Ayan. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-slate-500 transition hover:text-green-400"
          >
            Back to top

            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;