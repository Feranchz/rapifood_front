export const FiltersTags = ({filters}) => {
  return(
    <ul className="flex flex-wrap">
      {filters.map(({text}) => (
        <li className="bg-gray-300 rounded-lg mx-2 px-4 my-1">
          {text}
        </li>
      ))}
    </ul>
  )
}