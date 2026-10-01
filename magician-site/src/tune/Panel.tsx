import { useState } from 'react'
import { GRID_DEFAULTS, gridTuningStore, type GridTuning, useGridTuning } from './gridTuning'

const controls: Array<{ key: keyof GridTuning; label: string; min: number; max: number; step: number; suffix?: string }> = [
  { key: 'squareSize', label: 'Square size', min: 2, max: 12, step: 1 },
  { key: 'gridGap', label: 'Grid gap', min: 2, max: 16, step: 1 },
  { key: 'flickerChance', label: 'Flicker chance', min: 0.05, max: 1.5, step: 0.05 },
  { key: 'maxOpacity', label: 'Max opacity', min: 0.05, max: 0.6, step: 0.01 },
  { key: 'fade', label: 'Fade', min: 30, max: 100, step: 5, suffix: '%' },
]

export default function Panel() {
  const values = useGridTuning()
  const [snapshot, setSnapshot] = useState<GridTuning | null>(null)
  const [snapshotB, setSnapshotB] = useState<GridTuning | null>(null)
  const [showingA, setShowingA] = useState(false)

  const update = (key: keyof GridTuning, value: number) => gridTuningStore.set({ ...values, [key]: value })
  const toggle = () => {
    if (!snapshot) return
    if (showingA && snapshotB) gridTuningStore.set(snapshotB)
    else {
      setSnapshotB(values)
      gridTuningStore.set(snapshot)
    }
    setShowingA(!showingA)
  }
  const copyValues = () => navigator.clipboard.writeText(`export const GRID_DEFAULTS = ${JSON.stringify(values, null, 2)}`)

  return (
    <aside className="tune-panel" aria-label="Flickering grid tuning">
      <h2>Grid tuning</h2>
      {controls.map((control) => (
        <label key={control.key}>
          <span>{control.label}<output>{values[control.key]}{control.suffix}</output></span>
          <input type="range" min={control.min} max={control.max} step={control.step} value={values[control.key]} onChange={(event) => update(control.key, Number(event.target.value))} />
        </label>
      ))}
      <div className="tune-actions">
        <a href="#take">Jump to section</a>
        <button type="button" onClick={() => gridTuningStore.set(GRID_DEFAULTS)}>Reset</button>
        <button type="button" onClick={() => { setSnapshot(values); setSnapshotB(null); setShowingA(false) }}>Save A</button>
        <button type="button" disabled={!snapshot} onClick={toggle}>Toggle A/B</button>
        <button type="button" onClick={copyValues}>Copy values</button>
      </div>
    </aside>
  )
}
