/**
 * ui/RollingLink — nav/footer link whose letters roll upward one-by-one on
 * hover (each letter is doubled and the stack translates -100%).
 * Props: label, to (internal) | href (external), className
 */
import { Link } from 'react-router-dom'

function Letters({ label }) {
  return (
    <>
      {label.split('').map((ch, i) => (
        <span className="roll-l" style={{ '--i': i }} key={i}>
          <span>{ch === ' ' ? ' ' : ch}</span>
          <span aria-hidden="true">{ch === ' ' ? ' ' : ch}</span>
        </span>
      ))}
    </>
  )
}

export default function RollingLink({ label, to, href, className = '', onClick }) {
  const cls = `rolling-link ${className}`
  if (href) {
    return (
      <a className={cls} href={href} target="_blank" rel="noreferrer" onClick={onClick}>
        <Letters label={label} />
      </a>
    )
  }
  return (
    <Link className={cls} to={to || '/'} onClick={onClick}>
      <Letters label={label} />
    </Link>
  )
}
