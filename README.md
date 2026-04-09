# 🗓️ Calendaar — Premium Interactive Calendar

A modern, production-ready calendar application designed with a strong focus on user experience, clean architecture, and professional frontend engineering practices.

This project goes beyond a basic calendar by integrating contextual notes, date range selection, event indicators, and a highly refined SaaS-inspired interface.

---

## ✨ Features

- 📅 **Interactive Calendar Grid**
  - Clean monthly view
  - Smooth date selection
  - Date range selection with visual feedback

- 🧠 **Contextual Detail Panel**
  - Selected date insights
  - Event/holiday display
  - Notes section with auto-save

- 📝 **Notes System**
  - Persistent notes (localStorage)
  - Auto-save feedback
  - Clean writing experience

- 🎯 **Event Indicators**
  - Visual markers for events/holidays
  - Tooltip-based reminders

- 🎨 **Premium UI/UX**
  - Dark SaaS theme
  - Glassmorphism effects
  - Subtle gradients and glow accents
  - Smooth interactions & transitions

- 🖼️ **Hero Panel**
  - Monthly perspective
  - Mood-based visual system
  - Image-driven aesthetic experience

- 📱 **Responsive Design**
  - Desktop-first layout
  - Mobile-friendly interactions

---
Live Link : https://calendaar.vercel.app/

## 🧠 Architecture Overview

This project follows **production-level architecture principles** with strict separation of concerns.

---

### 📂 Directory Structure

/lib
├── /services
│ ├── dateService.ts
│ ├── quoteService.ts
│ └── index.ts
│
├── /hooks
│ ├── useCalendarGrid.ts
│ ├── useDetailPanel.ts
│ ├── useHeroPanel.ts
│ ├── useCalendarMonth.ts
│ └── index.ts
│
├── /formatting
│ ├── dateFormatting.ts
│ └── index.ts
│
├── constants.ts
├── types.ts
├── utils.ts

/app/components
├── CalendarGrid.tsx
├── DayCell.tsx
├── DetailPanel.tsx
├── HeroPanel.tsx
└── Navbar.tsx



## 🏗️ Separation of Concerns

### 1. 🔧 Services (`/lib/services`)
- Pure business logic
- Date calculations, validation, rules
- No React dependencies
- Fully reusable & testable

---

### 2. ⚛️ Hooks (`/lib/hooks`)
- State management layer
- Combine services + React logic
- Handle side effects & memoization
- Provide clean data to UI

---

### 3. 🧾 Formatting (`/lib/formatting`)
- Display-only transformations
- Centralized date formatting
- Easy to modify & localize

---

### 4. 🎨 Components (`/app/components`)
- Pure UI rendering
- No business logic
- Consume hooks & services
- Focused on presentation only

---

## ⚙️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **Storage:** localStorage (client-side persistence)

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/calendaar.git
cd calendaar
npm install
npm run dev
