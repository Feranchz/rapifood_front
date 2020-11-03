import { SimpleButton } from "../../components/Buttons/SimpleButton"
import { FiltersTags } from "../../components/SearchPage/FiltersTags"
import { SearchResults } from "../../components/SearchPage/SearchResults"

const FILTERS_DUMMY = [
  {
    text: "Hamburguesa"
  },
  {
    text: "Desde $ 5.50"
  },
  {
    text: "Hasta $ 15.50"
  }
]

const PRODUCTS_DUMMY = [
  {
    image: "/aaa",
    name: "Calzone",
    restaurant: "Simone's",
    price: 9.95
  },
  {
    image: "/aaa",
    name: "Blue Nutella Croissant",
    restaurant: "Simone's",
    price: 9.95
  },
  {
    image: "/aaa",
    name: "Calzone",
    restaurant: "Simone's",
    price: 9.95
  },
  {
    image: "/aaa",
    name: "Calzone",
    restaurant: "Simone's",
    price: 9.95
  },
  {
    image: "/aaa",
    name: "Calzone",
    restaurant: "Simone's",
    price: 9.95
  },
  {
    image: "/aaa",
    name: "Calzone",
    restaurant: "Simone's",
    price: 9.95
  }
]

const SearchPage = () => {

  return (
    <div className="grig grid-cols-12">
      <div className="col-span-12 lg:hidden px-4">
        <input placeholder="Hamburguesa" />
      </div>
      <div className="col-span-12 lg:hidden px-4">
        <SimpleButton text="Filtros" />
        <SimpleButton text="Ordenar" />
      </div>
      <div className="col-span-12 lg:hidden px-4">
        <FiltersTags filters={FILTERS_DUMMY} />
      </div>
      <div className="col-span-12 px4">
        <SearchResults products={PRODUCTS_DUMMY} />
      </div>
    </div>
  )
}

export default SearchPage