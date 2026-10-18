import Image, { StaticImageData } from 'next/image'
import runnie from '../assets/images/runnie.png'
import personalWebsite from '../assets/images/personal_website.png'
import { projects, skillLabel } from '../data/profile'

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
          <article className="project work-piece" key={project.title}>
            {shot && (
              <figure className="shot">
                <Image
                  src={shot}
                  alt={`${project.title} screenshot`}
                  width={1280}
                  height={800}
                  layout="responsive"
                  objectFit="cover"
                />
              </figure>
            )}
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="skill-text">{project.technologies.map(skillLabel).join(', ')}</p>
              {project.privateRepository ? (
                <p className="repo-note">Private repository</p>
              ) : (
                <p>
                  <a className="quiet" href={project.linkCode} target="_blank" rel="noreferrer">
                    View Code
                  </a>
                </p>
              )}
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Stories
