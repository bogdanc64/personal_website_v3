import { SiTypescript, SiAngular, SiDotnet, SiDatabricks, SiVuedotjs, SiGo, SiJest, SiNestjs, SiSnowflake, SiPython, SiFastapi, SiReact, SiMicrosoftazure, SiAmazonaws, SiExpress, SiNextdotjs, SiTailwindcss, SiTableau } from "react-icons/si"

interface Props {
    type: string,
    size: number,
    title: boolean,
}

function SkillIcon(props: Props) {

    switch (props.type) {
        case 'angular':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiAngular className='hover:text-[#b52e31] transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">Angular</p>
                            : null
                    }
                </div>
            )
        case 'nestjs':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiNestjs className='hover:text-[#EA2856] transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">NestJS</p>
                            : null
                    }
                </div>
            )
        case 'typescript':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiTypescript className='hover:text-[#3178C6] transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">Typescript</p>
                            : null
                    }
                </div>
            )
        case 'dotnet':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiDotnet className='hover:text-[#783bd2] transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">.NET</p>
                            : null
                    }
                </div>
            )
        case 'vue':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiVuedotjs className='hover:text-[#42b883] transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">Vue</p>
                            : null
                    }
                </div>
            )
        case 'go':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiGo className='hover:text-[#027D9C] transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">Golang</p>
                            : null
                    }
                </div>
            )
        case 'jest':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiJest className='hover:text-[#16C213] transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">Jest</p>
                            : null
                    }
                </div>
            )
        case 'python':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiPython className='hover:text-[#4B8BBE] transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">Python</p>
                            : null
                    }
                </div>
            )
        case 'fastapi':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiFastapi className='hover:text-[#13988A] transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">FastAPI</p>
                            : null
                    }
                </div>
            )
        case 'snowflake':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiSnowflake className='hover:text-[#259EDC] transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">Snowflake</p>
                            : null
                    }
                </div>
            )
        case 'azure':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiMicrosoftazure className='hover:text-[#104581] transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">Azure</p>
                            : null
                    }
                </div>
            )
        case 'react':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiReact className='hover:text-[#61DAFB] transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">React</p>
                            : null
                    }
                </div>
            )
        case 'aws':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiAmazonaws className='hover:text-[#FF9900] transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">AWS</p>
                            : null
                    }
                </div>
            )
        case 'express':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiExpress className='transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">Express</p>
                            : null
                    }
                </div>
            )
        case 'nextjs':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiNextdotjs className='transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">Next JS</p>
                            : null
                    }
                </div>
            )

        case 'tableau':
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiTableau className='hover:text-[#1C4481] transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">Tableau</p>
                            : null
                    }
                </div>
            )
        default:
            return (
                <div className="flex flex-col items-center text-primary">
                    <SiDatabricks className='transition duration-200' size={props.size} />
                    {
                        props.title === true
                            ? <p className="pt-2">Code</p>
                            : null
                    }
                </div>
            )
    }
}

export default SkillIcon