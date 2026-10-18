import Image, { StaticImageData } from 'next/image'
import softwireLogo from '../assets/logos/softwire.png'
import sbpLogo from '../assets/logos/sbp.png'
import { engagements, formatPeriod } from '../data/profile'
import SkillIcon from './SkillIcon'

const logos: Record<string, StaticImageData> = {
  Softwire: softwireLogo,
  'Software Business Partners': sbpLogo,
}

function Engagements() {
  return (
    <div className="engagements">
      {engagements.map((engagement) => {
        const logo = logos[engagement.companyName]
        return (
          <article className="engagement" key={engagement.companyName}>
            <div className="mark">
              {logo && (
                <Image
                  src={logo}
                  alt=""
                  width={150}
                  height={48}
                  objectFit="contain"
                />
              )}
            </div>
            <div>
              <h3 className="company">
                {engagement.companyName}
                {engagement.current && <span className="flag">Present</span>}
              </h3>
              <p className="role">{engagement.position}</p>
              <p className="date">{formatPeriod(engagement.startingDate, engagement.endingDate)}</p>
              {engagement.joinedAs && (
                <p className="joined">Joined as {engagement.joinedAs}.</p>
              )}
              <ul className="keypoints">
                {engagement.keypoints.map((keypoint) => (
                  <li key={keypoint}>{keypoint}</li>
                ))}
              </ul>
              <ul className="skill-line">
                {engagement.skills.map((skill) => (
                  <li key={skill}>
                    <SkillIcon title size={16} type={skill} />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Engagements
