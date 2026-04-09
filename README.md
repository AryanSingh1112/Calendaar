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
Live Link: https://calendaar.vercel.app/
Video Link: https://www.youtube.com/watch?v=fAyLbAxv9wE

## 🧠 Architecture Overview

This project follows **production-level architecture principles** with strict separation of concerns.

---

### 📂 Directory Structure

### 📂 Directory Structure

```bash
/lib
  ├── /services
  │   ├── dateService.ts
  │   ├── quoteService.ts
  │   └── index.ts
  │
  ├── /hooks
  │   ├── useCalendarGrid.ts
  │   ├── useDetailPanel.ts
  │   ├── useHeroPanel.ts
  │   ├── useCalendarMonth.ts
  │   └── index.ts
  │
  ├── /formatting
  │   ├── dateFormatting.ts
  │   └── index.ts
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
```



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

## 🧠 Key Design & Technology Choices

- **Next.js (App Router)**
  → Choose Next.js for its structured architecture and production-ready environment. It enables clean component organization, fast development, and seamless deployment (Vercel). Even though this is a frontend-only task, using Next.js reflects how I build scalable, real-world applications rather than isolated components.

- **TypeScript**
  → Used TypeScript to ensure type safety, reduce runtime errors, and improve code maintainability. It also makes the codebase more predictable and easier to scale, especially when handling complex state like date ranges and notes.

- **Tailwind CSS**
  → Selected Tailwind for its utility-first approach, allowing rapid UI development with consistent spacing, typography, and design tokens. This helped maintain a clean and cohesive SaaS-style design without writing verbose custom CSS.

- **Custom Hooks for State Management**
  → Instead of using external state libraries, I built custom hooks to manage calendar state, selection logic, and UI updates. This keeps the logic modular, reusable, and aligned with React best practices.

- **Separation of Concerns (Services, Hooks, Components)**
  → Structured the application into distinct layers:
    - Services → business logic (date calculations)
    - Hooks → state & interaction logic
    - Components → UI rendering  
  This ensures maintainability, testability, and clarity in larger applications.

- **Custom Date Range Logic (No Library)**
  → Implemented date selection and range handling manually instead of relying on libraries. This demonstrates problem-solving ability and provides full control over UX behavior.

- **localStorage for Persistence**
  → Since the scope is strictly frontend, I used localStorage to persist notes across sessions. This avoids unnecessary backend complexity while still delivering a realistic user experience.

- **Single-Page Architecture**
  → Kept everything within a single page instead of using routing. This ensures faster interactions and a smoother UX, especially when switching between dates or updating the detail panel.

- **Dynamic Detail Panel (Instead of Modal)**
  → Used a persistent side panel instead of popups/modals to maintain context and improve usability. Users can view and edit notes without interrupting their workflow.

- **UI/UX Focused Design**
  → Prioritized clarity, interaction smoothness, and visual hierarchy over feature overload. The goal was to build something that feels like a real product, not just a functional demo.

- **Glassmorphism + Dark SaaS Theme**
  → Adopted a modern design system with subtle gradients, blur, and depth to align with current SaaS UI standards while maintaining readability and performance.

  Some Shots:

  <img width="1920" height="922" alt="Screenshot 2026-04-09 102033" src="https://github.com/user-attachments/assets/7ff98fe7-2a79-4ba2-a665-14fe222f151f" />


## 🚀 Getting Started

```bash
git clone https://github.com/your-username/calendaar.git
cd calendaar
npm install
npm run dev





