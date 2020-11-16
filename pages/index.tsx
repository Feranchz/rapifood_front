import { CombosCarousel } from "../components/CombosCarousel"
import { Navbar } from "../components/Navbar"
import { ProductsList } from "../components/ProductsList"
import { SeccionesCarousel } from "../components/SeccionesCarousel"

const Home = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/2 h-128 bg-red-900">
          cuadro 1
        </div>
        <div className="w-1/2">
          <div>
            cuadro 2
          </div>
          <div>
            cuadro 3
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;