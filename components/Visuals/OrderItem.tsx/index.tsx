import Image from "next/image"
import { useState } from "react"
import { OrderDetails } from "./OrderDetails"

const getStatusText = (status) => {
  switch(status){
    case "In process":
      return "Pagar"
    case "Completed":
      return "Recibido"
  }
}

const getStatusStyles = (status) => {
  switch(status){
    case "In process":
    case "In process":
      return "bg-thyellow"
    case "Completed":
      return "bg-green-500"
  }
}

const IMAGE_BASE = "http://rapifood-backend.tk:8001"

export const OrderItem = ({orderID, amount, address = "Av Sanz", orderState, details}) => {
  const [orderDropdown, setOrderDropdown] = useState(false)

  return (
    <div className="w-full shadow-md rounded-lg border py-2 px-4 mb-3">
      <div className="flex justify-between">
        <p className="text-xl font-bold">Pedido #{orderID}</p>
        <p className="text-xl"><span className="font-bold text-thyellow">$</span> {Math.round(amount*100)/100}</p>
      </div>
      <div className="flex">
        <div className="h-20 relative w-1/3 rounded-lg overflow-hidden">
          <Image src={IMAGE_BASE + details[0].product.image} layout="fill" className="combo-image" />
        </div>
        <div className="w-2/3">
          <p className="text-sm p-2"><span className="font-bold">Dirección de Envio:</span> {address}</p>
        </div>
      </div>
      <div className="flex pt-2">
        <button className="w-1/2 border-2 border-thyellow rounded-lg mx-2 font-bold" onClick={() => setOrderDropdown(!orderDropdown)}>{orderDropdown ? "Ver menos" : "Ver más"}</button>
        <button className={`w-1/2 mx-2 rounded-lg font-bold ${getStatusStyles(orderState)}`}>{getStatusText(orderState)}</button>
      </div>
      {
        orderDropdown ?
        <div>
          <OrderDetails products={details} />
        </div>
        : null
      }
    </div>
  )
}