import Image from "next/image"
import { useReducer, useState } from "react"
import { productReducer } from "../../../components/Contexts/ProductModal/reducers"

const ProductPage = (product) => {
  const [productInfo, setProductInfo] = useReducer(productReducer, {
    product,
    total: product.price
  })
  const [quantity, setQuantity] = useState(1)

  return (
    <div>
      <div className="w-full h-64 bg-red-500 relative">
        <Image src={productInfo.product.image} layout="fill" />
      </div>
      <div className="p-4">
        <div>
          <h1 className="font-bold text-2xl">{productInfo.product.name}</h1>
        </div>
          
      </div>
    </div>
  )
}

export async function getServerSideProps(context){
  return {
    props: {
      image: "/test/italian.jpg",
      name: "Blue Nutella Croissant",
      restaurant: "Simone's",
      price: 9.95,
      id: 1,
      link: "/test",
      discount: 0,
      description: "prueba test desd ad dwad dawmd lorem",
      extras: [
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
    }
  }
}

export default ProductPage