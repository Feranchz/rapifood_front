import Image from 'next/image'
import Link from 'next/link'
import { useProductModal } from '../../Contexts/ProductModal/context'

export const ProductItem = ({id, image, name, restaurant, price, extras, link, discount = 0, description}) => {
  const { setProductModal } = useProductModal()

  const addProduct = () => {
    setProductModal({
      id,
      name,
      restaurant,
      image,
      link,
      price,
      discount,
      description,
      extras
    })
  }

  return (
    <Link href={link}>
      <div className="m-2 bg-white rounded-lg shadow-md overflow-hidden border">
        <div className="w-full h-40 relative">
          <Image src={image} layout="fill" className="combo-image" />
        </div>
        <div className="p-2">
          <div className="h-24">
            <p className="font-bold text-xl">{name}</p>
            <p>de {restaurant}</p>
            <p className="text-sm">¡Combinalo con hasta {extras.length} extras!</p>
          </div>
          <div>
            <button className="button-with-gradient w-full rounded-lg py-1" onClick={addProduct}>
              <p className="">Agregar por <span className="font-bold">${price}</span></p>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}