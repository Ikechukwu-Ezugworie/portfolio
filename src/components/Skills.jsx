import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolio";

const groupIcons = {
  "Languages & Frameworks": (
    <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "Data & Messaging": (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </>
  ),
  "DevOps & Infrastructure": (
    <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z M12 8a4 4 0 100 8 4 4 0 000-8z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "Monitoring & Observability": (
    <path d="M3 17l6-6 4 4 8-8M21 7v6h-6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  Architecture: (
    <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6zM10 7h4M7 10v4M17 10v4M10 17h4" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-border-soft bg-bg-soft">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="04"
          title="Skills"
          subtitle="Tools and concepts I reach for when building and operating production systems."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 90}>
              <div className="h-full rounded-xl border border-border bg-surface p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      {groupIcons[group.group]}
                    </svg>
                  </span>
                  <h3 className="font-semibold text-text leading-tight">{group.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs text-text-muted border border-border-soft rounded-md px-2.5 py-1.5 hover:border-teal/50 hover:text-teal transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
