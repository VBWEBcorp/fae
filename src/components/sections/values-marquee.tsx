type Note = {
  glyph: string
  size: 'sm' | 'md' | 'lg'
  accent?: boolean
}

/**
 * Suite éditoriale de symboles musicaux Unicode.
 * Variations de taille + quelques notes jaunes pour rythmer le défilement.
 */
const notes: Note[] = [
  { glyph: '𝄞', size: 'lg' },
  { glyph: '♩', size: 'md' },
  { glyph: '♪', size: 'md', accent: true },
  { glyph: '♫', size: 'lg' },
  { glyph: '♬', size: 'md' },
  { glyph: '♩', size: 'sm' },
  { glyph: '♭', size: 'md', accent: true },
  { glyph: '♪', size: 'lg' },
  { glyph: '𝄢', size: 'lg' },
  { glyph: '♫', size: 'md' },
  { glyph: '♯', size: 'md' },
  { glyph: '♬', size: 'lg', accent: true },
  { glyph: '♩', size: 'md' },
  { glyph: '♪', size: 'sm' },
  { glyph: '♫', size: 'md' },
  { glyph: '♬', size: 'sm', accent: true },
]

const sizeClass: Record<Note['size'], string> = {
  sm: 'text-2xl sm:text-3xl',
  md: 'text-3xl sm:text-4xl',
  lg: 'text-4xl sm:text-5xl',
}

function NotesTrack({
  direction,
  variant,
}: {
  direction: 'left' | 'right'
  variant: 'light' | 'dark'
}) {
  const animClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  const baseClass =
    variant === 'dark' ? 'text-white/85' : 'text-[#111]/85 dark:text-white/85'
  const accentClass = 'text-[#F2C318]'

  const items = notes.map((n, i) => (
    <span
      key={`${n.glyph}-${i}`}
      aria-hidden
      className={`shrink-0 select-none font-display leading-none ${sizeClass[n.size]} ${n.accent ? accentClass : baseClass}`}
    >
      {n.glyph}
    </span>
  ))

  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14 ${animClass}`}
        style={{ animationDuration: '40s' }}
      >
        {items}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14 ${animClass}`}
        style={{ animationDuration: '40s' }}
      >
        {items}
      </div>
    </div>
  )
}

export function ValuesMarquee({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const wrapperClass =
    variant === 'dark'
      ? 'bg-[#111] py-4 sm:py-5'
      : 'bg-[#F7F5F2] py-4 sm:py-5 dark:bg-[#161513]'

  return (
    <div className={wrapperClass} role="presentation">
      <NotesTrack direction="left" variant={variant} />
    </div>
  )
}
