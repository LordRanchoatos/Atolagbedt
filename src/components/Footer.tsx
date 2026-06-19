import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="hairline pt-8 pb-16 text-sm">
      <p className="flex flex-wrap gap-x-2 gap-y-1">
        <a href={`mailto:${profile.email}`} className="link">
          {profile.email}
        </a>
        <span className="text-muted">·</span>
        <a href={profile.github} target="_blank" rel="noreferrer noopener" className="link">
          GitHub
        </a>
        <span className="text-muted">·</span>
        <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="link">
          LinkedIn
        </a>
        <span className="text-muted">·</span>
        <a href={profile.resumeHref} className="link">
          Download résumé
        </a>
      </p>
      <p className="text-muted mt-3">
        {profile.name} · {profile.location}
      </p>
    </footer>
  );
}
