import { useCallback } from 'react'

interface UseCalendarMonthProps {
  currentMonth: Date
  onMonthChange: (date: Date) => void
}

export function useCalendarMonth({ currentMonth, onMonthChange }: UseCalendarMonthProps) {
  const handlePrevMonth = useCallback(() => {
    const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    onMonthChange(newMonth)
  }, [currentMonth, onMonthChange])

  const handleNextMonth = useCallback(() => {
    const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    onMonthChange(newMonth)
  }, [currentMonth, onMonthChange])

  return {
    handlePrevMonth,
    handleNextMonth
  }
}
