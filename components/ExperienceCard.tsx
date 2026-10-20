import { StaticImageData } from 'next/image'
import Image from 'next/image'

interface Props {
    companyName: string,
    companyLogo: StaticImageData,
    logoTone?: 'color' | 'light',
    position: string,
    startingDate: Date,
    endingDate?: Date,
    keypoints?: string[],
    skills?: string[],
}

const skillNames: Record<string, string> = {
    react: 'React',
    python: 'Python',
    fastapi: 'FastAPI',
    azure: 'Azure',
    snowflake: 'Snowflake',
    tableau: 'Tableau',
    vue: 'Vue',
    angular: 'Angular',
    dotnet: '.NET',
    express: 'Express',
    aws: 'AWS',
}

function formatMonth(date: Date) {
    return date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
}

function ExperienceCard(props: Props) {
    const tools = (props.skills ?? []).map((skill) => skillNames[skill] ?? skill)
    const current = !props.endingDate
    const logoClass = props.logoTone === 'light'
        ? 'h-8 w-auto brightness-0 dark:brightness-100'
        : 'h-8 w-auto'

    return (
        <article className="py-8">
            <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="text-2xl">{props.position}</h3>
                        {current && <p className="font-medium">Current</p>}
                    </div>
                    <p className="mt-1 text-lg text-secondary">{props.companyName}</p>
                    <p className="mt-1 text-secondary">
                        {current
                            ? `Since ${formatMonth(props.startingDate)}`
                            : `${formatMonth(props.startingDate)} – ${formatMonth(props.endingDate as Date)}`}
                    </p>
                </div>
                <div className="shrink-0 self-start">
                    <Image
                        src={props.companyLogo}
                        alt=""
                        height={32}
                        width={props.logoTone === 'light' ? 75 : 156}
                        className={logoClass}
                    />
                </div>
            </div>
            {props.keypoints && props.keypoints.length > 0 && (
                <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {props.keypoints.map((keypoint) => (
                        <li className="flex gap-2.5 text-lg leading-snug" key={keypoint}>
                            <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                            <span>{keypoint}</span>
                        </li>
                    ))}
                </ul>
            )}
            {tools.length > 0 && (
                <p className="mt-6 text-secondary">{tools.join(' · ')}</p>
            )}
        </article>
    )
}

export default ExperienceCard
