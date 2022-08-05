interface Props {
    name:String,
}

function Button(props:Props) {
  return (
    <button data-mdb-ripple="true" data-mdb-ripple-color="light" className="bg-primary text-primary font-semibold py-2 px-4 border hover:text-color transition-all duration-300 rounded shadow">
        {props.name}
    </button>
  )
}

export default Button