import Image from "next/image"

export const DestacadoItem = ({name, restaurant, image, link, price}) => {
  return (
    <div className="md:w-1/2 w-full my-4">
      <div className="md:w-5/6 w-full bg-white rounded-t-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-32">
          <Image src={image} layout="fill" className="combo-image" />
        </div>
        <div className="flex">
          <div className="px-4 py-2 w-9/12">
            <p className="text-xl font-bold">{name}</p>
            <p>de <a>{restaurant}</a></p>
          </div>
          <div className="w-3/12">
            <p className="text-xl font-bold mt-5 text-right mr-2"><span className="text-thyellow">$</span>{price}</p>
          </div>
        </div>
        <div className="flex bg-black h-10 transition-all duration-300 ease-in hover:bg-thyellow hover:shadow-inner py-2">
          <div className="relative text-white h-full w-64 mx-auto">
            <Image src="/icons/plus-solid.svg" layout="fill" className="text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}