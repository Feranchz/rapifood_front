import Image from "next/image"
import { useEffect, useReducer, useState } from "react"
import { productReducer } from "../Contexts/ProductModal/reducers"
import { useCart } from "../Contexts/ShoppingCart/context"
import { AddButton } from "../Visuals/AddButton.tsx"
import { ExtraItem } from "../Visuals/ExtraItem.tsx"
import { NumInput } from "../Visuals/NumInput.tsx"

const IMAGE_BASE = "http://rapifood-backend.tk:8001"

export const ProductModal = ({visible, close, product}) => {
  const [productInfo, dispatch] = useReducer(productReducer, {
    product: product,
    total: product.price
  })
  const [quantity, setQuantity] = useState(1)
  const {dispatch: cartDispatch} = useCart()

  const addProduct = () => {
    cartDispatch({
      type: "ADD_PRODUCT",
      product: {
        ...productInfo.product,
        quantity
      }
    })
    close()
  }

  return (
    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
      <div onClick={close} className="fixed top-0 w-full h-full bg-black z-40 opacity-75"></div>
      <div className=" bg-white h-screen md:h-auto md:max-h-modal w-full md:max-w-4xl md:top-40 md:rounded-lg z-50 fixed py-4 px-8 flex flex-col md:flex-row">
        <div className="absolute w-8 h-8 cursor-pointer top-20 right-20" onClick={close}>
          <Image src="/icons/times-circle-regular.svg" layout="fill" />
        </div>
        <div className="px-4 w-full md:w-1/3">
          <div className="relative w-full h-40">
            <Image src={IMAGE_BASE + productInfo.product.image} layout="fill" />
          </div>
        </div>
        <div className="flex flex-col overflow-y-hidden md:w-2/3">
          <div className="pb-3 border-b">
            <p className="text-3xl font-bold">{productInfo.product.name}</p>
            <p>{productInfo.product.description}</p>
          </div>
          <p className="py-2 border-b font-bold text-xl">¡Selecciona tus extras!</p>
          <div className="py-2 border-b flex-grow overflow-auto">
            {
              productInfo.product.extras.length > 0 ?
                productInfo.product.extras.map((extra, index) => (
                  <ExtraItem dispatch={dispatch} index={index} {...extra} />
                ))
                : null
            }
          </div>
          <div className="flex py-2">
              <div className="w-1/2">
                <NumInput 
                  value={quantity} 
                  plusFunction={() => setQuantity(quantity+1)}
                  subFunction={() => setQuantity(quantity-1)}
                  max={99}
                />
              </div>
              <div className="w-1/2 flex justify-end">
                <AddButton onClick={addProduct} price={productInfo.total*quantity} />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}