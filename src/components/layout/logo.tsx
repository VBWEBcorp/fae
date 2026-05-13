import Link from 'next/link'

import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/seo'

type LogoProps = {
  className?: string
}

function PianoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="6" width="18" height="12" rx="1.5" />
      <line x1="8" y1="6" x2="8" y2="14" />
      <line x1="12" y1="6" x2="12" y2="14" />
      <line x1="16" y1="6" x2="16" y2="14" />
      <rect x="7" y="6" width="2" height="5" fill="currentColor" stroke="none" />
      <rect x="11" y="6" width="2" height="5" fill="currentColor" stroke="none" />
      <rect x="15" y="6" width="2" height="5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'group inline-flex items-center gap-2.5 font-display text-[15px] font-semibold tracking-tight text-[#111] transition-opacity hover:opacity-90 dark:text-white',
        className
      )}
    >
      <span className="flex size-9 -rotate-6 items-center justify-center rounded-xl bg-[#F2C318] text-[#111] shadow-[0_4px_12px_-2px_rgba(242,195,24,0.45)] ring-1 ring-[#111]/10 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.04] dark:ring-white/15">
        <PianoMark className="size-[18px]" />
      </span>
      <span className="flex flex-col leading-none">
        <span>Raphael</span>
        <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#111]/55 dark:text-white/55">
          piano · annemasse
        </span>
      </span>
    </Link>
  )
}
