import { useFilters } from "../../Contexts/Filters/context"
import { FilterDropdown } from "../../Visuals/FilterDropdown"

export const FoodType = () => {
  const {filters, dispatch} = useFilters()

  const toggleChecked = (typeIndex) => {
    if(filters.foodType[typeIndex].active){
      dispatch({
        type: "SUB_TYPE",
        typeIndex
      })
    } else {
      dispatch({
        type: "ADD_TYPE",
        typeIndex
      })
    }
  }

  return (
    <FilterDropdown title="Tipo de Comida" show>
      {
        filters.foodType.map(({name, active}, index) => 
          <div onClick={() => toggleChecked(index)} className="flex my-1 justify-between">
            <p className="text-sm">{name}</p>
            <button className={`w-4 h-4 border rounded-sm self-center focus:outline-none hover:bg-inputGray ${active ? "bg-thyellow" : "bg-white"}`}></button>
          </div>
        )
      }
    </FilterDropdown>
  )
}