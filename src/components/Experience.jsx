import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-border-soft bg-bg-soft">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="02"
          title="Work Experience"
          subtitle="Six years building and hardening backend systems across fintech, identity, and analytics platforms."
        />

        <div className="mt-16 relative">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border-soft" aria-hidden="true" />

          <ol className="space-y-14">
            {experience.map((job, i) => (
              <Reveal as="li" key={job.role + job.period} delay={i * 80} className="relative pl-10 sm:pl-12">
                <span
                  className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 ${
                    job.current
                      ? "bg-accent border-accent shadow-[0_0_0_4px_var(--color-accent-soft)]"
                      : "bg-bg-soft border-border"
                  }`}
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-bold text-text">{job.role}</h3>
                  <span className="font-mono text-xs text-text-dim">{job.period}</span>
                </div>
                <p className="font-mono text-sm text-teal mt-1">{job.company}</p>

                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-text-muted leading-relaxed">
                      <span className="text-accent mt-1.5 shrink-0" aria-hidden="true">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
