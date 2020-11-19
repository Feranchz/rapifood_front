import { updateSourceFile } from "typescript"
import { useFilters } from "../../Contexts/Filters/context"
import { FilterDropdown } from "../../Visuals/FilterDropdown"

export const Restaurant = () => {
  const { filters, dispatch } = useFilters()

  const toggleChecked = (restaurantIndex) => {
    if(filters.restaurants[restaurantIndex].active){
      dispatch({
        type: "SUB_RESTAURANT",
        restaurantIndex
      })
    } else {
      dispatch({
        type: "ADD_RESTAURANT",
        restaurantIndex
      })
    }
  }

  return (
    <FilterDropdown title="Restaurant" show>
      {
        filters.restaurants.map(({name, active}, index) => 
          <div onClick={() => toggleChecked(index)} className="flex my-1 justify-between">
            <p className="text-sm">{name}</p>
            <button className={`w-4 h-4 border rounded-sm self-center focus:outline-none hover:bg-inputGray ${active ? "bg-thyellow" : "bg-white"}`}></button>
          </div>
        )
      }
    </FilterDropdown>
  )
}