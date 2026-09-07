/**
 * ui/GridLines — the signature thin vertical hairlines + "+" corner crosses
 * that sit behind every section. Purely decorative.
 * Props: crosses (bool) — also render corner cross markers.
 */
export default function GridLines({ crosses = false }) {
  return (
    <>
      <div className="grid-lines" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
      {crosses && (
        <>
          <i className="cross" style={{ top: 14, left: 14 }} aria-hidden="true" />
          <i className="cross" style={{ top: 14, right: 14 }} aria-hidden="true" />
        </>
      )}
    </>
  )
}
