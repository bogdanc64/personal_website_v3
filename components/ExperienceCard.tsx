interface Props {
    companyName: string,
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

function retrieveDatePeriod(startingDate: Date, endingDate?: Date) {
    const format = (date: Date) => date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
    return `${format(startingDate)} – ${endingDate ? format(endingDate) : 'Present'}`
}

function ExperienceCard(props: Props) {
    const tools = (props.skills ?? []).map((skill) => skillNames[skill] ?? skill)

    return (
        <article className="border-t border-line py-10">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-2xl">{props.position}</h3>
                <p className="text-secondary">{retrieveDatePeriod(props.startingDate, props.endingDate)}</p>
            </div>
            <p className="mt-1 text-lg text-secondary">{props.companyName}</p>
            {props.keypoints && props.keypoints.length > 0 && (
                <ul className="mt-6 space-y-3">
                    {props.keypoints.map((keypoint) => (
                        <li className="text-lg leading-relaxed" key={keypoint}>{keypoint}</li>
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
