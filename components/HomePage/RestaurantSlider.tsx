import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { RestaurantItem } from "./RestaurantItem";
import { useFilters } from "../Contexts/Filters/context";
import { Restaurant } from "../Filters/Restaurant";
import Link from "next/link";

export const RestaurantSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 8,
    autoplay: true,
    autoplaySpeed: 3000,
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
  const { filters } = useFilters()

  return (
    <div className="px-4 py-2">
      <Slider {...settings}>
        {
          filters.restaurants.map(({name, link, image}) => 
            <Link href={link}>
              <div className="relative h-32 py-2 px-4 cursor-pointer">
                <RestaurantItem name={name} link={link} image={image} />
              </div>  
            </Link>
          )
        }
      </Slider>
    </div>
  )
}