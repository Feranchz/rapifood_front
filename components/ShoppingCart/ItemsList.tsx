import Image from "next/image"
import { useCart } from "../Contexts/ShoppingCart/context"
import { ProductItem } from "../SearchPage/ProductItem"
import { NumInput } from "../Visuals/NumInput.tsx"

const IMAGE_BASE = "http://rapifood-backend.tk:8001"

export const ItemsList = ({products}) => {
  const {dispatch} = useCart()

  if(products.length == 0){
    return (
      <div className="h-full pt-12">
        <p className="text-center text-xl">Su bolsa de compra esta vacia.</p>
      </div>
    )
  }

  const removeProduct = (productIndex) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      productIndex
    })
  }

  const plusProduct = (productIndex) => {
    dispatch({
      type: "PLUS_PRODUCT",
      productIndex
    })
  }
  const subProduct = (productIndex) => {
    dispatch({
      type: "SUB_PRODUCT",
      productIndex
    })
  }

  return (
    <div className="h-full">
      {products.map(({image, name, totalExtras, total, quantity}, index) => (
        <div className="flex flex-wrap md:flex-no-wrap py-2">
          <div onClick={() => removeProduct(index)} className="w-6 bg-thyellow h-20 text-center font-bold pt-6 cursor-pointer hover:bg-black hover:text-white">
            X
          </div>
          <div className="w-20 h-20 relative">
            <Image src={IMAGE_BASE + image} layout="fill" className="combo-image" />
          </div>
          <div className="flex-grow px-2">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-sm">Con un total de {totalExtras} extras</p>
          </div>
          <div className="text-center w-full md:w-32 flex flex-wrap">
            <div className="w-1/2 md:w-full">
              <p className="text-lg font-bold"> ${total}</p>
            </div>
            <div className="w-1/2 md:w-full">
              <NumInput value={quantity} plusFunction={() => plusProduct(index)} subFunction={() => subProduct(index)} max={99} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}