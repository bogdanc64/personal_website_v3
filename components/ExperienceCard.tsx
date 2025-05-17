import { StaticImageData } from "next/image"
import Image from "next/image"
import SkillIcon from "./SkillIcon"

interface Props {
    companyImage: StaticImageData,
    companyName: string,
    position: string,
    startingDate: Date,
    endingDate?: Date,
    keypoints?: string[],
    skills?: string[],
}

function retrieveDatePeriod(startingDate: Date, endingDate?: Date) {
    return `${startingDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })} - ${endingDate ? endingDate.toLocaleDateString('default', { month: 'long', year: 'numeric' }) : 'Present'}`
}

function ExperienceCard(props: Props) {
    return (
        <section className="body-font">
            <div className="container mx-auto flex flex-col">
                <div className="mx-auto">
                    <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-36 h-20  inline-flex items-center justify-center">
                                <Image src={props.companyImage} objectFit='contain' objectPosition='top' quality={90}></Image>
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium font-extrabold title-font mt-4 text-xl">{props.position}</h2>
                                <p className="font-normal mt-2 text-lg">{props.companyName}</p>
                                <div className="w-12 h-1 bg-accent rounded mt-4 mb-4"></div>
                                <p><span className="mr-2">🗓️</span>{retrieveDatePeriod(props.startingDate, props.endingDate)}</p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-opacity-40 border-gray-500 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-justify sm:text-left">
                            {(props.keypoints && props.keypoints.length > 0) && <div className="pb-10">
                                <ul className="list-disc list-outside">
                                    {
                                        props.keypoints?.map((keypoint, index) => {
                                            return <li className="cursor-text text-lg mx-4 py-1" key={`${keypoint}-${index}`}>{keypoint}</li>
                                        })
                                    }
                                </ul>
                            </div>}
                            <div className="grid grid-cols-3 justify-items-center gap-y-10 md:grid-cols-6">
                                {
                                    props.skills?.map((skill, index) => {
                                        return <SkillIcon key={`${skill}-${index}`} title={true} size={30} type={skill} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceCard