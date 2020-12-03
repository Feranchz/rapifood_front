import Image from "next/image"
import { useState } from "react"
import { OrderDetails } from "./OrderDetails"

const getStatusText = (status) => {
  switch(status){
    case "waiting-payment":
      return "Pagar"
    case "in-delivery":
      return "En camino"
    case "completed":
      return "Recibido"
  }
}

const getStatusStyles = (status) => {
  switch(status){
    case "waiting-payment":
    case "in-delivery":
      return "bg-thyellow"
    case "completed":
      return "bg-green-500"
  }
}

export const OrderItem = ({id, total, address, status, order}) => {
  const [orderDropdown, setOrderDropdown] = useState(false)

  return (
    <div className="w-full shadow-md rounded-lg border py-2 px-4 mb-3">
      <div className="flex justify-between">
        <p className="text-xl font-bold">Pedido #{id}</p>
        <p className="text-xl"><span className="font-bold text-thyellow">$</span> {total}</p>
      </div>
      <div className="flex">
        <div className="h-20 relative w-1/3 rounded-lg overflow-hidden">
          <Image src={order[0].image} layout="fill" className="combo-image" />
        </div>
        <div className="w-2/3">
          <p className="text-sm p-2"><span className="font-bold">Dirección de Envio:</span> {address}</p>
        </div>
      </div>
      <div className="flex pt-2">
        <button className="w-1/2 border-2 border-thyellow rounded-lg mx-2 font-bold" onClick={() => setOrderDropdown(!orderDropdown)}>{orderDropdown ? "Ver menos" : "Ver más"}</button>
        <button className={`w-1/2 mx-2 rounded-lg font-bold ${getStatusStyles(status)}`}>{getStatusText(status)}</button>
      </div>
      {
        orderDropdown ?
        <div>
          <OrderDetails products={order} />
        </div>
        : null
      }
    </div>
  )
}