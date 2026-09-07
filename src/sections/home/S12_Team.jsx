/**
 * home/S12_Team — anchor #team. Four member cards (greyscale photo block
 * that colors on hover — brief: "grey headshot that lights up"), skills
 * lists, the "no outsourcing" tagline, and the START YOUR PROJECT CTA.
 * Photo placeholders show the member's initial — swap in real headshots.
 */
import Reveal from '../../components/ui/Reveal.jsx'
import SectionTag from '../../components/ui/SectionTag.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import LineButton from '../../components/ui/LineButton.jsx'
import { team } from '../../content/siteContent.js'

export default function S12_Team() {
  return (
    <section className="section team on-dim" data-component="S12_Team" id={team.id}>
      <GridLines crosses />
      <div className="section-inner">
        <SectionTag num="08" text={team.label} />
        <Reveal as="h2" className="display">{team.heading}</Reveal>

        <div className="team-grid">
          {team.members.map((m, i) => (
            <Reveal className="team-card" key={m.name} delay={i * 0.08} y={34}>
              <div className="tc-role">
                <span>{m.role}</span>
                <span>⋮⋮</span>
              </div>
              <div className="tc-photo">{m.name[0] /* ← replace with headshot img */}</div>
              <div className="tc-name">{m.name}</div>
              <div className="tc-tag">{m.tag}</div>
              <div className="tc-skills">
                {m.skills.map((s) => <span key={s}>{s}</span>)}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="team-tagline display">
          {team.tagline.join(' ')}
        </Reveal>

        <div className="team-cta-wrap">
          <LineButton label={team.cta.label} to={team.cta.href} />
          <span className="team-cta-caption">{team.captionSmall}</span>
        </div>
      </div>
    </section>
  )
}
