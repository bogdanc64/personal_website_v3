import { SiArduino, SiCplusplus, SiCsharp, SiCss3, SiDatabricks, SiDotnet, SiHtml5, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si"

interface Props{
    type:String,
    size:number,
    title:boolean,
}

function SkillIcon(props:Props) {

    switch(props.type)
    {
        case 'React':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiReact className='hover:text-[#61DAFB] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">React</p> 
                            : null
                    } 
                </div>
            )
        case 'Typescript':
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
        case 'HTML':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiHtml5 className='hover:text-[#E34F26] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">HTML</p> 
                            : null
                    } 
                </div>
            )
        case 'CSS':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiCss3 className='hover:text-[#1572B6] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">CSS</p> 
                            : null
                    } 
                </div>
            )
        case 'Node.JS':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiNodedotjs className='hover:text-[#339933] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">Node.JS</p> 
                            : null
                    } 
                </div>
            )
        case 'Next.JS':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiNextdotjs size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">Next.JS</p> 
                            : null
                    } 
                </div>
            )
        case 'C#':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiCsharp className='hover:text-[#239120] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">C#</p> 
                            : null
                    } 
                </div>
            )
        case '.NET':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiDotnet className='hover:text-[#512BD4] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">.NET</p> 
                            : null
                    } 
                </div>
            )
        case 'Arduino':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiArduino className='hover:text-[#00979D] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">Arduino</p> 
                            : null
                    } 
                </div>
            )
        case 'C++':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiCplusplus className='hover:text-[#00599C] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">C++</p> 
                            : null
                    } 
                </div>
            )
        case 'Tailwind':
            return(
                <div className="flex flex-col items-center text-primary">
                    <SiTailwindcss className='hover:text-[#06B6D4] transition duration-200' size={props.size}/>
                    {
                        props.title === true 
                            ? <p className="pt-2">Tailwind CSS</p> 
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