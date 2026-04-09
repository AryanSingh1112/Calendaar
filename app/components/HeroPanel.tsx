'use client'

import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MOOD_IMAGES } from '@/lib/constants'
import { HeroPanelProps } from '@/lib/types'
import { useHeroPanel } from '@/lib/hooks'

export default function HeroPanel({ month, year, subtitle }: HeroPanelProps) {
  const { activeMood, activeQuote, handleMoodToggle } = useHeroPanel({ month, year })
  const activeMoodImage = MOOD_IMAGES.find(({ src }) => src === activeMood)

  return (
    <div className="relative isolate flex flex-col justify-between p-4 sm:p-5 md:p-7 rounded-3xl overflow-hidden min-h-[18rem] sm:min-h-[22rem] lg:min-h-full shadow-2xl">
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${activeMood ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute inset-0 bg-gradient-radial" />
      </div>

      {activeMoodImage && (
        <div className="absolute inset-0 z-0 transition-opacity duration-1000 opacity-100">
          <Image src={activeMoodImage.src} alt={activeMoodImage.alt} fill className="object-cover scale-105 brightness-95 blur-sm" priority sizes="100vw" />
          <div className="absolute inset-0 bg-overlay-dark/70" />
          <div className="absolute inset-0 bg-overlay-gradient" />
        </div>
      )}

      <div className="absolute inset-0 z-[1] pointer-events-none hero-panel-grid" aria-hidden />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] text-indigo-300 font-bold uppercase tracking-widest backdrop-blur-md">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_rgba(129,140,248,0.5)]" />
          Perspective
        </div>

        <div className="mt-6">
          <p className="text-white/40 text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase mb-2 pl-0.5">
            {year}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter leading-none">
            {month}
          </h2>
          {subtitle && (
            <p className="text-white/30 text-[10px] sm:text-[11px] leading-relaxed mt-4 max-w-full sm:max-w-[200px] font-medium italic">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        <div className="p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-1">
            {MOOD_IMAGES.map(({ src: moodImageSrc, alt: moodImageAlt }) => {
              const isActive = activeMood === moodImageSrc
              return (
                <button
                  key={moodImageSrc}
                  onClick={() => handleMoodToggle(moodImageSrc)}
                  className={cn(
                    'relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-300',
                    isActive ? 'scale-110 z-20 shadow-xl ring-2 ring-indigo-400/70 opacity-100' : 'opacity-[0.42] hover:opacity-100 hover:scale-105',
                  )}
                  title={moodImageAlt}
                  type="button"
                >
                  <Image src={moodImageSrc} alt={moodImageAlt} fill className="object-cover brightness-100" loading="lazy" sizes="16.67vw" />
                  {isActive && (
                    <span
                      className="absolute bottom-0.5 right-0.5 z-10 flex size-4 items-center justify-center rounded-full bg-indigo-500 text-white shadow-[0_1px_6px_rgba(99,102,241,0.45)] ring-1 ring-white/90 sm:size-[1.125rem] sm:bottom-1 sm:right-1"
                      aria-hidden
                    >
                      <Check className="size-2 stroke-[3] sm:size-2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </span>
                  )}
                </button>
              )
            })}
          </div>
          <div className="mt-3 flex justify-center">
            <button
              onClick={() => handleMoodToggle(null)}
              className="px-3 py-1 rounded-lg bg-slate-950/60 border border-white/20 text-white/70 text-xs hover:bg-white/20 hover:text-white transition-all"
              title="Reset to default"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-white/20 backdrop-blur-2xl shadow-lg transition-transform hover:scale-105">
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 blur-2xl opacity-0 group-hover/quote:opacity-100 transition-opacity" />
          <div className="relative z-10 flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-amber-500 shadow-md shadow-amber-500/60" />
            <span className="text-white/70 text-xs uppercase tracking-wide font-bold">Monthly Insight</span>
          </div>
          <p className="relative z-10 text-yellow-400 text-sm sm:text-base leading-relaxed font-medium italic">
            "{activeQuote.text}"
          </p>
          <p className="relative z-10 text-white/70 text-xs font-bold uppercase tracking-wide mt-4">
            — {activeQuote.author}
          </p>
        </div>
      </div>

      <div className="absolute -right-16 -bottom-16 z-0 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
    </div>
  )
}
