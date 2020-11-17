import Image from "next/image"

export const RestaurantItem = ({name, image, link}) => {
  return (
    <div className="h-full w-full text-center">
      <div className="w-16 h-16 relative rounded-full overflow-hidden shadow-lg mx-auto">
        <Image src={image} layout="fill" />
      </div>
      <h4 className="text-xl">{name}</h4>
    </div>
  )
}