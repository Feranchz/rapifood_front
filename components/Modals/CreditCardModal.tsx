import { useState } from "react"
import Image from "next/image"

export const CreditCardModal = ({ visible, close }) => {
  const [numberError, setNumberError] = useState("")
  const [nameError, setNameError] = useState("")
  const [expireDateError, setExpireDateError] = useState("")
  const [secretCode, setSecretCode] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = () => {

  }

  if (!visible) return null

  return (
    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
      <div onClick={close} className="fixed top-0 w-full h-full bg-black z-40 opacity-75"></div>
      <div className="fixed py-8 px-16 bg-white h-full md:h-auto w-full max-w-lg mx-auto rounded-lg shadow-lg z-50 top-0 md:top-40">
        <div className="absolute w-8 h-8 cursor-pointer top-20 right-20" onClick={close}>
          <Image src="/icons/times-circle-regular.svg" layout="fill" />
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap"
          >
            <div className="w-full">
              <h2 className="text-2xl text-center font-bold py-2">Crear Tarjeta</h2>
            </div>
            <div className="input-simple-wrapper w-full">
              <input name="number" onChange={() => setNumberError("")} placeholder="Numero de Tarjeta..." className="input-simple" />
            </div>
            <div className="input-simple-wrapper w-full">
              <input name="name" onChange={() => setNameError("")} placeholder="Nombre Titular..." className="input-simple" />
            </div>
            <div className="input-simple-wrapper w-full">
              <select>
                <option disabled selected>Seleccione un banco...</option>
                <option>React Bank</option>
                <option>Swipe Bank</option>
              </select>
            </div>
            <div className="input-simple-wrapper w-full">
              <input type="month" name="expireDate" onChange={() => setError("")} placeholder="Fecha Vencimiento" className="input-simple" />
            </div>
            <div className="input-simple-wrapper w-full">
              <input name="secret" onChange={() => setError("")} placeholder="Codigo Secreto" className="input-simple" />
            </div>
            <div className="w-full">
              <button type="submit" className="button-with-gradient w-full rounded-lg py-2 text-xl">Agregar Tarjeta</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}