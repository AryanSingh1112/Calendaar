import { useMemo } from 'react'
import {
  buildCalendarGrid,
  isDateSelected,
  isRangeEnd,
  isDateInRange,
  isToday,
  isInCurrentMonth,
} from '@/lib/services'
import { NotesRecord, Holiday } from '@/lib/types'
import { HOLIDAYS } from '@/lib/constants'

interface UseCalendarGridProps {
  currentMonth: Date
  selectedStart: Date | null
  selectedEnd: Date | null
  hoveredDate: Date | null
  notes: NotesRecord
}

interface DayInfo {
  date: Date
  isToday: boolean
  isSelected: boolean
  isRangeEnd: boolean
  isInRange: boolean
  isCurrentMonth: boolean
  hasNote: boolean
  hasEvent: boolean
  note?: string
  holiday?: Holiday
}

export function useCalendarGrid({
  currentMonth,
  selectedStart,
  selectedEnd,
  hoveredDate,
  notes,
}: UseCalendarGridProps) {
  const days = useMemo(() => buildCalendarGrid(currentMonth), [currentMonth])

  const rangeEnd = selectedEnd ?? hoveredDate

  const dayInfoList = useMemo<DayInfo[]>(() => {
    return days.map((date) => {
      const dateKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

      const holiday = HOLIDAYS[dateKey]

      return {
        date,
        isToday: isToday(date),
        isSelected: isDateSelected(date, selectedStart),
        isRangeEnd: isRangeEnd(date, selectedStart, rangeEnd),
        isInRange: isDateInRange(date, selectedStart, rangeEnd),
        isCurrentMonth: isInCurrentMonth(date, currentMonth),
        hasNote: !!notes[dateKey],
        hasEvent: !!holiday,
        note: notes[dateKey],
        holiday,
      }
    })
  }, [days, selectedStart, rangeEnd, notes, currentMonth])

  return {
    days,
    dayInfoList,
    rangeEnd
  }
}
