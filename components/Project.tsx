import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import SkillIcon from './SkillIcon'

interface Props {
    index:number,
    title:string,
    description:string,
    tags:string,
    linkCode:string,
    image:string | StaticImageData,
}

function Project(props:Props) {
  
    const isOdd = (props.index % 2 === 0) ? false : true;

    const iconArray = props.tags.split(" ")

    if(isOdd)
    {
        return (
            <div className="grid gap-x-20 xl:gap-x-28 lg:grid-cols-2 my-20">
                <div className="flex justify-center items-center">
                    <Image className="z-[-10]" objectFit="cover" src={props.image} quality={75} width={1280} height={720}></Image>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="pt-10 lg:pt-0">{props.title}</h2>
                    <p className="my-5 text-justify">{props.description}</p>
                    <div className="flex flex-row">
                    {
                        iconArray.map((element,index) => (
                            <div key={index} className="mr-5">
                                <SkillIcon title={false} type={element} size={25} />
                            </div>
                        ))
                    }
                    </div>
                    <div className="flex flex-row pt-5">
                        <a target='_blank' rel="noreferrer" href={props.linkCode}>
                            <Button name={'View Code'} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    else
    {
        return (
            <div className="grid gap-x-20 xl:gap-x-28 lg:grid-cols-2 my-20">
                <div className="flex flex-col justify-center order-last lg:order-[0]">
                    <h2 className="pt-10 lg:pt-0">{props.title}</h2>
                    <p className="my-5 text-justify">{props.description}</p>
                    <div className="flex flex-row">
                    {
                        iconArray.map((element, index) => (
                            <div key={index} className="mr-5">
                                <SkillIcon title={false} type={element} size={25} />
                            </div>
                        ))
                    }
                    </div>
                    <div className="flex flex-row pt-5">
                        <a target='_blank' rel="noreferrer" href={props.linkCode}>
                            <Button name={'View Code'} />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image className="z-[-10]" objectFit="cover" src={props.image} quality={75} width={640} height={360}></Image>
                </div>
            </div>
        )
    }
}

export default Project