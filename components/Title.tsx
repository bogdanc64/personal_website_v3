interface TitleProps{
    value : string;
}

function Title(props:TitleProps) {
  return (
    <div className="flex items-center justify-center">
        <div className="w-16 md:w-32 h-px bg-line"></div> 
        <h2 className="flex-shrink px-4">{props.value}</h2>
        <div className="w-16 md:w-32 h-px bg-line"></div>
    </div>
  )
}

export default Title