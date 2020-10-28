import { CarouselProvider, Slider, Slide } from "pure-react-carousel"


export const SeccionesCarousel = ({secciones}) => {
  return (
    <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={20}
    totalSlides={secciones.length}
    visibleSlides={2}
    >
      <Slider>
        {secciones.map((seccion, i) => (
          <Slide index={i}>
            <div className="bg-yellow-600 h-6 w-40">
              {seccion.name}
            </div>
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  )
}