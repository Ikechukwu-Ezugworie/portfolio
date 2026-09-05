import { profile } from "../data/portfolio";

const metrics = [
  { value: "6+", label: "years in backend / distributed systems" },
  { value: "20K+", label: "TPS handled in production" },
  { value: "20+", label: "REST APIs shipped & hardened" },
];

export default function Hero() {
  const scrollTo = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-grid overflow-hidden pt-16"
    >
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #ffb454, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[420px] w-[420px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #4dd4c9, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full animate-fade-in">
        <p className="font-mono text-sm text-accent mb-6 tracking-wide">
          <span className="text-teal">$</span> whoami
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] max-w-4xl">
          {profile.name}
        </h1>

        <p className="mt-4 font-mono text-lg sm:text-xl text-teal">
          {profile.title} <span className="text-text-dim">/</span> {profile.subtitle}
        </p>

        <p className="mt-8 max-w-2xl text-lg sm:text-xl text-gradient font-semibold leading-snug">
          {profile.tagline}
        </p>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-text-muted leading-relaxed">
          I design and scale microservices architectures with Spring Boot, Kafka, and
          Kubernetes for fintech platforms — the kind of systems where correctness,
          throughput, and uptime all have to hold at once.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            onClick={scrollTo("#projects")}
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 font-mono text-sm font-semibold text-bg hover:bg-[#ffc772] transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={scrollTo("#contact")}
            className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-mono text-sm font-semibold text-text hover:border-accent hover:text-accent transition-colors duration-200"
          >
            Contact Me
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 font-mono text-sm font-semibold text-text-muted hover:border-teal hover:text-teal transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Resume
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl border-t border-border-soft pt-8">
          {metrics.map((m) => (
            <div key={m.label}>
              <dt className="sr-only">{m.label}</dt>
              <dd className="font-mono text-3xl font-bold text-text">{m.value}</dd>
              <dd className="mt-1 text-sm text-text-muted">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
