import { ComboBox } from "../components/HomePage/ComboBox"
import { RestaurantSlider } from "../components/HomePage/RestaurantSlider"
import { Navbar } from "../components/Navbar"
import { SeccionesCarousel } from "../components/SeccionesCarousel"

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
      <div className="mx-auto max-w-8xl px-6">
        <RestaurantSlider />
      </div>
    </>
  )
}

export default Home;