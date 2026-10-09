const projects = [
  {
    title: "EasyMart",
    category: "E-Commerce Web App",
    description:
      "A modern e-commerce application with product browsing, cart functionality, wishlist features, responsive UI and persistent client-side state.",
    image: "/projects/easymart.svg",
    technologies: ["React", "Tailwind CSS", "Context API", "LocalStorage"],
    liveUrl: "https://easymart-one.vercel.app",
    githubUrl: "https://github.com/ayanshaikh187/easymart",
  },

  {
    title: "FitPlan AI",
    category: "AI Fitness Application",
    description:
      "A modern fitness platform that combines personalized fitness planning with authentication, user onboarding, AI-generated plans and a responsive dashboard.",
    image: "/projects/fitplan-ai.svg",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Supabase"],
    liveUrl: "https://fitplan-ai-c7yf.vercel.app/",
    githubUrl: "https://github.com/ayanshaikh187/Fitplan-AI",
  },

  {
    title: "AI Chatbot",
    category: "Full-Stack AI Application",
    description:
      "A full-stack AI chatbot with authentication, conversations, message history and an AI backend powered through an external AI API.",
    image: "/projects/ai-chatbot.svg",
    technologies: ["React", "Express.js", "MongoDB", "Groq API"],
    liveUrl:
      "https://neurochat-ai-nine.vercel.app/",
    githubUrl: "https://github.com/ayanshaikh187/ai-chatbot",
  },

  {
    title: "MaintainIQ",
    category: "Asset & Maintenance Management",
    description:
      "A full-stack asset management platform for tracking equipment, maintenance issues, status updates and operational activity.",
    image: "/projects/maintainiq.jpg",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    liveUrl: "https://maintain-iq-steel.vercel.app",
    githubUrl: "https://github.com/ayanshaikh187/Maintain-IQ",
  },

  {
    title: "Hospital Management System",
    category: "Management Web Application",
    description:
      "A role-based hospital management application designed for managing doctors, patients, appointments and administrative workflows.",
    image: "/projects/hospital-system.svg",
    technologies: ["React", "Supabase", "PostgreSQL", "Role-based Access"],
    liveUrl:
      "https://hospital-management-system-2px8f26x9-ayanshaikh187s-projects.vercel.app/",
    githubUrl:
      "https://github.com/ayanshaikh187/hospital-management-system",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              Featured Work
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Projects I've{" "}
              <span className="text-green-400">built.</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              A selection of web applications I've worked on using modern
              frontend, backend and database technologies.
            </p>
          </div>

          <a
            href="#contact"
            className="hidden shrink-0 items-center gap-2 font-semibold text-green-400 transition hover:text-green-300 md:inline-flex"
          >
            Start a project

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

        {/* Projects Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-green-400/20 hover:bg-white/[0.05] ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative overflow-hidden bg-slate-900 ${
                  index === 0 ? "aspect-[16/7]" : "aspect-[16/9]"
                }`}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";

                    if (event.currentTarget.nextElementSibling) {
                      event.currentTarget.nextElementSibling.style.display =
                        "flex";
                    }
                  }}
                />

                {/* Placeholder */}
                <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/10">
                      <svg
                        className="h-9 w-9 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"
                        />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 7h8M8 11h8M8 15h5"
                        />
                      </svg>
                    </div>

                    <p className="mt-4 font-semibold text-slate-300">
                      Project Screenshot
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      Add image later
                    </p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                {/* Project Number */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 text-sm font-bold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Category */}
                <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white transition group-hover:text-green-400">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Links */}
                  <div className="flex shrink-0 gap-2">
                    {/* Live Demo */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        title="Live Demo"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-green-400/30 hover:bg-green-400/10 hover:text-green-400"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
                          />

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
                          />
                        </svg>
                      </a>
                    )}

                    {/* GitHub */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                        title="GitHub Repository"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-green-400/30 hover:bg-green-400/10 hover:text-green-400"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.17 7.69 10.66.56.1.76-.24.76-.54v-1.89c-3.13.68-3.79-1.32-3.79-1.32-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.66 2.18 3.82 1.55.1-.74.39-1.25.71-1.54-.4-.35-.76-1.04-.76-2.1v-3.11c0-.3-.2-.65-.77-.54a11.26 11.26 0 007.68-10.66C23.25 5.48 18.27.5 12 .5z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl border border-green-400/10 bg-green-400/[0.03] p-8 text-center sm:p-10">
          <p className="text-sm font-medium text-slate-500">
            Have an idea for your next project?
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Let's build something great together.
          </h3>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/20"
          >
            Start a conversation

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
    </section>
  );
}

export default Projects;