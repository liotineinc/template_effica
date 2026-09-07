/**
 * ui/Marquee — infinite horizontal ticker (client-logo strip). The track is
 * rendered twice so the CSS translateX(-100%) loop is seamless.
 * Props: items (string[]), speed (seconds per loop)
 */
export default function Marquee({ items, speed = 28 }) {
  const track = (hidden) => (
    <div className="marquee-track" aria-hidden={hidden} style={{ '--marquee-speed': `${speed}s` }}>
      {items.map((it, i) => (
        <span className="marquee-item" key={i}>{it}</span>
      ))}
    </div>
  )
  return (
    <div className="marquee">
      {track(false)}
      {track(true)}
    </div>
  )
}
