import { SiTypescript, SiAngular, SiDotnet, SiDatabricks, SiVuedotjs, SiGo, SiJest, SiNestjs } from "react-icons/si"

interface Props{
    type: string,
    size: number,
    title: boolean,
}

function SkillIcon(props:Props) {

    switch(props.type)
    {
        case 'angular':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiAngular className='hover:text-[#b52e31] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">Angular</p> 
                            : null
                    } 
                </div>
            )
        case 'nestjs':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiNestjs className='hover:text-[#EA2856] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">NestJS</p> 
                            : null
                    } 
                </div>
            )
        case 'typescript':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiTypescript className='hover:text-[#3178C6] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">Typescript</p> 
                            : null
                    } 
                </div>
            )
        case 'dotnet':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiDotnet className='hover:text-[#783bd2] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">.NET</p> 
                            : null
                    } 
                </div>
            )
        case 'vue':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiVuedotjs className='hover:text-[#42b883] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">Vue</p> 
                            : null
                    } 
                </div>
            )
        case 'go':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiGo className='hover:text-[#027D9C] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">Golang</p> 
                            : null
                    } 
                </div>
            )
        case 'jest':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiJest className='hover:text-[#16C213] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">Jest</p> 
                            : null
                    } 
                </div>
            )
        default:
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiDatabricks className='transition duration-200' size={props.size}/>
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