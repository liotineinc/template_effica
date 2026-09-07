/**
 * ui/LineButton — text CTA with gradient underline + arrow that nudges
 * right on hover ("START AI JOURNEY →" pattern in the reference).
 * Props: label, to (internal) | href (external) | type (form submit)
 */
import { Link } from 'react-router-dom'

export default function LineButton({ label, to, href, type, onClick }) {
  const inner = (
    <>
      <span>{label}</span>
      <span className="arrow" aria-hidden="true">→</span>
    </>
  )
  if (to) return <Link className="line-btn" to={to} onClick={onClick}>{inner}</Link>
  if (href) return <a className="line-btn" href={href} target="_blank" rel="noreferrer">{inner}</a>
  return <button className="line-btn" type={type || 'button'} onClick={onClick}>{inner}</button>
}
