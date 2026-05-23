# Browser Extension Manager

A clean React + Vite interface for managing browser extensions in a card-based dashboard. The app demonstrates theme switching, filtered views, and extension state controls.

## Features

- Light / dark theme toggle with saved preference
- Filter extensions by `All`, `Active`, and `Inactive`
- Toggle extension activation state
- Remove extensions from the list
- Initial data loaded from `data/data.json`

## Tech Stack

- React 19
- Vite
- ESLint

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

- `src/`
  - `App.jsx` � app root
  - `main.jsx` � entry point
  - `components/` � visual UI components
  - `contexts/` � theme and extension state providers
  - `hooks/` � custom hooks for context consumption
- `data/data.json` � sample extension dataset
- `index.html` � HTML shell
- `package.json` � dependencies and scripts

## Notes

- Theme state persists across reloads via `localStorage`.
- Extension state is kept in React state and resets when the page refreshes.
