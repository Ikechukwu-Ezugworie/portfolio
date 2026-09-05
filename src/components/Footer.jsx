import { profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-text-dim">
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6 font-mono text-sm">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="text-text-muted hover:text-accent transition-colors">
            Email
          </a>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-text-muted hover:text-accent transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
