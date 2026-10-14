import { SectionHeading } from '@/components/section-heading'
import { strengths } from '@/lib/portfolio-data'

const accents = ['text-primary', 'text-teal', 'text-lavender', 'text-terracotta']
const borders = ['border-t-primary', 'border-t-teal', 'border-t-lavender', 'border-t-terracotta']

export function StrengthsSection() {
  return (
    <section id="strengths" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 md:py-24">
      <SectionHeading
        eyebrow="Strengths"
        title="Personal strengths in action"
        description="What I bring to a team, with a real example of each and why it matters to me."
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {strengths.map((strength, index) => (
          <li
            key={strength.title}
            className={`flex flex-col rounded-xl border border-border border-t-4 bg-card p-6 ${borders[index % borders.length]}`}
          >
            <h3 className={`font-semibold ${accents[index % accents.length]}`}>{strength.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground">{strength.example}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Why it matters: </span>
              {strength.why}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
