import Image from "next/image"
import { useFilters } from "../../Contexts/Filters/context"
import { FilterDropdown } from "../../Visuals/FilterDropdown"

export const PriceRange = () => {
  const { filters, dispatch } = useFilters()

  return (
    <FilterDropdown title="Rango de Precios" show>
      <div className="flex">
        <div className="w-5/12 px-2">
          <input 
            type="number" 
            className="px-2 text-right focus:outline-none w-full bg-inputGray rounded-lg h-8" 
            value={filters.minPrice}
            onChange={(e) => {
              dispatch({
                type: "SET_MIN_PRICE",
                minPrice: e.target.value
              })
            }}
          />
        </div>
        <div className="w-5/12 px-2">
          <input 
            type="number" 
            className="px-2 text-right focus:outline-none w-full bg-inputGray rounded-lg h-8" 
            value={filters.maxPrice}
            onChange={(e) => {
              dispatch({
                type: "SET_MAX_PRICE",
                maxPrice: e.target.value
              })
            }}
          />
        </div>
        <div className="w-2/12">
          <button className="button-with-gradient relative w-full h-8 rounded-lg p-2">
            <div className="relative w-full h-full">
              <Image src="/icons/check-solid.svg" layout="fill"/>
            </div>
          </button>
        </div>
      </div>
    </FilterDropdown>
  )
}