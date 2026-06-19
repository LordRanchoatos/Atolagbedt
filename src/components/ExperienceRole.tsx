import { MaybeLink } from "./MaybeLink";
import type { ExperienceEntry } from "@/lib/data";

export function ExperienceRole({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="py-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-medium">
          <MaybeLink href={entry.companyHref}>{entry.company}</MaybeLink>
          <span className="text-muted"> — {entry.role}</span>
        </h3>
        <span className="text-sm text-muted whitespace-nowrap">
          {entry.start} – {entry.end}
        </span>
      </div>
      <p className="text-sm text-muted mb-2">{entry.location}</p>
      <ul className="space-y-1.5">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2.5">
            <span className="text-muted select-none">—</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
