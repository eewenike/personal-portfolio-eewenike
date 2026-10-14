import { SectionHeading } from '@/components/section-heading'
import { nextInterests } from '@/lib/portfolio-data'

const focusAreas = ['Data analysis', 'AI prompting & evaluation', 'Quality assurance', 'Operations']

export function InterestsSection() {
  return (
    <section id="next" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 md:py-24">
      <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
        <SectionHeading eyebrow="Looking ahead" title="What I'm interested in next" />
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Areas of interest">
          {focusAreas.map((area) => (
            <li key={area} className="rounded-full bg-secondary px-3.5 py-1.5 text-sm font-medium text-primary">
              {area}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-pretty leading-relaxed text-muted-foreground">{nextInterests}</p>
      </div>
    </section>
  )
}
