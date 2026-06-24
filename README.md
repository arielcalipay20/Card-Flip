# Card Deal & Flip Animation

A React + TypeScript application built as a technical exam for ParallelQuantum Corp.

## Features

- Deal cards with smooth slide-in animation
- Flip cards front and back with 3D horizontal rotation
- Slide out cards with exit animation before DOM removal
- Multiple cards with independent animation states
- Responsive layout for desktop and mobile

## Tech Stack

- React 18
- TypeScript
- Vite
- Pure CSS animations (no animation libraries)

## Project Structure

src/

├── components/

│ ├── Card/ # Card component + 3D flip + slide animations

│ ├── Controls/ # Deal, Flip Front, Flip Back, Slide Out buttons

│ └── PlayerSeat/ # Card container

├── hooks/

│ └── useCards.ts # All card state and logic

├── types/

│ └── card.ts # Card interface and types

├── App.tsx

└── index.css

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Implementation Notes

- CSS handles all animations — React only toggles class names
- `useCallback` wraps all hook functions to prevent unnecessary re-renders
- Slide-out uses `setTimeout` to allow exit animation before DOM removal
- Cards use standard 52-card deck values (A, 2–10, J, Q, K) with four suits
- Currently deals random card values
