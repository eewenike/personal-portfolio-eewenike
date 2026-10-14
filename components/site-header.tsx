import Link from 'next/link'
import { FileText } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { ThemeToggle } from '@/components/theme-toggle'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#strengths', label: 'Strengths' },
  { href: '/#skills', label: 'Skills' },
  { href: '/projects', label: 'More projects' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-md bg-primary text-sm text-primary-foreground"
          >
            EE
          </span>
          <span className="hidden sm:inline">Esomchukwu Ewenike</span>
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-9 items-center gap-2 rounded-md bg-primary px-2.5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-3.5"
          >
            <FileText className="size-4" aria-hidden="true" />
            <span className="sr-only sm:not-sr-only">Résumé</span>
          </a>
        </div>
      </div>
    </header>
  )
}
