import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { SectionHeading } from '@/components/section-heading'
import { resumeProjects } from '@/lib/portfolio-data'

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 border-y border-border bg-muted/50">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Projects"
            title="Things I've built"
            description="Featured projects from my résumé, spanning full-stack web development and cloud infrastructure."
          />
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            See more projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {resumeProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
