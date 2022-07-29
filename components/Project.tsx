import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import SkillIcon from './SkillIcon'

interface Props {
    index:number,
    title:string,
    description:string,
    tags:string,
    linkCode:string,
    image:string,
}

function Project(props:Props) {
  
    const isOdd = (props.index % 2 === 0) ? false : true;

    const iconArray = props.tags.split(" ")

    if(isOdd)
    {
        return (
            <div className="md:grid gap-x-40 grid-cols-2 my-20">
                <Image className="z-[-10]" objectFit="cover" src={props.image} quality={75} width={640} height={360}></Image>
                <div className="flex flex-col justify-center">
                    <h2>{props.title}</h2>
                    <p className="my-5 md:text-justify text-left">{props.description}</p>
                    <div className="flex flex-row">
                    {
                        iconArray.map((element) => (
                            <div className="mr-10">
                                <SkillIcon title={false} type={element} size={25} />
                            </div>
                        ))
                    }
                    </div>
                    <div className="flex flex-row pt-5">
                        <a target='_blank' href={props.linkCode}>
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
            <div className="md:grid gap-x-40 grid-cols-2 my-20">
                <div className="flex flex-col justify-center">
                    <h2>{props.title}</h2>
                    <p className="my-5 md:text-justify text-left">{props.description}</p>
                    <div className="flex flex-row">
                    {
                        iconArray.map((element) => (
                            <div className="mr-10">
                                <SkillIcon title={false} type={element} size={25} />
                            </div>
                        ))
                    }
                    </div>
                    <div className="flex flex-row pt-5">
                        <a target='_blank' href={props.linkCode}>
                            <Button name={'View Code'} />
                        </a>
                    </div>
                </div>
                <Image className="z-[-10]" objectFit="cover" src={props.image} quality={75} width={640} height={360}></Image>
            </div>
        )
    }
}

export default Project