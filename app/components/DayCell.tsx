'use client'

import React, { memo } from 'react'
import { cn } from '@/lib/utils'
import { DayCellProps } from '@/lib/types'

function DayCell({
  date,
  isToday,
  isSelected,
  isRangeEnd,
  isInRange,
  isCurrentMonth,
  hasNote,
  note,
  holiday,
  isNotePreviewOpen,
  onClick,
  onHover,
}: DayCellProps) {
  const dayNumber = date.getDate()
  const isHighlighted = isSelected || isRangeEnd

  return (
    <div
      className={cn(
        'relative flex items-center justify-center cursor-pointer select-none group h-14 w-full text-sm font-medium transition-all duration-300 border-t border-l border-white/5',
        isInRange && 'bg-indigo-500/10',
        isRangeEnd && 'bg-gradient-to-l from-transparent to-indigo-500/10',
      )}
      onClick={() => onClick(date)}
      onMouseEnter={() => onHover(date)}
      onMouseLeave={() => onHover(null, date)}
    >
      {hasNote && note && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 max-w-[240px] z-50 pointer-events-none mt-2">
          <div
            className={cn(
              'mb-2 transition-all duration-200 ease-out',
              isNotePreviewOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0 invisible',
            )}
          >
            <div
              className={cn(
                'relative overflow-hidden rounded-xl px-3.5 py-3 backdrop-blur-md',
                'border border-amber-400/55',
                'bg-gradient-to-br from-slate-950/92 via-amber-950/35 to-slate-950/94',
                'shadow-[0_0_0_1px_rgb(251_191_36/0.12),0_4px_24px_rgb(0_0_0/0.45),0_0_28px_rgb(217_119_6/0.22)]',
              )}
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-950/25"
                aria-hidden
              />
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="size-1.5 shrink-0 rounded-full bg-amber-400 shadow-[0_0_8px_rgb(251_191_36/0.85)]" />
                  <span className="text-[11px] font-bold uppercase tracking-wide text-amber-100/95">
                    Reminder
                  </span>
                </div>
                <p className="text-[13px] font-normal leading-snug text-white line-clamp-4">{note}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={cn(
          'relative z-10 flex flex-col items-center justify-center w-5/6 h-5/6 rounded-xl transition-all duration-500 overflow-hidden',
          !isHighlighted && !isInRange && isCurrentMonth && 'hover:bg-purple-500/10 hover:scale-105 text-white/70 group-hover:text-purple-300',
          !isCurrentMonth && 'text-white/10',
          isHighlighted && 'bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-500/50 border border-white/20',
          isInRange && !isHighlighted && 'text-indigo-200/90',
        )}
      >
        <span className={cn('text-sm font-extrabold tracking-tight', isHighlighted && 'drop-shadow-md')}>
          {dayNumber}
        </span>

        {holiday && (
          <span className="text-[7px] uppercase tracking-widest font-bold text-white/80 mt-0.5">
            {holiday.name}
          </span>
        )}
      </div>

      {!isHighlighted && (hasNote || holiday) && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
          {holiday && (
            <div className="w-1 h-1 rounded-full bg-purple-500 shadow-sm shadow-purple-500/60" />
          )}
          {hasNote && (
            <div className="w-1 h-1 rounded-full bg-amber-500 shadow-sm shadow-amber-500/60" />
          )}
        </div>
      )}
    </div>
  )
}

export default memo(DayCell)
