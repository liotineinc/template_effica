/**
 * ui/PillButton — the big rounded CTA. On hover the label rolls up and a
 * duplicate label slides in from below (double-label trick from the
 * reference site).
 *
 * Props:
 *   label   — button text
 *   to      — internal route/anchor (renders <Link>)
 *   href    — external url (renders <a>)
 *   variant — 'dark' | 'light' | 'accent' | 'outline'
 *   type    — for <button type="submit">
 */
import { Link } from 'react-router-dom'

export default function PillButton({ label, to, href, variant = 'dark', type, onClick }) {
  const cls = `pill-btn pill-btn--${variant}`
  const face = (
    <span className="pill-face">
      <span>{label}</span>
      <span aria-hidden="true">{label}</span>
    </span>
  )
  if (to) return <Link className={cls} to={to} onClick={onClick}>{face}</Link>
  if (href) return <a className={cls} href={href} target="_blank" rel="noreferrer">{face}</a>
  return <button className={cls} type={type || 'button'} onClick={onClick}>{face}</button>
}
