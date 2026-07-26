import { ScoutEmblem } from './icons/ScoutEmblem'

export default function EagleScoutBadge() {
  return (
    <div className="scout-badge" tabIndex={0} aria-label="Eagle Scout">
      <ScoutEmblem size={22} />
      <span className="scout-badge__tooltip" role="tooltip">
        Eagle Scout
      </span>
    </div>
  )
}
