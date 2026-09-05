import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-border-soft">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="03"
          title="Projects"
          subtitle="A mix of production experiments and side builds — from agentic fraud detection to fintech marketplaces."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100} className="h-full">
              <article className="group h-full flex flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(255,180,84,0.15)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 font-mono text-xs text-teal">
                    {project.status}
                  </span>
                  {project.link && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-text-dim group-hover:text-accent transition-colors"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>

                <h3 className="text-lg font-bold text-text leading-snug">{project.title}</h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-text-dim border border-border-soft rounded px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-semibold text-accent hover:underline underline-offset-4"
                  >
                    {project.linkLabel}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                ) : (
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-text-dim">
                    {project.linkLabel}
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
