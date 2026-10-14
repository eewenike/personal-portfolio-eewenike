type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  as?: 'h1' | 'h2'
}

export function SectionHeading({ eyebrow, title, description, as: Tag = 'h2' }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</p>
      <Tag className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">{title}</Tag>
      {description ? (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
