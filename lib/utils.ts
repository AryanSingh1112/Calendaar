import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {
  format,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addDays,
  subDays,
} from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toDateKey(date: Date): string {
  return format(date, 'yyyy-MM-dd')
}

export function formatDisplayDate(date: Date): string {
  return format(date, 'MMMM d, yyyy')
}

export function getCalendarDays(currentMonth: Date) {
  const start = startOfWeek(startOfMonth(currentMonth))
  const end = endOfWeek(endOfMonth(currentMonth))

  let days = eachDayOfInterval({ start, end })

  while (days.length < 42) {
    days.push(addDays(days[days.length - 1], 1))
  }
  
  return days.slice(0, 42)
}

export function isDateInRange(date: Date, start: Date | null, end: Date | null): boolean {
  if (!start || !end) return false
  const [min, max] = start <= end ? [start, end] : [end, start]
  return date > min && date < max
}

export { isSameDay }
