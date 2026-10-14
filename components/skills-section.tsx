import { SectionHeading } from '@/components/section-heading'
import { personalSkills, technicalSkills } from '@/lib/portfolio-data'

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 md:py-24">
      <SectionHeading eyebrow="Skills" title="Technical and personal strengths" />
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">Technical skills</h3>
          <dl className="mt-6 flex flex-col gap-6">
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
        </div>
        <div>
          <h3 className="text-lg font-semibold">Personal skills</h3>
          <p className="mt-2 text-sm text-muted-foreground">Demonstrated through the roles above.</p>
          <ul className="mt-6 flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
            {personalSkills.map((skill) => (
              <li key={skill.title} className="p-5">
                <p className="font-medium text-primary">{skill.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{skill.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
