import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Image from "next/image"

const IMAGE_BASE = "http://rapifood-backend.tk:8001"

export const ProductList = ({products}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
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
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      }
    ]
  }

  return (
    <Slider {...settings}>
      {
        products.map(({id, name, price, image_url}) => 
          <div key={`product-${id}`} className="p-2">
            <div className="relative cursor-pointer rounded-lg shadow-md border overflow-hidden">
              <div className="relative h-32">
                <Image src={IMAGE_BASE + image_url} layout="fill" className="combo-image" />
              </div>
              <div className="p-2 flex flex-col h-28 justify-between">
                <h3 className="text-md font-bold w-full">{name}</h3>
                <div className="mt-4 bottom-0 w-full">
                  <div className="button-with-gradient text-center rounded-lg">$ {price}</div>
                </div>
              </div>
            </div>  
          </div>
        )
      }
    </Slider>
  )
}