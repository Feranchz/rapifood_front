import { DestacadoItem } from "./DestacadoItem"

export const DestacadoBox = ({title, items = []}) => {
  return (
    <div>
      <h4 className="text-4xl font-bold">{title}</h4>
      <div className="flex flex-wrap">
        {
          items[0] ?
          <DestacadoItem {...items[0]} />
          : null
        }
        {
          items[1] ?
          <DestacadoItem {...items[1]} />
          : null
        }
        {
          items[2] ?
          <DestacadoItem {...items[2]} />
          : null
        }
        {
          items[3] ?
          <DestacadoItem {...items[3]} />
          : null
        }
        </div>
    </div>
  )
}