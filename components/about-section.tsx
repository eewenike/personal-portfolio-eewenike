import { Compass, Sparkles, User } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const items = [
  {
    icon: Sparkles,
    title: 'What it is',
    body: 'A personal portfolio showcasing my professional experience, résumé, technical skills, personal skills, and personal projects — a showcase of who I am and what I can do.',
    accent: 'bg-primary/10 text-primary',
  },
  {
    icon: Compass,
    title: 'Why it matters',
    body: 'It helps me expand more on my personal and professional skills beyond just a one-page résumé.',
    accent: 'bg-teal/10 text-teal',
  },
  {
    icon: User,
    title: 'Who made it',
    body: 'Designed and put together by me, Esomchukwu Nicole Ewenike.',
    accent: 'bg-lavender/10 text-lavender',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-border bg-card">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <SectionHeading eyebrow="About this site" title="A portfolio built to open doors" />
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="flex flex-col gap-4">
              <span className={`flex size-10 items-center justify-center rounded-lg ${item.accent}`}>
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
