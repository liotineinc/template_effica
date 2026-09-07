/**
 * ui/SectionTag — "● 01  WHO WE ARE" label used at the top of most sections.
 * Props: num (string, optional), text (string)
 */
export default function SectionTag({ num, text }) {
  return (
    <span className="section-tag">
      {num && <span className="tag-num">{num}</span>}
      <span className="tag-text">{text}</span>
    </span>
  )
}
