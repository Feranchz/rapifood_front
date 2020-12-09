import Image from "next/image"
import { useProductModal } from "../Contexts/ProductModal/context"
import { useCart } from "../Contexts/ShoppingCart/context"
import Link from "next/link"

const DUMMY_EXTRAS = [
  {
    id: 1,
    name: "Refresco Coca Cola 2LT",
    price: 1,
    max: 3,
    quantity: 0
  },
  {
    id: 2,
    name: "Refresco Pepsi 2LT",
    price: 1,
    max: 3,
    quantity: 0
  },
  {
    id: 3,
    name: "Papitas",
    price: 1.5,
    max: 3,
    quantity: 0
  },
  {
    id: 4,
    name: "Salsa Especial",
    price: 2,
    max: 3,
    quantity: 0
  },
  {
    id: 1,
    name: "Salsa Picante",
    price: 3,
    max: 3,
    quantity: 0
  }
]

const DUMMY_EXTRAS2 = [
  {
    id: 1,
    name: "Extra #2",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 2,
    name: "Extra #2",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 3,
    name: "Extra #2",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 4,
    name: "Extra #2",
    price: 0.99,
    max: 3,
    quantity: 0
  },
  {
    id: 1,
    name: "Extra #2",
    price: 0.99,
    max: 3,
    quantity: 0
  }
]

const IMAGE_BASE = "http://rapifood-backend.tk:8001"

export const DestacadoItem = ({id, name, restaurant_name, image_url, link, price, discount = 0, description = "prueba prueba prueba aaa adwad dwad d prueba"}) => {
  const { setProductModal } = useProductModal()

  const addProduct = (e) => {
    e.preventDefault()
    setProductModal({
      id,
      name,
      restaurant_name,
      image: image_url,
      link,
      price,
      discount,
      description,
      extras: id > 2 ? DUMMY_EXTRAS : DUMMY_EXTRAS2
    })
  }

  return (
    <Link href={link}>
      <div className="md:w-1/2 w-full my-4 cursor-pointer">
        <div className="md:w-5/6 w-full bg-white rounded-t-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-32">
            <Image src={IMAGE_BASE + image_url} layout="fill" className="combo-image" />
          </div>
          <div className="flex h-24">
            <div className="px-4 py-2 w-9/12">
              <p className="text-xl font-bold">{name}</p>
              <p>de <a>{restaurant_name}</a></p>
            </div>
            <div className="w-3/12">
              <p className="text-xl font-bold mt-5 text-right mr-2"><span className="text-thyellow">$</span>{price}</p>
            </div>
          </div>
          <div className="flex bg-black h-10 transition-all duration-300 ease-in hover:bg-thyellow hover:shadow-inner py-2" onClick={addProduct}>
            <div className="relative text-white h-full w-64 mx-auto">
              <Image src="/icons/plus-solid.svg" layout="fill" className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}