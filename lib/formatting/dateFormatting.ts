import { MONTH_NAMES } from '@/lib/constants'
import { format } from 'date-fns'

export function formatDetailDate(date: Date): string {
  return `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

export function formatDateKey(date: Date): string {
  return format(date, 'yyyy-MM-dd')
}

export function formatDate(date: Date, pattern: string): string {
  return format(date, pattern)
}

export function formatRangeLabel(startDate: Date, endDate: Date): string {
  const diff = Math.round(Math.abs(endDate.getTime() - startDate.getTime()) / 86400000) + 1
  return `${diff} day${diff > 1 ? 's' : ''} selected`
}

export function formatMonthYear(date: Date): { month: string; year: number } {
  return {
    month: MONTH_NAMES[date.getMonth()],
    year: date.getFullYear()
  }
}
