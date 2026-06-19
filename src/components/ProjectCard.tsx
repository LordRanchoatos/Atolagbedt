import { MaybeLink } from "./MaybeLink";
import type { ProjectEntry } from "@/lib/data";

function ScreenshotPlaceholder({ name }: { name: string }) {
  return (
    <div
      className="shrink-0 w-full sm:w-40 h-28 border border-dashed border-border flex items-center justify-center text-[0.7rem] text-muted text-center px-2"
      aria-label={`Screenshot placeholder for ${name}`}
    >
      screenshot
      <br />
      placeholder
    </div>
  );
}

export function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 py-4">
      <ScreenshotPlaceholder name={project.name} />
      <div>
        <h3 className="font-medium">
          <MaybeLink href={project.href}>{project.name}</MaybeLink>
        </h3>
        <p className="text-sm text-muted mb-1.5">{project.stack}</p>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
