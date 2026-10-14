import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>Designed and built by {profile.name}.</p>
        <a href={`mailto:${profile.email}`} className="hover:text-primary">
          {profile.email}
        </a>
      </div>
    </footer>
  )
}
