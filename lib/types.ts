export interface Holiday {
  name: string
  emoji: string
  description: string
}

export interface Quote {
  text: string
  author: string
}

export interface MoodImage {
  src: string
  alt: string
}

export type NotesRecord = Record<string, string>

export type NavbarNavigateDetail = {
  type: 'day' | 'month' | 'year'
  value: string
}

export interface CalendarState {
  currentMonth: Date
  selectedStart: Date | null
  selectedEnd: Date | null
  hoveredDate: Date | null
  notes: NotesRecord
}

export interface HeroPanelProps {
  month: string
  year: number
  subtitle?: string
}

export interface CalendarGridProps {
  currentMonth: Date
  selectedStart: Date | null
  selectedEnd: Date | null
  hoveredDate: Date | null
  notes: NotesRecord
  onDateClick: (date: Date) => void
  onDateHover: (date: Date | null) => void
  onPrevMonth: () => void
  onNextMonth: () => void
}

export interface DetailPanelProps {
  selectedStart: Date | null
  selectedEnd: Date | null
  notes: NotesRecord
  onNoteChange: (key: string, value: string) => void
}

export interface DayCellProps {
  date: Date
  isToday: boolean
  isSelected: boolean
  isRangeEnd: boolean
  isInRange: boolean
  isCurrentMonth: boolean
  hasNote: boolean
  note?: string
  holiday?: Holiday
  isNotePreviewOpen: boolean
  onClick: (date: Date) => void
  onHover: (date: Date | null, leaveFrom?: Date) => void
}
