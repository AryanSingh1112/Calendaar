import { Holiday, Quote, MoodImage } from './types'

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const MOOD_IMAGES: MoodImage[] = [
  { src: '/mood/mountains.png', alt: 'Mountains' },
  { src: '/mood/city.png',      alt: 'City' },
  { src: '/mood/desk.png',      alt: 'Desk' },
  { src: '/mood/abstract.png',  alt: 'Abstract' },
  { src: '/mood/forest.png',    alt: 'Forest' },
  { src: '/mood/ocean.png',     alt: 'Ocean' },
]

export const QUOTES: Quote[] = [
  { text: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
  { text: "Where there is love, there is life.", author: "Mahatma Gandhi" },
  { text: "The starting point of achievement is desire.", author: "Napoleon Hill" },
  { text: "Spring is nature's way of saying, 'Let's party!'", author: "Robin Williams" },
  { text: "Everything is beautiful, but not everyone sees it.", author: "Confucius" },
  { text: "In summer, the song sings itself.", author: "William Carlos Williams" },
  { text: "One must maintain a little bit of summer.", author: "Henry David Thoreau" },
  { text: "August is a gentle reminder for purity.", author: "Taylor Swift" },
  { text: "September tries its best to have us forget summer.", author: "Bernard Williams" },
  { text: "I'm so glad I live in a world where there are Octobers.", author: "L.M. Montgomery" },
  { text: "November comes with the last berries and first snows.", author: "Elizabeth Coatsworth" },
  { text: "Christmas is a conspiracy of love.", author: "Hamilton Wright Mabie" }
]

export const HOLIDAYS: Record<string, Holiday> = {
  "2026-01-01": { 
    name: "New Year's Day", 
    emoji: "🎆", 
    description: "The first day of the year marks a fresh start and global celebrations." 
  },
  "2026-01-26": { 
    name: "Republic Day", 
    emoji: "🇮🇳", 
    description: "Celebrating the adoption of the Constitution of India in 1950." 
  },
  "2026-02-14": { 
    name: "Valentine's Day", 
    emoji: "❤️", 
    description: "A day dedicated to love and affection between intimate companions." 
  },
  "2026-03-14": { 
    name: "Holi", 
    emoji: "🎨", 
    description: "Festival of colors celebrating the victory of good over evil." 
  },
  "2026-03-17": { 
    name: "St. Patrick's Day", 
    emoji: "🍀", 
    description: "Celebrating Irish heritage with parades, green attire, and shamrocks." 
  },
  "2026-04-11": { 
    name: "Eid al-Fitr", 
    emoji: "🌙", 
    description: "Marks the end of Ramadan, celebrated with prayers and feasts." 
  },
  "2026-04-12": { 
    name: "Easter Sunday", 
    emoji: "🐣", 
    description: "Christian holiday celebrating the resurrection of Jesus Christ." 
  },
  "2026-05-01": { 
    name: "Labor Day", 
    emoji: "⚒️", 
    description: "Honoring workers and the labor movement worldwide." 
  },
  "2026-08-15": { 
    name: "Independence Day", 
    emoji: "🇮🇳", 
    description: "Commemorating India's independence from British rule in 1947." 
  },
  "2026-10-02": { 
    name: "Gandhi Jayanti", 
    emoji: "🕊️", 
    description: "Birthday of Mahatma Gandhi, observed as a national holiday." 
  },
  "2026-11-01": { 
    name: "Diwali", 
    emoji: "🪔", 
    description: "Festival of lights symbolizing the victory of light over darkness." 
  },
  "2026-12-25": { 
    name: "Christmas Day", 
    emoji: "🎄", 
    description: "A major festival celebrating the birth of Jesus Christ, filled with joy and gifting." 
  },
}
