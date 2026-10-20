interface Props {
  name: String,
  disabled?: boolean,
}

function Button(props: Props) {
  return (
    <button disabled={props.disabled} data-mdb-ripple="true" data-mdb-ripple-color="light" className="bg-primary text-primary font-medium py-2 px-4 border border-line hover:border-accent transition-colors duration-200 rounded shadow disabled:opacity-50">
      {props.name}
    </button>
  )
}

export default Button