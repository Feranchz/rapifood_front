import Image from 'next/image'

export const ProductItem = ({image, name, restaurant, price}) => {
  return (
    <div className="w-1/2">
      <div className="m-2 bg-red-500">
        <Image src={image} width={100} height={100} />
        <p className="font-bold text-xl">{name}</p>
        <p>{restaurant}</p>
        <p className="font-bold text-xl"><span>$</span> {price}</p>
      </div>
    </div>
  )
}