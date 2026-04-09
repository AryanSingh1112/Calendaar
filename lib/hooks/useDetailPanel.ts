import { useState, useCallback, useRef, useEffect } from 'react'
import { formatRangeLabel } from '@/lib/formatting'

type SaveState = 'idle' | 'saving' | 'saved'

interface UseDetailPanelProps {
  selectedStart: Date | null
  selectedEnd: Date | null
  notes: Record<string, string>
  onNoteChange: (key: string, value: string) => void
}

export function useDetailPanel({
  selectedStart,
  selectedEnd,
  notes,
  onNoteChange,
}: UseDetailPanelProps) {
  const [saveState, setSaveState] = useState<SaveState>('idle')
  const autosaveTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current)
    }
  }, [])

  const getDateKey = useCallback((date: Date): string => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
  }, [])

  const activeDate = selectedStart
  const dateKey = activeDate ? getDateKey(activeDate) : null
  const currentNote = dateKey ? (notes[dateKey] ?? '') : ''

  const getRangeLabel = useCallback(() => {
    if (!selectedStart || !selectedEnd) return null
    return formatRangeLabel(selectedStart, selectedEnd)
  }, [selectedStart, selectedEnd])

  const handleNoteChange = useCallback(
    (value: string) => {
      if (!dateKey) return
      setSaveState('saving')
      onNoteChange(dateKey, value)

      if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current)
      autosaveTimerRef.current = setTimeout(() => setSaveState('saved'), 700)
    },
    [dateKey, onNoteChange]
  )

  return {
    activeDate,
    dateKey,
    currentNote,
    rangeLabel: getRangeLabel(),
    saveState,
    handleNoteChange
  }
}
