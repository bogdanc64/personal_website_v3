import Image, { StaticImageData } from 'next/image'
import runnie from '../assets/images/runnie.png'
import personalWebsite from '../assets/images/personal_website.png'
import { projects } from '../data/profile'
import SkillIcon from './SkillIcon'

const shots: Record<string, StaticImageData> = {
  Runnie: runnie,
  'Personal portfolio': personalWebsite,
}

function Stories() {
  return (
    <div>
      {projects.map((project) => {
        const shot = shots[project.title]
        return (
          <article className="report" key={project.title}>
            <h3>{project.title}</h3>
            {shot && (
              <figure className="shot">
                <Image
                  src={shot}
                  alt={`${project.title} screenshot`}
                  width={1280}
                  height={800}
                  layout="responsive"
                  objectFit="contain"
                />
              </figure>
            )}
            <div className="report-copy">
              <p>{project.description}</p>
            </div>
            <ul className="skill-line">
              {project.technologies.map((technology) => (
                <li key={technology}>
                  <SkillIcon title size={16} type={technology} />
                </li>
              ))}
            </ul>
            {project.privateRepository ? (
              <p className="repo-note">Private repository</p>
            ) : (
              <a className="repo-link" href={project.linkCode} target="_blank" rel="noreferrer">
                View Code
              </a>
            )}
          </article>
        )
      })}
    </div>
  )
}

export default Stories
