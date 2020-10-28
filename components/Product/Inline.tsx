import Image from 'next/image'

export const ProductInline = ({ image, name, restaurant, price }) => {
  return (
    <li className="flex my-4">
      <Image src={image} width={80} height={80} />
      <div className="ml-2">
        <p className="font-bold text-xl">{name}</p>
        <p>{restaurant}</p>
      </div>
      <div className="ml-auto font-bold text-2xl mt-2">
        <p><span>$</span> {price}</p>
      </div>
    </li>
  )
}