import { useSyncExternalStore } from 'react'

// Tuned by Minh with the slider panel (2026-10-01).
export const GRID_DEFAULTS = {
  squareSize: 2,
  gridGap: 14,
  flickerChance: 1.05,
  maxOpacity: 0.3,
  fade: 80,
}

export type GridTuning = typeof GRID_DEFAULTS
type Listener = () => void

let values: GridTuning = GRID_DEFAULTS
const listeners = new Set<Listener>()

export const gridTuningStore = {
  get: () => values,
  set: (next: GridTuning) => {
    values = next
    listeners.forEach((listener) => listener())
  },
  subscribe: (listener: Listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  },
}

export function useGridTuning() {
  return useSyncExternalStore(gridTuningStore.subscribe, gridTuningStore.get, gridTuningStore.get)
}
