import { QUOTES } from '@/lib/constants'

export function getQuoteForMonth(month: string | number, year: number): (typeof QUOTES)[0] {
  let monthIndex: number

  if (typeof month === 'number') {
    monthIndex = month
  } else {
    const monthDate = new Date(`${month} 1, ${year}`)
    monthIndex = monthDate.getMonth()
  }

  return QUOTES[monthIndex] || QUOTES[0]
}

export function getCurrentMonthQuote(): (typeof QUOTES)[0] {
  const now = new Date()
  return QUOTES[now.getMonth()] || QUOTES[0]
}

export function getAllQuotes() {
  return QUOTES
}
