import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    try {
      const res = await fetch(profile.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 border-t border-border-soft bg-bg-soft">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="07"
          title="Contact"
          subtitle="Have a role, a project, or a hard systems problem to talk through? I'd like to hear about it."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="space-y-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 hover:border-accent/50 transition-colors group"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 4h16v16H4V4z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 6l8 7 8-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-mono text-text-dim">Email</p>
                  <p className="text-text font-medium group-hover:text-accent transition-colors">
                    {profile.email}
                  </p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 hover:border-accent/50 transition-colors group"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0022 12.25C22 6.58 17.52 2 12 2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-mono text-text-dim">GitHub</p>
                  <p className="text-text font-medium group-hover:text-accent transition-colors">
                    github.com/Ikechukwu-Ezugworie
                  </p>
                </div>
              </a>

              <p className="text-text-muted leading-relaxed pt-2">
                Prefer email — it's the fastest way to reach me. Messages sent through
                the form on the right land directly in my inbox.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            {status === "sent" ? (
              <div className="rounded-xl border border-teal/40 bg-teal/10 p-8 text-center h-full flex flex-col items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal mb-4">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-lg font-bold text-text">Message sent</h3>
                <p className="mt-2 text-text-muted max-w-sm">
                  Thanks for reaching out — your message has landed in my inbox and
                  I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 font-mono text-sm text-accent hover:underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <input
                  type="hidden"
                  name="_subject"
                  value={`Portfolio contact from ${form.name || "website visitor"}`}
                />
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-text-dim mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-text placeholder:text-text-dim focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-text-dim mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-text placeholder:text-text-dim focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-text-dim mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me a bit about the role or project..."
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-text placeholder:text-text-dim focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong sending your message. Please try again, or
                    email me directly at{" "}
                    <a href={`mailto:${profile.email}`} className="underline underline-offset-4">
                      {profile.email}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 font-mono text-sm font-semibold text-bg hover:bg-[#ffc772] transition-colors w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
