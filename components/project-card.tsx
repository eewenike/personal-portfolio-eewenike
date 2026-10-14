import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'

const accents = ['bg-primary', 'bg-teal', 'bg-lavender', 'bg-terracotta']

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div aria-hidden="true" className={`h-1.5 ${accents[index % accents.length]}`} />
      <div className="flex flex-1 flex-col p-6 md:p-8">
        {project.dates && <p className="font-mono text-xs text-muted-foreground">{project.dates}</p>}
        <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
        {project.stack && project.stack.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
                {tech}
              </li>
            ))}
          </ul>
        )}
        {project.paragraphs && (
          <div className="mt-6 flex flex-col gap-4">
            {project.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        )}
        {project.points && (
          <ul className="mt-6 flex flex-col gap-3">
            {project.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {project.link.label}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
