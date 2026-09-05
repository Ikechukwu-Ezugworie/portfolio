import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-28 border-t border-border-soft">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="05" title="Education" />

        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 100}>
              <div className="h-full rounded-xl border border-border bg-surface p-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="text-accent mb-4"
                  aria-hidden="true"
                >
                  <path
                    d="M22 10L12 5 2 10l10 5 10-5zM6 12.5V17c0 1.5 2.5 3 6 3s6-1.5 6-3v-4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="font-bold text-text leading-snug">{edu.degree}</h3>
                <p className="mt-2 text-sm text-teal font-mono">{edu.school}</p>
                <p className="mt-2 text-sm text-text-dim font-mono">{edu.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
