import { Phone } from 'lucide-react'

import { siteConfig } from '@/lib/seo'

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
      aria-label="Appeler Raphael"
      className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#111] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_18px_40px_-12px_rgba(17,17,17,0.45)] ring-1 ring-[#F2C318]/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F2C318] hover:text-[#111]"
    >
      <span className="relative flex size-7 items-center justify-center rounded-full bg-[#F2C318] text-[#111] transition-colors group-hover:bg-[#111] group-hover:text-[#F2C318]">
        <Phone className="size-3.5" />
        <span className="absolute inset-0 animate-ping rounded-full bg-[#F2C318]/40" style={{ animationDuration: '3s' }} />
      </span>
      <span className="hidden sm:inline">Appeler</span>
    </a>
  )
}
