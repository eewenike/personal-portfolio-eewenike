import { Code2, Layers, Wrench } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { technicalSkills } from '@/lib/portfolio-data'

const groupStyles = [
  { icon: Code2, bar: 'bg-primary', iconBox: 'bg-primary/10 text-primary', chip: 'border-primary/20 bg-primary/5 text-primary' },
  { icon: Wrench, bar: 'bg-teal', iconBox: 'bg-teal/10 text-teal', chip: 'border-teal/20 bg-teal/5 text-teal' },
  { icon: Layers, bar: 'bg-lavender', iconBox: 'bg-lavender/10 text-lavender', chip: 'border-lavender/20 bg-lavender/5 text-lavender' },
]

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 md:py-24">
      <SectionHeading eyebrow="Skills" title="Technical toolkit" />
      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {technicalSkills.map((group, index) => {
          const style = groupStyles[index % groupStyles.length]
          const Icon = style.icon
          return (
            <li
              key={group.label}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div aria-hidden="true" className={`h-1.5 ${style.bar}`} />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className={`flex size-10 items-center justify-center rounded-lg ${style.iconBox}`}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold">{group.label}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={group.label}>
                  {group.items.map((item) => (
                    <li key={item} className={`rounded-md border px-3 py-1.5 text-sm font-medium ${style.chip}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
