import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about } from "../data/portfolio";

export default function About() {
  const paragraphs = about.trim().split("\n\n");

  return (
    <section id="about" className="py-28 border-t border-border-soft">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="01" title="About Me" />

        <div className="grid lg:grid-cols-12 gap-12 mt-12">
          <Reveal className="lg:col-span-8">
            <div className="space-y-5 text-lg text-text-muted leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4">
            <div className="rounded-xl border border-border bg-surface p-6 font-mono text-sm">
              <div className="flex gap-1.5 mb-4">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>
              <pre className="whitespace-pre-wrap text-text-muted leading-relaxed">
<span className="text-teal">const</span> <span className="text-accent">engineer</span> = {"{"}
{"\n  "}focus: <span className="text-teal">"fintech systems"</span>,
{"\n  "}throughput: <span className="text-accent">"20,000+ TPS"</span>,
{"\n  "}stack: [<span className="text-teal">"Spring Boot"</span>, <span className="text-teal">"Kafka"</span>, <span className="text-teal">"K8s"</span>],
{"\n  "}experience: <span className="text-accent">"6+ years"</span>,
{"\n  "}mindset: <span className="text-teal">"design → deploy → observe"</span>,
{"\n"}{"}"};
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
