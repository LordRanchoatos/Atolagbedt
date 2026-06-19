import { Nav } from "@/components/Nav";
import { Section } from "@/components/Section";
import { HighlightList } from "@/components/HighlightList";
import { ExperienceRole } from "@/components/ExperienceRole";
import { ProjectCard } from "@/components/ProjectCard";
import { MaybeLink } from "@/components/MaybeLink";
import { Footer } from "@/components/Footer";
import {
  profile,
  highlights,
  experience,
  projects,
  openSource,
  education,
  skills,
  leadership,
} from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Nav />

      <header className="pb-8">
        <div className="flex items-start gap-5">
          <img
            src={profile.avatarSrc}
            alt={`${profile.name} — placeholder photo`}
            width={64}
            height={64}
            className="shrink-0"
          />
          <div>
            <h1 className="text-xl font-semibold">{profile.name}</h1>
            <p className="text-muted">{profile.headline}</p>
          </div>
        </div>

        <p className="mt-6">{profile.summary}</p>
        <p className="mt-4">{profile.summaryExtra}</p>

        <div className="mt-6">
          <HighlightList items={highlights} />
        </div>
      </header>

      <Section label="Experience">
        <div className="divide-y divide-border">
          {experience.map((entry) => (
            <ExperienceRole key={entry.company} entry={entry} />
          ))}
        </div>
      </Section>

      <Section label="Projects">
        <div className="divide-y divide-border">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Section>

      <Section label="Open source">
        <ul className="space-y-4">
          {openSource.map((pkg) => (
            <li key={pkg.name}>
              <h3 className="font-medium">
                <MaybeLink href={pkg.href}>{pkg.name}</MaybeLink>
              </h3>
              <p>{pkg.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Research & education">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-medium">{education.school}</h3>
          <span className="text-sm text-muted whitespace-nowrap">
            {education.start} – {education.end}
          </span>
        </div>
        <p className="text-muted mb-3">{education.degree}</p>
        <p className="mb-2">
          <span className="font-medium">Thesis: </span>
          {education.thesis}
        </p>
        <p className="text-sm text-muted">{education.coursework}</p>
        <p className="text-sm text-muted mt-1">{education.activities}</p>
      </Section>

      <Section label="Skills">
        <dl className="space-y-2">
          {skills.map((skill) => (
            <div key={skill.label} className="flex flex-col sm:flex-row sm:gap-3">
              <dt className="text-muted shrink-0 sm:w-32">{skill.label}</dt>
              <dd>{skill.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section label="Leadership">
        <ul className="space-y-3">
          {leadership.map((item) => (
            <li key={item.org}>
              <span className="font-medium">{item.org}</span>{" "}
              <span className="text-muted">({item.period})</span> — {item.detail}
            </li>
          ))}
        </ul>
      </Section>

      <Footer />
    </main>
  );
}
