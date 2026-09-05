import Reveal from "./Reveal";

export default function SectionHeading({ index, title, subtitle }) {
  return (
    <Reveal className="flex items-baseline gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-text-muted max-w-2xl">{subtitle}</p>}
      </div>
    </Reveal>
  );
}
