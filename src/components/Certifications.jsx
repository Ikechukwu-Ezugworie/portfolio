import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 border-t border-border-soft">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="06" title="Awards & Certifications" />

        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 100}>
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
                  <circle cx="12" cy="8" r="6" />
                  <path d="M9 13.5L7 22l5-3 5 3-2-8.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="font-bold text-text leading-snug">{cert.name}</h3>
                <p className="mt-2 text-sm text-teal font-mono">{cert.issuer}</p>
                <p className="mt-2 text-sm text-text-dim font-mono">{cert.year}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
