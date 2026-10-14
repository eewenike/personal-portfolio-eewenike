import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FolderPlus } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { SectionHeading } from '@/components/section-heading'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { additionalProjects, profile, resumeProjects } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Projects — Esomchukwu Nicole Ewenike',
  description: 'All personal projects by Esomchukwu Nicole Ewenike, including work not listed on the résumé.',
}

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to portfolio
        </Link>
        <div className="mt-8">
          <SectionHeading
            as="h1"
            eyebrow="All projects"
            title="More of my work"
            description="Projects beyond what fits on a one-page résumé."
          />
        </div>

        <section aria-labelledby="more-projects" className="mt-12">
          <h2 id="more-projects" className="text-lg font-semibold">
            Other projects
          </h2>
          {additionalProjects.length > 0 ? (
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {additionalProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index + 2} />
              ))}
            </div>
          ) : (
            <div className="mt-6 flex flex-col items-center rounded-xl border border-dashed border-border bg-card px-6 py-12 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                <FolderPlus className="size-6" aria-hidden="true" />
              </span>
              <p className="mt-4 font-medium">New projects are on the way</p>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Additional projects will be added here soon. In the meantime, feel free to reach out at{' '}
                <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
                  {profile.email}
                </a>
                .
              </p>
            </div>
          )}
        </section>

        <section aria-labelledby="resume-projects" className="mt-16">
          <h2 id="resume-projects" className="text-lg font-semibold">
            Featured on my résumé
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {resumeProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
