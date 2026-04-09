'use client'

import React, { useState, useEffect, useRef } from 'react'
import HeroPanel from './components/HeroPanel'
import CalendarGrid from './components/CalendarGrid'
import DetailPanel from './components/DetailPanel'

import { MONTH_NAMES } from '@/lib/constants'
import { applyNavbarNavigation } from '@/lib/services'
import { NavbarNavigateDetail, NotesRecord } from '@/lib/types'

export default function Home() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedStart, setSelectedStart] = useState<Date | null>(new Date())
  const [selectedEnd, setSelectedEnd] = useState<Date | null>(null)
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null)
  const [notes, setNotes] = useState<NotesRecord>({})
  const selectedStartRef = useRef(selectedStart)
  const currentMonthRef = useRef(currentMonth)

  selectedStartRef.current = selectedStart
  currentMonthRef.current = currentMonth

  useEffect(() => {
    const savedNotes = localStorage.getItem('calendaar-notes')
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes))
      } catch (error) {
        console.error('Failed to parse notes', error)
      }
    }
  }, [])

  const handleNoteChange = (key: string, value: string) => {
    const updatedNotes = { ...notes, [key]: value }
    setNotes(updatedNotes)
    localStorage.setItem('calendaar-notes', JSON.stringify(updatedNotes))
  }

  useEffect(() => {
    const handleNavigationEvent = (event: Event) => {
      const { detail } = event as CustomEvent<NavbarNavigateDetail>
      if (!detail?.type || detail.value === undefined) return
      const base = selectedStartRef.current ?? currentMonthRef.current
      const next = applyNavbarNavigation(base, detail.type, detail.value)
      setCurrentMonth(next)
      setSelectedStart(next)
      setSelectedEnd(null)
    }

    const handleClearSelection = () => {
      setSelectedStart(null)
      setSelectedEnd(null)
    }

    window.addEventListener('calendaar-navigate', handleNavigationEvent)
    window.addEventListener('calendaar-clear', handleClearSelection)
    return () => {
      window.removeEventListener('calendaar-navigate', handleNavigationEvent)
      window.removeEventListener('calendaar-clear', handleClearSelection)
    }
  }, [])

  const handleDateClick = (date: Date) => {
    if (!selectedStart || (selectedStart && selectedEnd)) {
      setSelectedStart(date)
      setSelectedEnd(null)
    } else {
      if (date.getTime() === selectedStart.getTime()) {
        setSelectedStart(date)
        setSelectedEnd(null)
      } else {
        setSelectedEnd(date)
      }
    }
  }

  return (
    <main className="flex-1 px-4 pt-2 pb-4 lg:px-6 flex flex-col w-full">
      <div className="flex-1 w-full mx-auto min-h-0">
        <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 lg:grid-cols-[minmax(280px,320px)_minmax(0,1fr)] xl:grid-cols-[minmax(300px,320px)_minmax(0,1fr)_minmax(300px,320px)] h-full">
          <HeroPanel
            month={MONTH_NAMES[currentMonth.getMonth()]}
            year={currentMonth.getFullYear()}
            subtitle="Plan your time, own your days."
          />

          <div className="relative rounded-3xl min-h-0">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-white/2 border border-white/[0.06]" />
            <div className="relative z-10 p-5 h-full flex flex-col min-h-0">
              <CalendarGrid
                currentMonth={currentMonth}
                selectedStart={selectedStart}
                selectedEnd={selectedEnd}
                hoveredDate={hoveredDate}
                notes={notes}
                onDateClick={handleDateClick}
                onDateHover={setHoveredDate}
                onPrevMonth={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
                onNextMonth={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
              />
            </div>
          </div>

          <div className="lg:col-span-2 xl:col-auto">
            <DetailPanel
              selectedStart={selectedStart}
              selectedEnd={selectedEnd}
              notes={notes}
              onNoteChange={handleNoteChange}
            />
          </div>
        </div>
      </div>
    </main>
  )
}