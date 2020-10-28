import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

export const CombosCarousel = ({title, combos}) => {
  return (
    <>
      <h2 className="text-4xl font-bold">{title}</h2>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={combos.length}
        visibleSlides={2}
      >
        <Slider>
          {combos.map((combo, i) => (
            <Slide index={i}>
              <div className="bg-red-900 h-48 w-40">

              </div>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </>
  )
}