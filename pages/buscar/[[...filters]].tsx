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
    if (urlFilters.foodType){
      urlFilters.foodType.forEach(type => {
        dispatch({
          type: "ADD_TYPE",
          typeIndex: TYPE_OPTIONS.findIndex(e => e.slug == type)
        })
      })
    }

    if (urlFilters.restaurants){
      urlFilters.restaurants.forEach(restaurant => {
        dispatch({
          type: "ADD_RESTAURANT",
          restaurantIndex: RESTAURANT_OPTIONS.findIndex(e => e.slug == restaurant)
        })
      })
    }

    if (urlFilters.minPrice){
      dispatch({
        type: "SET_MIN_PRICE",
        minPrice: urlFilters.minPrice
      })
    }

    if (urlFilters.maxPrice){
      dispatch({
        type: "SET_MAX_PRICE",
        maxPrice: urlFilters.maxPrice
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
  let newFilters = {
    foodType: [],
    restaurants: []
  }
  let filters = context.query.filters
  if(filters){
    filters.forEach(filter => {
       let slugs = filter.split("-y-")
  
       // Food type
       if(slugs.every(slug => TYPE_OPTIONS.some(type => type.slug == slug))){
         newFilters.foodType = slugs
       } else if (slugs.every(slug => RESTAURANT_OPTIONS.some(type => type.slug == slug))){
         newFilters.restaurants = slugs
       } else if (slugs[0].includes("desde")) {
         newFilters.minPrice = slugs[0].split("-")[1]
       } else if (slugs[0].includes("hasta")) {
         newFilters.maxPrice = slugs[0].split("-")[1]
       } else {
  
       }
    })
  }

  return {
    props: {filters: newFilters}
  }
}

export default SearchPage