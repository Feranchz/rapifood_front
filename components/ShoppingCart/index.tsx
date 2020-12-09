import Image from "next/image"
import { useCart } from "../Contexts/ShoppingCart/context"
import { useShoppingCart } from "../Utils/useShoppingCart"
import { ItemsList } from "./ItemsList"
import { useRouter } from "next/router"
import { useRequest } from "../Utils/useRequests"
import { useContext } from "react"
import { OrderContext } from "../Contexts/Order/context"

export const ShoppingCart = ({ isOpen, close }) => {
  const { cart, dispatch } = useCart()
  const { post } = useRequest()
  const router = useRouter()
  const { setOrder } = useContext(OrderContext)

  const createOrder = async () => {
    let products = [];

    cart.products.forEach(product => {
      let newProduct = {
        id: product.id,
        extras: []
      }

      product.extras.forEach(extra => {
        if(extra.quantity > 0){
          newProduct.extras.push({
            id: extra.id,
            quantity: extra.quantity
          })
        }
      })

      for(let i = 0; i < product.quantity; i++){
        products.push(newProduct);
      }
    })

    const res = await post("/order", {
      paymentID: 0,
      products
    })

    if(res.status){
      setOrder(res.data.orderID)
      close()
      router.push("/pagar")
    }

  }

  return (
    <>
      {
        isOpen ?
        <div onClick={close} className="fixed top-0 w-full h-full bg-black z-40 opacity-75"></div> :
        null
      }
      <aside className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} transform top-0 right-0 md:w-2/5 w-full bg-white fixed h-screen overflow-auto ease-in-out transition-all duration-300 z-50`}>
        <div className="mx-auto px-6 flex flex-col h-full">
          <div className="flex justify-between">
            <div onClick={close} className='w-8 h-8 relative mt-2'>
              <Image src="/icons/times-circle-regular.svg" layout="fill" />
            </div>
            <div className="relative w-8 h-8 rounded-full overflow-hidden mt-2">
              <Image src="/test/lilycollins.jpg" layout="fill" />
            </div>
          </div>
          <div className="my-4">
            <h2 className="text-3xl font-bold border-bot-separator">Bolsa de Compras</h2>
          </div>
          <div className="flex-grow overflow-y-auto border-bot-separator">
            {
              <ItemsList products={cart.products} />
            }
          </div>
          <div className="border-bot-separator py-2">
            <div className="flex justify-between my-1">
              <p>Subtotal</p>
              <p>{cart.subTotal} U$S</p>
            </div>
            <div className="flex justify-between my-1">
              <p>Impuestos</p>
              <p>Se calculan al comprar</p>
            </div>
            <div className="flex justify-between my-1">
              <p>Envío estimado</p>
              <p>FREE</p>
            </div>
          </div>
          <div className="border-bot-separator py-2 flex justify-between">
            <p className="text-xl">Total</p>
            <p className="text-xl font-bold">{cart.total} U$S</p>
          </div>
          <div className="text">
            <button className="yellow-button my-2 w-full" onClick={createOrder}>Crear Orden</button>
          </div>
        </div>
      </aside>
    </>
  )
}