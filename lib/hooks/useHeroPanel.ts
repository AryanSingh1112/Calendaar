import { useState, useMemo } from 'react'
import { getQuoteForMonth } from '@/lib/services'

interface UseHeroPanelProps {
  month: string
  year: number
}

export function useHeroPanel({ month, year }: UseHeroPanelProps) {
  const [activeMood, setActiveMood] = useState<string | null>(null)

  const activeQuote = useMemo(() => {
    return getQuoteForMonth(month, year)
  }, [month, year])

  const handleMoodToggle = (src: string | null) => {
    setActiveMood(src)
  }

  return {
    activeMood,
    activeQuote,
    handleMoodToggle
  }
}
