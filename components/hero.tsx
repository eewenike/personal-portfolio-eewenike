import { ArrowRight, CodeXml, Download, GraduationCap, Link2 as Linkedin, Mail } from 'lucide-react'
import { education, profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Personal portfolio</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Computer Science graduate from the University at Buffalo with experience in full-stack
            development, cloud infrastructure, machine learning research, teaching, and client-facing
            operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="size-4" aria-hidden="true" />
              Download résumé
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              View projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside
          aria-label="Quick facts"
          className="rounded-xl border border-border bg-card p-6 shadow-sm"
        >
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-medium">{education.school}</p>
              <p className="text-sm text-muted-foreground">{education.degree}</p>
            </div>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">GPA</dt>
              <dd className="mt-1 text-2xl font-semibold text-primary">{education.gpa}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Graduated</dt>
              <dd className="mt-1 text-2xl font-semibold">{education.date.split(' ')[1]}</dd>
            </div>
          </dl>
          <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-6 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-primary">
                <Mail className="size-4 text-muted-foreground" aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <Linkedin className="size-4 text-muted-foreground" aria-hidden="true" />
                linkedin.com/in/esomchukwuewenike
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <CodeXml className="size-4 text-muted-foreground" aria-hidden="true" />
                github.com/eewenike
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
