import { CombosCarousel } from "../components/CombosCarousel"
import { ProductsList } from "../components/ProductsList"
import { SeccionesCarousel } from "../components/SeccionesCarousel"

const PRODUCTS_DUMMY = [
  {
    image: "aaa",
    url: "/producto",
    price: 9.95
  },
  {
    image: "aaa",
    url: "/producto",
    price: 9.95
  },
  {
    image: "aaa",
    url: "/producto",
    price: 9.95
  }
]

const SECCIONES_DUMMY = [
  {
    name: "Sushi",
    url: "/x",
    icon: "a"
  },
  {
    name: "Sushi",
    url: "/x",
    icon: "a"
  },
  {
    name: "Sushi",
    url: "/x",
    icon: "a"
  }
]

const PRODUCTS_LIST_DUMMY = [
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

const Home = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="relative px-4 col-span-12 lg:hidden">
        <input placeholder="Buscar comida..." className="w-full" />
        <button className="bg-yellow-800 absolute right-0 top-0">filtros</button>
      </div>
      <div className="col-span-12 lg:col-span-2 px-4 pr-0">
        <SeccionesCarousel secciones={SECCIONES_DUMMY} />
      </div>
      <div className="grid grid-cols-12 col-span-12 lg:col-span-10">
        <div className="col-span-12 lg:col-span-8 px-4 pr-0">
          <CombosCarousel title="Super Combos" combos={PRODUCTS_DUMMY} />
        </div>
        <div className="col-span-12 lg:hidden px-4 pr-0">
          <SeccionesCarousel secciones={SECCIONES_DUMMY} /> 
        </div>
        <div className="col-span-12 lg:col-span-4 px-4">
          <ProductsList title="Hot" products={PRODUCTS_LIST_DUMMY} />
        </div>
        <div className="col-span-12 lg:col-span-12 px-4">
          <ProductsList title="Lo más nuevo" products={PRODUCTS_LIST_DUMMY} />
        </div>
      </div>
    </div>
  )
}

export default Home;