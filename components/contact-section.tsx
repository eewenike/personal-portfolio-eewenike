import { Download, Eye, Link2 as Linkedin, Mail, Phone } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 px-5 pb-16 md:pb-24">
      <div className="mx-auto max-w-5xl rounded-2xl bg-primary px-6 py-12 text-primary-foreground md:px-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary-foreground/70">
              Read more &amp; get in touch
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              {"Let's work together"}
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/80">
              My full résumé is available to view or download. I&apos;m open to new opportunities and
              collaborations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-5 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90"
              >
                <Eye className="size-4" aria-hidden="true" />
                View résumé
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-5 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
              >
                <Download className="size-4" aria-hidden="true" />
                Download PDF
              </a>
            </div>
          </div>
          <ul className="flex flex-col gap-3">
            <ContactLink href={`mailto:${profile.email}`} icon={Mail} label="Email" value={profile.email} />
            <ContactLink href={profile.phoneHref} icon={Phone} label="Phone" value={profile.phone} />
            <ContactLink
              href={profile.linkedin}
              icon={Linkedin}
              label="LinkedIn"
              value="in/esomchukwuewenike"
              external
            />
          </ul>
        </div>
      </div>
    </section>
  )
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
  external,
}: {
  href: string
  icon: typeof Mail
  label: string
  value: string
  external?: boolean
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="flex items-center gap-4 rounded-lg bg-primary-foreground/10 p-4 transition-colors hover:bg-primary-foreground/15"
      >
        <Icon className="size-5 shrink-0" aria-hidden="true" />
        <span className="min-w-0">
          <span className="block text-xs text-primary-foreground/70">{label}</span>
          <span className="block truncate text-sm font-medium">{value}</span>
        </span>
      </a>
    </li>
  )
}
