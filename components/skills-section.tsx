import { SectionHeading } from '@/components/section-heading'
import { technicalSkills } from '@/lib/portfolio-data'

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 md:py-24">
      <SectionHeading eyebrow="Skills" title="Technical toolkit" />
      <dl className="mt-12 grid gap-8 md:grid-cols-3">
        {technicalSkills.map((group) => (
          <div key={group.label}>
            <dt className="text-sm text-muted-foreground">{group.label}</dt>
            <dd className="mt-3">
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
