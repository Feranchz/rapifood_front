import { useEffect, useState } from "react"
import { FiltersProvider, RESTAURANT_OPTIONS, TYPE_OPTIONS, useFilters } from "../../components/Contexts/Filters/context"
import { Filters } from "../../components/Filters"
import { SearchResults } from "../../components/SearchPage/SearchResults"
import { useRequest } from "../../components/Utils/useRequests"

const SearchPage = ({ filters: urlFilters, combos }) => {
  const { filters, dispatch } = useFilters()
  const [showFilter, setShowFilter] = useState(false)

  useEffect(() => {
    if(urlFilters){
      dispatch({
        type: "RESET",
        payload: urlFilters
      })
    }
  }, [])

  return (
    <div className="flex">
      <div className={`w-full md:w-3/12 fixed md:relative md:block z-30 md:z-20 bg-white top-0 h-screen ${showFilter ? "flex flex-col" : "hidden"}`}>
        <div className="p-4 border-b md:hidden">
          <p className="text-xl font-bold">Filtros</p>
        </div>
        <div className="flex-grow overflow-y-auto">
          <Filters />
        </div>
        <div className="p-4 border-t md:hidden">
          <button className="button-with-gradient w-full h-8 rounded-lg" onClick={() => setShowFilter(false)}>Ver +99 resultados</button>
        </div>
      </div>
      <div className="w-full md:w-9/12 px-4">
        <div className="md:hidden flex p-2 border-b z-30">
          <button className="button-with-gradient w-full h-8 rounded-lg" onClick={() => setShowFilter(true)}>Filtros</button>
        </div>
        <SearchResults products={combos} />
      </div>
    </div>
  )
}

export async function getServerSideProps(context){
  let filters = context.query.filters
  let combos = []
  let query = {
    restaurant_id: [],
    type_id: []
  }
  if(filters){
    filters = filters.map(filter => {
      return filter.split("-y-")
    })

    filters.forEach(fil => {
      fil.forEach(slug => {
        if(slug.includes("desde")){
          query.minPrice = slug.split("-")[1]
          return
        } else if (slug.includes("hasta")){
          query.maxPrice = slug.split("-")[1]
          return
        }
    
        for(let i = 0; i < TYPE_OPTIONS.length; i++){
          if(slug == TYPE_OPTIONS[i].slug){
            query.type_id.push(TYPE_OPTIONS[i].id)
            return
          }
        }
    
        for(let i = 0; i < RESTAURANT_OPTIONS.length; i++){
          if(slug == RESTAURANT_OPTIONS[i].slug){
            query.restaurant_id.push(RESTAURANT_OPTIONS[i].id)
            return
          }
        }
      })
    })  
  }
  
  const { post } = useRequest()
  const response = await post("/productFilter", query, "")
  combos = response;
  
  return {
    props: {
      filters: filters ? filters : [],
      combos
    }
  }
}

export default SearchPage