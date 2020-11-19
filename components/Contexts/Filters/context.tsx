import { useRouter } from "next/router"
import { createContext, useContext, useReducer } from "react"
import { filtersReducer } from "./reducers"

export const TYPE_OPTIONS = [
  {
    id: 1,
    name: "Hamburguesas",
    slug: "hamburguesas"
  },
  {
    id: 2,
    name: "Pizzas",
    slug: "pizzas"
  },
  {
    id: 3,
    name: "Pollo",
    slug: "pollo"
  },
  {
    id: 4,
    name: "Árabe",
    slug: "arabe"
  },
  {
    id: 5,
    name: "Asiática",
    slug: "asiatica"
  },
  {
    id: 6,
    name: "Saludable",
    slug: "saludable"
  },
  {
    id: 7,
    name: "Mexicana",
    slug: "mexicana"
  },
  {
    id: 8,
    name: "Italiana",
    slug: "italiana"
  },
  {
    id: 9,
    name: "China",
    slug: "china",
  },
  {
    id: 10,
    name: "Postres",
    slug: "postres"
  }
]

export const RESTAURANT_OPTIONS = [
  {
    id: 1,
    name: "McDonald's",
    active: false,
    slug: "mcdonalds"
  },
  {
    id: 2,
    name: "Subway",
    active: false,
    slug: "subway"
  },
  {
    id: 3,
    name: "Wendy's",
    active: false,
    slug: "wendys"
  },
  {
    id: 4,
    name: "Pizza Hut",
    active: false,
    slug: "pizzahut"
  },
  {
    id: 5,
    name: "KFC",
    active: false,
    slug: "kfc"
  },
  {
    id: 6,
    name: "Babel Restaurant",
    active: false,
    slug: "babel"
  },
  {
    id: 7,
    name: "Nobu Sushi",
    active: false,
    slug: "nobu"
  },
  {
    id: 8,
    name: "The Veggies",
    active: false,
    slug: "veggies"
  },
  {
    id: 9,
    name: "Tacos Mi Cuate",
    active: false,
    slug: "micuate"
  },
  {
    id: 10,
    name: "Mamma Bella",
    active: false,
    slug: "mammabella"
  },
  {
    id: 11,
    name: "Chef Woo",
    active: false,
    slug: "chefwoo"
  },
  {
    id: 12,
    name: "Páramo Café",
    active: false,
    slug: "paramo"
  }
]

const initialState = {
  foodType: TYPE_OPTIONS,
  restaurants: RESTAURANT_OPTIONS,
  minPrice: null,
  maxPrice: null
}

const FiltersContext = createContext([
  initialState,
  () => null
])

export const FiltersProvider = ({children}) => {
  const [filters, dispatch] = useReducer(filtersReducer, initialState)

  return (
    <FiltersContext.Provider value={[filters, dispatch]}>
      {children}
    </FiltersContext.Provider>
  )
}

export const useFilters = () => {
  const [filters, dispatch] = useContext(FiltersContext)
  const router = useRouter()

  const updateUrl = () => {
    let url = "/buscar"

    let firstType = true
    filters.foodType.forEach(type => {
      if(type.active){
        if(firstType){
          url += "/" + type.slug
          firstType = false
        } else {
          url += "-y-" + type.slug
        }
      }
    })

    let firstRestaurant = true
    filters.restaurants.forEach(restaurant => {
      if(restaurant.active){
        if(firstRestaurant){
          url += "/" + restaurant.slug
          firstRestaurant = false
        } else {
          url += "-y-" + restaurant.slug
        }
      }
    })

    if(filters.minPrice){
      url += "/desde-" + filters.minPrice
    } 

    if(filters.maxPrice){
      url += "/hasta-" + filters.maxPrice
    }

    router.push(url)
  }

  return {
    filters,
    dispatch,
    updateUrl
  }
}