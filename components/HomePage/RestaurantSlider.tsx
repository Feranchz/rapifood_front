import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { RestaurantItem } from "./RestaurantItem";

export const RestaurantSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 12,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8
        }
      }
    ]
  }

  return (
    <div className="px-4 py-2">
      <Slider {...settings}>
        <div className="relative h-32 py-2 px-4">
          <RestaurantItem name="Restaurant Name" link="/test" image="/test/starbucks.jpg" />
        </div>
        <div className="relative h-32 py-2 px-4">
          <RestaurantItem name="Restaurant Other" link="/test" image="/test/subway.jpg" />
        </div>
        <div className="relative h-32 py-2 px-4">
          <RestaurantItem name="Restaurant Name" link="/test" image="/test/starbucks.jpg" />
        </div>
        <div className="relative h-32 py-2 px-4">
          <RestaurantItem name="Restaurant Other" link="/test" image="/test/subway.jpg" />
        </div>
        <div className="relative h-32 py-2 px-4">
          <RestaurantItem name="Restaurant Name" link="/test" image="/test/starbucks.jpg" />
        </div>
        <div className="relative h-32 py-2 px-4">
          <RestaurantItem name="Restaurant Other" link="/test" image="/test/subway.jpg" />
        </div>
        <div className="relative h-32 py-2 px-4">
          <RestaurantItem name="Restaurant Name" link="/test" image="/test/starbucks.jpg" />
        </div>
        <div className="relative h-32 py-2 px-4">
          <RestaurantItem name="Restaurant Other" link="/test" image="/test/subway.jpg" />
        </div>
        <div className="relative h-32 py-2 px-4">
          <RestaurantItem name="Restaurant Name" link="/test" image="/test/starbucks.jpg" />
        </div>
        <div className="relative h-32 py-2 px-4">
          <RestaurantItem name="Restaurant Other" link="/test" image="/test/subway.jpg" />
        </div>
        <div className="relative h-32 py-2 px-4">
          <RestaurantItem name="Restaurant Name" link="/test" image="/test/starbucks.jpg" />
        </div>
        <div className="relative h-32 py-2 px-4">
          <RestaurantItem name="Restaurant Other" link="/test" image="/test/subway.jpg" />
        </div>
      </Slider>
    </div>
  )
}