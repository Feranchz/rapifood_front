import { ComboBox } from "../components/HomePage/ComboBox"
import { DestacadoBox } from "../components/HomePage/DestacadosBox"
import { RestaurantSlider } from "../components/HomePage/RestaurantSlider"
import { Navbar } from "../components/Navbar"
import { SeccionesCarousel } from "../components/SeccionesCarousel"
import { useRequest } from "../components/Utils/useRequests"
import Cookies from "cookies"

const IMAGE_BASE = "http://rapifood-backend.tk:8001"

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

const Home = ({ superCombos, destacados, news }) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="md:w-1/2 w-full md:h-128 h-64">
          <ComboBox link={superCombos[0]?.link} image={IMAGE_BASE + superCombos[0]?.image_url} name={superCombos[0]?.name} restaurant={superCombos[0]?.restaurant_name} price={superCombos[0]?.price} />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="h-64 bg-red-800">
            <ComboBox link={superCombos[1]?.link} image={IMAGE_BASE + superCombos[1]?.image_url} name={superCombos[1]?.name} restaurant={superCombos[1]?.restaurant_name} price={superCombos[1]?.price} />
          </div>
          <div className="h-64 bg-red-700">
          <ComboBox link={superCombos[2]?.link} image={IMAGE_BASE + superCombos[2]?.image_url} name={superCombos[2]?.name} restaurant={superCombos[2]?.restaurant_name} price={superCombos[2]?.price} />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-8xl px-6 py-4">
        <RestaurantSlider />
      </div>
      <div className="flex bg-thyellow mx-auto max-w-8xl px-6 flex-wrap">
        <div className="md:w-1/2 w-full p-4">
          <DestacadoBox title="Destacados" items={destacados} />
        </div>
        <div className="md:w-1/2 w-full p-4">
          <DestacadoBox title="Novedades" items={news} />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({req, res}){
  const cookies = new Cookies(req, res)

  const { post } = useRequest()
  const superCombos = await post("/productFilter", {
    super_combo: true
  }, "")

  const response = await post("/productFilter", {
    destacado: true
  }, "")



  return {
    props: {
      superCombos,
      destacados: [response[0], response[1], response[2], response[3]],
      news: [response[4], response[5], response[6], response[7]]
    }
  }
}

export default Home;