'use client'

import { useSyncExternalStore } from 'react'
import { Briefcase, Coffee } from 'lucide-react'
import { cn } from '@/lib/utils'

type Theme = 'professional' | 'coffee'

const STORAGE_KEY = 'portfolio-theme'
const CHANGE_EVENT = 'portfolio-theme-change'

const options: { value: Theme; label: string; Icon: typeof Coffee }[] = [
  { value: 'professional', label: 'Professional', Icon: Briefcase },
  { value: 'coffee', label: 'Relaxed', Icon: Coffee },
]

function readTheme(): Theme {
  return document.documentElement.dataset.theme === 'coffee' ? 'coffee' : 'professional'
}

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return
    applyTheme(event.newValue === 'coffee' ? 'coffee' : 'professional', false)
  }
  window.addEventListener(CHANGE_EVENT, onChange)
  window.addEventListener('storage', onStorage)
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange)
    window.removeEventListener('storage', onStorage)
  }
}

function applyTheme(theme: Theme, persist = true) {
  const root = document.documentElement
  if (theme === 'coffee') root.dataset.theme = 'coffee'
  else delete root.dataset.theme
  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Storage can be unavailable (e.g. private mode); the theme still applies for this visit.
    }
  }
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => 'professional' as Theme)

  return (
    <div
      role="group"
      aria-label="Site theme"
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-medium',
        className,
      )}
    >
      {options.map(({ value, label, Icon }) => {
        const active = theme === value
        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            onClick={() => applyTheme(value)}
            className={cn(
              'inline-flex min-h-8 items-center gap-1 rounded-full px-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
              active
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <Icon className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap">{label}</span>
          </button>
        )
      })}
    </div>
  )
}
