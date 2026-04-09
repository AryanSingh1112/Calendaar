'use client'

import React, { useCallback } from 'react'
import { 
  CalendarDays, 
  Tag, 
  FileText, 
  Check, 
  Loader2,
  Calendar, 
  Clock, 
  MapPin, 
  Tag as TagIcon, 
  Info, 
  Sparkles,
  ChevronRight,
  Plus
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { HOLIDAYS, MONTH_NAMES } from '@/lib/constants'
import { DetailPanelProps } from '@/lib/types'
import { formatDateKey, formatDetailDate } from '@/lib/formatting'
import { useDetailPanel } from '@/lib/hooks'

function PillLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="pill-label">
      <div className="pill-label-dot" />
      <span className="pill-label-text">
        {children}
      </span>
    </div>
  )
}

export default function DetailPanel({
  selectedStart,
  selectedEnd,
  notes,
  onNoteChange,
}: DetailPanelProps) {
  const { 
    activeDate, 
    currentNote, 
    rangeLabel, 
    saveState, 
    handleNoteChange 
  } = useDetailPanel({
    selectedStart,
    selectedEnd,
    notes,
    onNoteChange
  })

  const getHoliday = useCallback(() => {
    if (!activeDate) return null
    const dateKey = formatDateKey(activeDate)
    return HOLIDAYS[dateKey] || null
  }, [activeDate])

  const currentHoliday = getHoliday()

  return (
    <div className="relative rounded-3xl overflow-hidden h-full scrollbar-hide">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-500/10 blur-3xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/5 blur-2xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

      <div className="absolute inset-0 bg-white/5 border border-white/10 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-purple-500/5 z-10" />

      <div className="relative z-10 flex flex-col gap-3 md:gap-4 p-4 md:p-5 h-full min-h-0">
        {!activeDate ? (
          <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center">
              <CalendarDays size={22} className="text-white/20" />
            </div>
            <div>
              <p className="text-white/40 text-sm font-medium">No date selected</p>
              <p className="text-white/20 text-xs mt-1">Click any date to see details</p>
            </div>
          </div>
        ) : (
          <>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-950 border border-purple-500/20 mb-2 w-fit shadow-md shadow-purple-500/10">
                <div className="w-1 h-1 rounded-full bg-purple-400 shadow-sm shadow-purple-400/60" />
                <span className="text-purple-200/90 text-[10px] uppercase tracking-wider font-extrabold pr-1">Selected</span>
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight tracking-tight">
                {formatDetailDate(activeDate)}
              </h3>
              {rangeLabel && (
                <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span className="text-indigo-300 text-xs font-medium">{rangeLabel}</span>
                </div>
              )}
            </div>

            <div className="w-full h-px bg-white/6" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-950 border border-purple-500/20 mb-2 w-fit shadow-md shadow-purple-500/10">
                <div className="w-1 h-1 rounded-full bg-purple-400 shadow-sm shadow-purple-400/60" />
                <span className="text-purple-200/90 text-[10px] uppercase tracking-wider font-extrabold pr-1">Event</span>
              </div>
              {currentHoliday ? (
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row gap-3 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl">
                    {currentHoliday.emoji}
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <span className="text-white text-sm font-bold">{currentHoliday.name}</span>
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed mt-1">
                      {currentHoliday.description}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-white/20 text-sm">No major events today</p>
              )}
            </div>

            <div className="w-full h-px bg-white/6" />

            <div className="flex flex-col gap-3 flex-1 min-h-0">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-950 border border-purple-500/20 mb-3 w-fit shadow-md shadow-purple-500/10">
                  <div className="w-1 h-1 rounded-full bg-purple-400 shadow-sm shadow-purple-400/60" />
                  <span className="text-purple-200/90 text-[10px] uppercase tracking-wider font-extrabold pr-1">Notes</span>
                </div>

                <div className={cn(
                  saveState === 'saved' ? 'flex items-center gap-1.5 transition-all duration-500 text-green-400' : saveState === 'saving' ? 'flex items-center gap-1.5 transition-all duration-500 text-amber-400' : 'hidden'
                )}>
                  <div className={cn(
                    saveState === 'saved' ? 'w-1 h-1 rounded-full bg-green-400' : 'w-1 h-1 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                  )} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] opacity-80">
                    {saveState === 'saving' ? 'Synchronizing...' : 'Saved'}
                  </span>
                </div>
              </div>

              <div className="relative flex-1 group/notes min-h-0">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 transition-all duration-500 group-hover/notes:bg-black/60 group-hover/notes:border-white/20 shadow-2xl" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.03] to-transparent rounded-tr-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent opacity-0 group-hover/notes:opacity-100 transition-opacity" />

                <textarea
                  value={currentNote}
                  onChange={(e) => handleNoteChange(e.target.value)}
                  placeholder="Capture your thoughts for this date..."
                  className="relative z-10 w-full h-full min-h-[160px] sm:min-h-[180px] lg:min-h-[200px] bg-transparent border-none focus:ring-0 text-white/90 text-sm leading-relaxed p-4 sm:p-5 resize-none placeholder:text-white/15 font-medium tracking-tight scrollbar-hide"
                />

                <div className="absolute bottom-3 right-3 opacity-10 group-hover/notes:opacity-30 transition-opacity pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1V11M11 1H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
