import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Remove error/success message when user starts typing again
    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Basic validation
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);

    // Temporary simulation
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);

    setStatus({
      type: "success",
      message: "Thanks! Your message has been received.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Let's build something{" "}
            <span className="text-green-400">great.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Have a project in mind? I'd love to hear about it. Send me a
            message and let's discuss how we can turn your idea into a
            working digital product.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Side */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
              Let's talk
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              Have an idea?
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              Whether you need a modern landing page, e-commerce website,
              React application or full-stack solution, I'm ready to help.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-4">
              {/* Email */}
              <a
                href="mailto:your-email@example.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-green-400/20 hover:bg-white/[0.05]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-slate-500">Email</p>

                  <p className="mt-1 truncate text-sm font-medium text-slate-300 transition group-hover:text-green-400">
                    your-email@example.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 21s7-5.2 7-12a7 7 0 10-14 0c0 6.8 7 12 7 12z"
                    />

                    <circle
                      cx="12"
                      cy="9"
                      r="2.2"
                      strokeWidth={1.8}
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Location</p>

                  <p className="mt-1 text-sm font-medium text-slate-300">
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-400/10">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                  </span>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Availability</p>

                  <p className="mt-1 text-sm font-medium text-green-400">
                    Available for freelance work
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Connect with me
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/ayanshaikh187"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-green-400/20 hover:text-green-400"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/ayan-shaikh-web/"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-green-400/20 hover:text-green-400"
                >
                  LinkedIn
                </a>

                <a
                  href="https://www.fiverr.com/ayanshaikhdev"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-green-400/20 hover:text-green-400"
                >
                  Fiverr
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-green-400/50 focus:ring-2 focus:ring-green-400/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-green-400/50 focus:ring-2 focus:ring-green-400/10"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What can I help you with?"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-green-400/50 focus:ring-2 focus:ring-green-400/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-green-400/50 focus:ring-2 focus:ring-green-400/10"
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-green-400/20 bg-green-400/10 text-green-400"
                      : "border-red-400/20 bg-red-400/10 text-red-400"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/20 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Sending..." : "Send Message"}

                {!isSubmitting && (
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
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;