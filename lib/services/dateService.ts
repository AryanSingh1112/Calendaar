export function isSameDay(firstDate: Date, secondDate: Date): boolean {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  )
}

export function isDateSelected(date: Date, selectedStart: Date | null): boolean {
  return !!selectedStart && isSameDay(date, selectedStart)
}

export function isRangeEnd(
  date: Date,
  selectedStart: Date | null,
  rangeEnd: Date | null
): boolean {
  if (!selectedStart || !rangeEnd || isSameDay(selectedStart, rangeEnd)) return false
  return isSameDay(date, rangeEnd)
}

export function isDateInRange(
  date: Date,
  selectedStart: Date | null,
  rangeEnd: Date | null
): boolean {
  if (!selectedStart || !rangeEnd || isSameDay(selectedStart, rangeEnd)) return false
  const [rangeMin, rangeMax] = selectedStart <= rangeEnd ? [selectedStart, rangeEnd] : [rangeEnd, selectedStart]
  return date > rangeMin && date < rangeMax
}

export function buildCalendarGrid(currentMonth: Date): Date[] {
  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startPad = firstDay.getDay()

  const days: Date[] = []
  for (let previousPadIndex = startPad - 1; previousPadIndex >= 0; previousPadIndex--) {
    days.push(new Date(year, month, -previousPadIndex))
  }
  for (let dayOfMonth = 1; dayOfMonth <= lastDay.getDate(); dayOfMonth++) {
    days.push(new Date(year, month, dayOfMonth))
  }
  while (days.length < 42) {
    days.push(new Date(year, month + 1, days.length - lastDay.getDate() - startPad + 1))
  }

  return days
}

export function isToday(date: Date): boolean {
  return isSameDay(date, new Date())
}

export function isInCurrentMonth(date: Date, currentMonth: Date): boolean {
  return (
    date.getFullYear() === currentMonth.getFullYear() &&
    date.getMonth() === currentMonth.getMonth()
  )
}

export function calculateRangeDays(start: Date, end: Date): number {
  return Math.round(Math.abs(end.getTime() - start.getTime()) / 86400000) + 1
}

export function applyNavbarNavigation(
  base: Date,
  part: 'day' | 'month' | 'year',
  value: string
): Date {
  const y = base.getFullYear()
  const m = base.getMonth()
  const d = base.getDate()
  const n = parseInt(value, 10)
  if (Number.isNaN(n)) return base
  if (part === 'day') return new Date(y, m, n)
  if (part === 'month') {
    const lastDay = new Date(y, n + 1, 0).getDate()
    return new Date(y, n, Math.min(d, lastDay))
  }
  const lastDay = new Date(n, m + 1, 0).getDate()
  return new Date(n, m, Math.min(d, lastDay))
}
