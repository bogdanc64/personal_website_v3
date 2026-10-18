interface TitleProps {
  value: string
  level?: 1 | 2
  id?: string
}

function Title({ value, level = 1, id }: TitleProps) {
  if (level === 2) {
    return <h2 id={id} className="section-head">{value}</h2>
  }

  return <h1 id={id} className="page-title">{value}</h1>
}

export default Title
