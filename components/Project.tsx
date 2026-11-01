import Image, { StaticImageData } from 'next/image'
import SkillIcon from './SkillIcon'

interface Props {
  title: string
  description: string
  technologies?: string[]
  linkCode: string
  privateRepository: boolean
  image: string | StaticImageData
  imageAlt: string
}

const skillNames: Record<string, string> = {
  vue: 'Vue',
  nestjs: 'NestJS',
  'socket.io': 'Socket.IO',
  react: 'React',
  tailwind: 'Tailwind',
  nextjs: 'Next.js',
}

function Project(props: Props) {
  const plate = (
    <Image
      src={props.image}
      alt={props.privateRepository ? props.imageAlt : ''}
      layout="responsive"
      sizes="(min-width: 1280px) 64rem, 100vw"
      quality={80}
    />
  )

  return (
    <article>
      <figure data-reveal="media">
        {props.privateRepository ? (
          <div className="overflow-hidden rounded-md border border-line bg-secondary">
            {plate}
          </div>
        ) : (
          <a
            href={props.linkCode}
            target="_blank"
            rel="noreferrer"
            aria-label={`View the code for ${props.title}`}
            className="block rounded-md border border-line bg-secondary transition-colors duration-200 hover:border-accent"
          >
            <div className="overflow-hidden rounded-md">
              {plate}
            </div>
          </a>
        )}
      </figure>
      <div data-reveal className="mt-6 max-w-[40rem]">
        <h2 className="text-2xl">{props.title}</h2>
        <p className="mt-3 text-lg leading-relaxed text-secondary">{props.description}</p>
        {(props.technologies ?? []).length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
            {(props.technologies ?? []).map((skill) => (
              <li className="flex cursor-default items-center gap-2 text-secondary" key={skill}>
                <SkillIcon type={skill} size={16} title={false} />
                <span>{skillNames[skill] ?? skill}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-6">
          {props.privateRepository ? (
            <span className="text-secondary">Private repository</span>
          ) : (
            <a className="hero-link font-medium text-primary" href={props.linkCode} target="_blank" rel="noreferrer">
              View the code
            </a>
          )}
        </p>
      </div>
    </article>
  )
}

export default Project
