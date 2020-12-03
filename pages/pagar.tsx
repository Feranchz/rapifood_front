import { useState } from "react"
import { AuthModal } from "../components/Modals/AuthModal"
import { DeliveryCard } from "../components/Visuals/DeliveryCard"
import { Step } from "../components/Visuals/Step"

const Pay = () => {
  const [authModal, setAuthModal] = useState("")

  return (
    <div className="bg-gray-100 w-full h-screen">
      <div className="p-2">
        <div className="border-b ">
          <Step step={1} title="Identificarse" dropdown={false}>
            <div className="flex">
              <button className="button-with-gradient w-1/2 mx-2 rounded-lg text-lg py-1" onClick={() => setAuthModal("login")}>Ingresar</button>
              <button className="button-with-gradient w-1/2 mx-2 rounded-lg text-lg py-1" onClick={() => setAuthModal("register")}>Registrarse</button>
              <AuthModal visible={authModal != ""} step={authModal} close={() => setAuthModal("")} />
            </div>
          </Step>
          <Step step={2} title="Dirección" dropdown={false}>
            <div className="flex flex-wrap">
              <div className="w-full max-h-12">
                <DeliveryCard 
                  name="Fernando Chávez"
                  phonenumber="04241826910"
                  apartment="2B Piso 2"
                  address="Edf. Ondarreta, Av. Sanz, El Marqués, Caracas"
                />
              </div>
              <div className="w-full py-2">
                <button className="button-with-gradient text-lg w-full py-2 rounded-lg">Nueva Dirección</button>
              </div>
            </div>
          </Step>
          <Step step={3} title="Envío" dropdown={false}>
            <div className="p-2 border rounded-lg">
              <div className="flex items-center">
                <div className="mt-1">
                  <input type="radio" name="delivery" className="w-4 h-4" />
                </div>
                <div className="font-bold ml-4">Envío estándar</div>
              </div>
              <div className="text-sm"><span className="font-bold">¡GRATIS!</span> Los envíos serán enviados según la disposición de cada restaurante y la cantidad de pedidos que existan antes del suyo.</div>
            </div>
            <div className="p-2 border rounded-lg">
              <div className="flex items-center">
                <div className="mt-1">
                  <input type="radio" name="delivery" className="w-4 h-4" />
                </div>
                <div className="font-bold ml-4">Envío express</div>
              </div>
              <div className="text-sm"><span className="font-bold">¡Por $2.99!</span> Asegurese de que recibira su envío en menos de 30 minutos. (Ciertas condiciones aplican)</div>
            </div>
          </Step>
          <Step step={4} title="Pago" dropdown={true}>
            paga!
          </Step>
        </div>
      </div>
    </div>
  )
}

export default Pay