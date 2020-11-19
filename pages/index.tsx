import { ComboBox } from "../components/HomePage/ComboBox"
import { DestacadoBox } from "../components/HomePage/DestacadosBox"
import { RestaurantSlider } from "../components/HomePage/RestaurantSlider"
import { Navbar } from "../components/Navbar"
import { SeccionesCarousel } from "../components/SeccionesCarousel"

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Product Name #1",
    restaurant: "Restaurant name",
    link: "/test",
    image: "/test/burger.jpg",
    price: 9.99
  },
  {
    id: 2,
    name: "Product Name #2",
    restaurant: "Restaurant name",
    link: "/test",
    image: "/test/italian.jpg",
    price: 9.99
  },
  {
    id: 3,
    name: "Product Name #3",
    restaurant: "Restaurant name",
    link: "/test",
    image: "/test/sushicombo.jpg",
    price: 9.99
  },
  {
    id: 4,
    name: "Product Name #4",
    restaurant: "Restaurant name",
    link: "/test",
    image: "/test/burger.jpg",
    price: 9.99
  },
]

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="md:w-1/2 w-full md:h-128 h-64">
          <ComboBox image="/test/sushicombo.jpg" name="Super Combo Name #1" restaurant="Restaurant Name" price={9.99} />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="h-64 bg-red-800">
            <ComboBox image="/test/burger.jpg" name="Super Combo Name #2" restaurant="Restaurant Name" price={9.99} />
          </div>
          <div className="h-64 bg-red-700">
          <ComboBox image="/test/italian.jpg" name="Super Combo Name #3" restaurant="Restaurant Name" price={9.99} />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-8xl px-6 py-4">
        <RestaurantSlider />
      </div>
      <div className="flex bg-thyellow mx-auto max-w-8xl px-6 flex-wrap">
        <div className="md:w-1/2 w-full p-4">
          <DestacadoBox title="Destacados" items={DUMMY_PRODUCTS} />
        </div>
        <div className="md:w-1/2 w-full p-4">
          <DestacadoBox title="Novedades" items={DUMMY_PRODUCTS} />
        </div>
      </div>
    </>
  )
}

export default Home;