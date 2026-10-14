import { SectionHeading } from '@/components/section-heading'
import { experience } from '@/lib/portfolio-data'

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 md:py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked and contributed"
        description="Roles across research, teaching, logistics, and client services."
      />
      <ol className="mt-12 flex flex-col">
        {experience.map((job) => (
          <li
            key={`${job.role}-${job.org}`}
            className="grid gap-4 border-t border-border py-8 md:grid-cols-[220px_1fr] md:gap-10"
          >
            <div>
              <p className="font-mono text-xs text-muted-foreground">{job.dates}</p>
              <p className="mt-2 text-sm text-muted-foreground">{job.location}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{job.role}</h3>
              <p className="mt-1 font-medium text-primary">{job.org}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
