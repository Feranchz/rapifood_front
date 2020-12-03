import { useRouter } from "next/router"
import { createContext, useContext, useEffect, useReducer } from "react"
import { filtersReducer } from "./reducers"

export const TYPE_OPTIONS = [
  {
    id: 1,
    name: "Hamburguesas",
    slug: "hamburguesas",
    active: false
  },
  {
    id: 2,
    name: "Pizzas",
    slug: "pizzas",
    active: false
  },
  {
    id: 3,
    name: "Pollo",
    slug: "pollo",
    active: false
  },
  {
    id: 4,
    name: "Árabe",
    slug: "arabe",
    active: false
  },
  {
    id: 5,
    name: "Asiática",
    slug: "asiatica",
    active: false
  },
  {
    id: 6,
    name: "Saludable",
    slug: "saludable",
    active: false
  },
  {
    id: 7,
    name: "Mexicana",
    slug: "mexicana",
    active: false
  },
  {
    id: 8,
    name: "Italiana",
    slug: "italiana",
    active: false
  },
  {
    id: 9,
    name: "China",
    slug: "china",
    active: false
  },
  {
    id: 10,
    name: "Postres",
    slug: "postres",
    active: false
  }
]

export const RESTAURANT_OPTIONS = [
  {
    id: 2,
    name: "McDonald's",
    active: false,
    image: "/restaurants/mcdonalds.jpg",
    link: "/buscar/mcdonalds",
    slug: "mcdonalds"
  },
  {
    id: 3,
    name: "Subway",
    active: false,
    image: "/restaurants/subway.jpg",
    link: "/buscar/subway",
    slug: "subway"
  },
  {
    id: 4,
    name: "Wendy's",
    active: false,
    image: "/restaurants/wendys.jpg",
    link: "/buscar/wendys",
    slug: "wendys"
  },
  {
    id: 5,
    name: "Pizza Hut",
    active: false,
    image: "/restaurants/pizzahut.jpg",
    link: "/buscar/pizzahut",
    slug: "pizzahut"
  },
  {
    id: 6,
    name: "KFC",
    active: false,
    image: "/restaurants/kfc.jpg",
    link: "/buscar/kfc",
    slug: "kfc"
  },
  {
    id: 7,
    name: "Babel Restaurant",
    active: false,
    image: "/restaurants/babel.jpg",
    link: "/buscar/babel",
    slug: "babel"
  },
  {
    id: 8,
    name: "Nobu Sushi",
    active: false,
    image: "/restaurants/nobu.jpg",
    link: "/buscar/nobu",
    slug: "nobu"
  },
  {
    id: 9,
    name: "The Veggies",
    active: false,
    image: "/restaurants/veggies.jpg",
    link: "/buscar/veggies",
    slug: "veggies"
  },
  {
    id: 10,
    name: "Tacos Mi Cuate",
    active: false,
    image: "/restaurants/micuate.jpg",
    link: "/buscar/micuate",
    slug: "micuate"
  },
  {
    id: 11,
    name: "Mamma Bella",
    active: false,
    image: "/restaurants/mammabella.jpg",
    link: "/buscar/mammabella",
    slug: "mammabella"
  },
  {
    id: 12,
    name: "Chef Woo",
    active: false,
    image: "/restaurants/chefwoo.jpg",
    link: "/buscar/chefwoo",
    slug: "chefwoo"
  },
  {
    id: 13,
    name: "Páramo Café",
    active: false,
    image: "/restaurants/paramo.jpg",
    link: "/buscar/paramo",
    slug: "paramo"
  }
]

export const initialState = {
  foodType: TYPE_OPTIONS,
  restaurants: RESTAURANT_OPTIONS,
  minPrice: null,
  maxPrice: null
}

export const reset = (resetState) => {
  return {
    ...resetState
  }
}

export const FiltersContext = createContext([
  initialState,
  () => null
])

export const FiltersProvider = ({children}) => {
  const [filters, dispatch] = useReducer(filtersReducer, initialState, reset)

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

  useEffect(() => {
    if(router.pathname == "/buscar/[[...filters]]"){
      updateUrl()
    }
  }, [filters])

  return (
    <FiltersContext.Provider value={[filters, dispatch]}>
      {children}
    </FiltersContext.Provider>
  )
}

export const useFilters = () => {
  const [filters, dispatch] = useContext(FiltersContext)

  return {
    filters,
    dispatch
  }
}