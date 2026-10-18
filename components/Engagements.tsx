import Image, { StaticImageData } from 'next/image'
import softwireLogo from '../assets/logos/softwire.png'
import sbpLogo from '../assets/logos/sbp.png'
import { engagements, formatPeriod, skillLabel } from '../data/profile'

const logos: Record<string, StaticImageData> = {
  Softwire: softwireLogo,
  'Software Business Partners': sbpLogo,
}

function Engagements() {
  const ordered = [...engagements].sort(
    (a, b) => a.startingDate.getTime() - b.startingDate.getTime(),
  )

  return (
    <div className="practice">
      {ordered.map((engagement) => {
        const logo = logos[engagement.companyName]
        return (
          <article
            className={engagement.current ? 'chapter is-current' : 'chapter'}
            key={engagement.companyName}
          >
            <div className="stop" aria-hidden="true">
              <span className="stop-mark" />
            </div>
            <div className="logo-plate">
              {logo && (
                <Image src={logo} alt="" width={112} height={36} objectFit="contain" />
              )}
            </div>
            <div>
              <div className="role-head">
                <h3>{engagement.companyName}</h3>
                <p className="when">{formatPeriod(engagement.startingDate, engagement.endingDate)}</p>
              </div>
              <p className="position">{engagement.position}</p>
              {engagement.joinedAs && (
                <p className="joined">Joined as {engagement.joinedAs}.</p>
              )}
              <ul className="keypoints">
                {engagement.keypoints.map((keypoint) => (
                  <li key={keypoint}>{keypoint}</li>
                ))}
              </ul>
              <p className="skill-text">{engagement.skills.map(skillLabel).join(', ')}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Engagements
