'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import DayCell from './DayCell'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DAY_LABELS } from '@/lib/constants'
import { CalendarGridProps } from '@/lib/types'
import { useCalendarGrid } from '@/lib/hooks'
import { formatMonthYear } from '@/lib/formatting'
import { toDateKey } from '@/lib/utils'

export default function CalendarGrid({
  currentMonth,
  selectedStart,
  selectedEnd,
  hoveredDate,
  notes,
  onDateClick,
  onDateHover,
  onPrevMonth,
  onNextMonth,
}: CalendarGridProps) {
  const [notePreviewKey, setNotePreviewKey] = useState<string | null>(null)
  const noteLeaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearNoteLeaveTimer = () => {
    if (noteLeaveTimerRef.current) {
      clearTimeout(noteLeaveTimerRef.current)
      noteLeaveTimerRef.current = null
    }
  }

  useEffect(() => () => clearNoteLeaveTimer(), [])

  const handleDayHover = useCallback(
    (date: Date | null, leaveFrom?: Date) => {
      onDateHover(date)
      if (date) {
        clearNoteLeaveTimer()
        const key = toDateKey(date)
        setNotePreviewKey(notes[key] ? key : null)
        return
      }
      if (!leaveFrom) {
        clearNoteLeaveTimer()
        setNotePreviewKey(null)
        return
      }
      const keyLeft = toDateKey(leaveFrom)
      noteLeaveTimerRef.current = setTimeout(() => {
        setNotePreviewKey((cur) => (cur === keyLeft ? null : cur))
        noteLeaveTimerRef.current = null
      }, 140)
    },
    [onDateHover, notes]
  )

  const { dayInfoList } = useCalendarGrid({
    currentMonth,
    selectedStart,
    selectedEnd,
    hoveredDate,
    notes
  })

  const { month, year } = formatMonthYear(currentMonth)

  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white text-xl font-semibold">
            {month}{' '}
            <span className="text-white/30 font-normal">{year}</span>
          </h3>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onPrevMonth}
            className="p-2 rounded-xl hover:bg-white/5 text-white/40 hover:text-white transition-all duration-150"
            aria-label="Previous month"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={onNextMonth}
            className="p-2 rounded-xl hover:bg-white/5 text-white/40 hover:text-white transition-all duration-150"
            aria-label="Next month"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7">
        {DAY_LABELS.map((dayLabel) => (
          <div
            key={dayLabel}
            className="text-center text-[11px] font-semibold text-white/25 uppercase tracking-widest py-1"
          >
            {dayLabel}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 flex-1 border-r border-b border-white/4">
        {dayInfoList.map((dayInfo) => {
          const dayKey = `${dayInfo.date.getFullYear()}-${dayInfo.date.getMonth()}-${dayInfo.date.getDate()}`
          const stableNoteKey = toDateKey(dayInfo.date)
          return (
            <DayCell
              key={dayKey}
              date={dayInfo.date}
              isToday={dayInfo.isToday}
              isSelected={dayInfo.isSelected}
              isRangeEnd={dayInfo.isRangeEnd}
              isInRange={dayInfo.isInRange}
              isCurrentMonth={dayInfo.isCurrentMonth}
              hasNote={dayInfo.hasNote}
              note={dayInfo.note}
              holiday={dayInfo.holiday}
              isNotePreviewOpen={notePreviewKey === stableNoteKey}
              onClick={() => onDateClick(dayInfo.date)}
              onHover={handleDayHover}
            />
          )
        })}
      </div>
    </div>
  )
}
