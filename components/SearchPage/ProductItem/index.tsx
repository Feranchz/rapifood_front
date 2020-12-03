import Image from 'next/image'
import Link from 'next/link'
import { useProductModal } from '../../Contexts/ProductModal/context'

export const EXTRAS = [
  {
    id: 1,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 2,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 3,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 4,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 1,
    name: "Extra #1",
    price: 0.99,
    max: 3,
    quantity: 0
  }
]

const IMAGE_BASE = "http://rapifood-backend.tk:8001"

export const ProductItem = ({id, image_url, name, restaurant, price, extras, link, discount = 0, description}) => {
  const { setProductModal } = useProductModal()

  const addProduct = (e) => {
    e.preventDefault()
    setProductModal({
      id,
      name,
      restaurant,
      image: image_url,
      link,
      price,
      discount,
      description,
      extras: EXTRAS
    })
  }

  return (
    <Link href={link}>
      <div className="m-2 bg-white rounded-lg shadow-md overflow-hidden border cursor-pointer">
        <div className="w-full h-40 relative">
          <Image key={"img" + id} src={IMAGE_BASE + image_url} layout="fill" className="combo-image" />
        </div>
        <div className="p-2">
          <div className="h-28">
            <p className="font-bold text-xl">{name}</p>
            <p>de {restaurant}</p>
            <p className="text-sm">¡Combinalo con hasta {EXTRAS.length} extras!</p>
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