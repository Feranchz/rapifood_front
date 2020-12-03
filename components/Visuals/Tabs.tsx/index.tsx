export const Tabs = ({options, active, changeTab}) => {
  return (
    <ul className="text-center mt-4">
      {
        options.map(({key, name}) => 
          <li 
            className={`inline-block cursor-pointer px-4 ${active == key ? "border-thyellow border-b-4" : ""}`}
            onClick={() => changeTab(key)}
          >{name}</li>
        )
      }
    </ul>
  )
}