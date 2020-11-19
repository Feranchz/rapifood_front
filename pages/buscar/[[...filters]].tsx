import { useRouter } from "next/router"
import { useEffect } from "react"
import { SimpleButton } from "../../components/Buttons/SimpleButton"
import { FiltersProvider, RESTAURANT_OPTIONS, TYPE_OPTIONS, useFilters } from "../../components/Contexts/Filters/context"
import { Filters } from "../../components/Filters"
import { SearchResults } from "../../components/SearchPage/SearchResults"

const PRODUCTS_DUMMY = [
  {
    image: "/test/burger.jpg",
    name: "Calzone",
    restaurant: "Simone's",
    price: 9.95,
    id: 1,
    link: "/test",
    discount: 0,
    description: "prueba test desd ad dwad dawmd lorem",
    extras: [
  {
    id: 1,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 2,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 3,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 4,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 1,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  }
]
  },
  {
    image: "/test/italian.jpg",
    name: "Blue Nutella Croissant",
    restaurant: "Simone's",
    price: 9.95,
    id: 1,
    link: "/test",
    discount: 0,
    description: "prueba test desd ad dwad dawmd lorem",
    extras: [
  {
    id: 1,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 2,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 3,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 4,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 1,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  }
]
  },
  {
    image: "/test/sushicombo.jpg",
    name: "Calzone",
    restaurant: "Simone's",
    price: 9.95,
    id: 1,
    link: "/test",
    discount: 0,
    description: "prueba test desd ad dwad dawmd lorem",
    extras: [
  {
    id: 1,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 2,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 3,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 4,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 1,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  }
]
  },
  {
    image: "/test/burger.jpg",
    name: "Calzone",
    restaurant: "Simone's",
    price: 9.95,
    id: 1,
    link: "/test",
    discount: 0,
    description: "prueba test desd ad dwad dawmd lorem",
    extras: [
  {
    id: 1,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 2,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 3,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 4,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 1,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  }
]
  },
  {
    image: "/test/italian.jpg",
    name: "Calzone",
    restaurant: "Simone's",
    price: 9.95,
    id: 1,
    link: "/test",
    discount: 0,
    description: "prueba test desd ad dwad dawmd lorem",
    extras: [
  {
    id: 1,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 2,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 3,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 4,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 1,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  }
]
  },
  {
    image: "/test/sushicombo.jpg",
    name: "Calzone",
    restaurant: "Simone's",
    price: 9.95,
    id: 1,
    link: "/test",
    discount: 0,
    description: "prueba test desd ad dwad dawmd lorem",
    extras: [
  {
    id: 1,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 2,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 3,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 4,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 1,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  }
]
  }
]

const SearchPage = ({ filters: urlFilters }) => {
  const { filters, dispatch } = useFilters()

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
      <div className="w-3/12 hidden md:block">
        <Filters />
      </div>
      <div className="w-full md:w-9/12 px-4">
        <SearchResults products={PRODUCTS_DUMMY} />
      </div>
    </div>
  )
}

export async function getServerSideProps(context){
  let filters = context.query.filters
  if(filters){
    filters = filters.map(filter => {
      return filter.split("-y-")
    })
  }

  return {
    props: {filters: filters ? filters : []}
  }
}

export default SearchPage