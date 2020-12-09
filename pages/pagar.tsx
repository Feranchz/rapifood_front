import { useEffect, useState, useContext } from "react"
import { CartContext, useCart } from "../components/Contexts/ShoppingCart/context"
import { useUser } from "../components/Contexts/User/context"
import { AuthModal } from "../components/Modals/AuthModal"
import { ItemsList } from "../components/ShoppingCart/ItemsList"
import { useSnack } from "../components/Snacks/context"
import { useRequest } from "../components/Utils/useRequests"
import { DeliveryCard } from "../components/Visuals/DeliveryCard"
import { Step } from "../components/Visuals/Step"
import { useRouter } from "next/router"
import { OrderContext } from "../components/Contexts/Order/context"

const Pay = () => {
  const [actualStep, setActualStep] = useState(1)
  const [authModal, setAuthModal] = useState("")
  const {user} = useUser()
  const [addressErrors, setAddressErrors] = useState({
    name: false,
    address: false,
    apartment: false,
    phonenumber: false
  })

  // Address
  const [addressName, setAddressName] = useState("")
  const [address, setAddress] = useState("")
  const [apartment, setApartment] = useState("")
  const [phonenumber, setPhonenumber] = useState("")

  // Credit Card
  const [cardErrors, setCardErrors] = useState({
    name: false,
    number: false,
    month: false,
    year: false,
    code: false
  })

  const { cart, dispatch } = useCart()

  const { post } = useRequest()
  const [loading, setLoading] = useState(false)
  const { showSnack } = useSnack()
  const router = useRouter()

  const { order, setOrder } = useContext(OrderContext)

  useEffect(() => {
    console.log(user)
    if (user?.name){
      setActualStep(2)
    } else {
      setActualStep(1)
    }
  }, [user]);

  const handleAddress = (e) => {
    e.preventDefault()

    let values = {
      name: e.target.elements.name.value,
      address: e.target.elements.address.value,
      apartment: e.target.elements.apartment.value,
      phonenumber: e.target.elements.phonenumber.value
    }

    let errors = {
      name: false,
      address: false,
      apartment: false,
      phonenumber: false
    }

    let noErrors = true

    if(values.name.length <= 5){
      errors.name = true
      noErrors = false
    }

    if(values.address.length <= 5){
      errors.address = true
      noErrors = false
    }

    if(values.apartment.length <= 5){
      errors.apartment = true
      noErrors = false
    }

    if(!/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/.test(values.phonenumber)){
      errors.phonenumber = true
      noErrors = false
    }

    if (noErrors){
      setAddressErrors(errors)
      setActualStep(3)
    } else {
      setAddressErrors(errors)
    }

  }

  const handlePay = async (e) => {
    e.preventDefault()

    let values = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
      month: e.target.elements.month.value,
      year: e.target.elements.year.value,
      code: e.target.elements.code.value
    }

    let errors = {
      name: false,
      number: false,
      month: false,
      year: false,
      code: false
    }

    let noErrors = true

    if(values.name.length < 4){
      errors.name = true
      noErrors = false
    }

    if(values.number.length != 16){
      errors.number = true
      noErrors = false
    }

    if(values.code.length != 3){
      errors.code = true
      noErrors = false
    }

    if(values.month == 0){
      errors.month = true
      noErrors = false
    }

    if(values.year == 0){
      errors.year = true
      noErrors = false
    }

    if(noErrors){
      setLoading(true)
      setCardErrors(errors)
      let pay = {
        orderID: order,
        cardNumber: values.number,
        cardDate: values.month + "/" + values.year,
        securityCode: values.code,
        cardName: values.name,
        description: "Pago en Rapifood, orden #" + order
      }
      const res = await post("/pay", pay)

      if(res.message == "Ok"){
        showSnack("¡A comer!", "Pago realizado con éxito", "success")
        dispatch({
          type: "RESET"
        })
        router.push("/")
      } else {
        showSnack("Oh no", "Ha ocurrido un error :(", "error")
      }

      setLoading(false)
    } else {
      setCardErrors(errors)
    }
    
  }

  return (
    <div className="bg-gray-100 w-full h-screen">
      <div className="flex">
        <div className="p-2 w-full md:w-1/2 md:px-8">
          {
            loading ? <div className="loading-spinner h-8 w-8 mx-auto mt-12"></div> :
            <div className="border-b ">
              <Step step={1} title="Identificarse" dropdown={actualStep == 1} completed={actualStep > 1}>
                <div className="flex">
                  <button className="button-with-gradient w-1/2 mx-2 rounded-lg text-lg py-1" onClick={() => setAuthModal("login")}>Ingresar</button>
                  <button className="button-with-gradient w-1/2 mx-2 rounded-lg text-lg py-1" onClick={() => setAuthModal("register")}>Registrarse</button>
                  <AuthModal visible={authModal != ""} step={authModal} close={() => setAuthModal("")} />
                </div>
              </Step>
              <Step step={2} title="Dirección" dropdown={actualStep == 2} completed={actualStep > 2}>
                <div>
                  <form onSubmit={handleAddress}>
                    <div className="flex flex-wrap py-2 text-sm">
                      <label className="w-full ml-2">Recibe:</label>
                      <input value={addressName} onChange={e => setAddressName(e.target.value)} type="text" name="name" className={`input-simple h-10 ${addressErrors.name ? "border border-red-300" : ""}`} placeholder="Nombre de la persona..." />
                    </div>
                    <div className="flex flex-wrap py-2 text-sm">
                      <label className="w-full ml-2">Dirección (Avenida, Calle, Edificio, etc):</label>
                      <input value={address} onChange={e => setAddress(e.target.value)} type="text" name="address" className={`input-simple h-10 ${addressErrors.address ? "border border-red-300" : ""}`} placeholder="La calle dónde vives..." />
                    </div>
                    <div className="flex flex-wrap py-2 text-sm">
                      <label className="w-full ml-2">Dirección #2 (Nro. Apto, etc):</label>
                      <input value={apartment} onChange={e => setApartment(e.target.value)} type="text" name="apartment" className={`input-simple h-10 ${addressErrors.apartment ? "border border-red-300" : ""}`} placeholder="Datos para encontrarte..." />
                    </div>
                    <div className="flex flex-wrap py-2 text-sm">
                      <label className="w-full ml-2">Teléfono:</label>
                      <input value={phonenumber} onChange={e => setPhonenumber(e.target.value)} type="text" name="phonenumber" className={`input-simple h-10 ${addressErrors.phonenumber ? "border border-red-300" : ""}`} placeholder="Número de contacto..." />
                    </div>
                    <div className="flex flex-wrap py-2 text-center">
                      <button type="submit" className="button-with-gradient w-full rounded-lg py-1 text-lg">Siguiente</button>
                    </div>
                  </form>
                </div>
              </Step>
              <Step step={3} title="Pago" dropdown={actualStep == 3} completed={false}>
                <div>
                  <form onSubmit={handlePay}>
                    <div className="flex flex-wrap py-2 text-sm">
                      <label className="w-full ml-2">Nombre del Titular:</label>
                      <input name="name" type="text" className={`input-simple h-10 ${cardErrors.name ? "border border-red-300" : ""}`} />
                    </div>
                    <div className="flex flex-wrap py-2 text-sm">
                      <label className="w-full ml-2">Número de la tarjeta:</label>
                      <input name="number" maxLength={16} type="text" className={`input-simple h-10 ${cardErrors.number ? "border border-red-300" : ""}`} />
                    </div>
                    <div className="flex flex-wrap py-2 text-sm">
                      <p className="w-full ml-2">Fecha de caducidad</p>
                      <div className="w-full flex">
                        <select name="month" className={`w-1/2 mx-2 h-10 rounded-lg border px-2 text-lg bg-gray-200 ${cardErrors.month ? "border border-red-300" : ""}`}>
                          <option disabled selected value="0">Mes</option>
                          <option value="01">Enero</option>
                          <option value="02">Febrero</option>
                          <option value="03">Marzo</option>
                          <option value="04">Abril</option>
                          <option value="05">Mayo</option>
                          <option value="06">Junio</option>
                          <option value="07">Julio</option>
                          <option value="08">Agosto</option>
                          <option value="09">Septiembre</option>
                          <option value="10">Octubre</option>
                          <option value="11">Noviembre</option>
                          <option value="12">Diciembre</option>
                        </select>
                        <select name="year" className={`w-1/2 mx-2 h-10 rounded-lg border px-2 text-lg bg-gray-200 ${cardErrors.year ? "border border-red-300" : ""}`}>
                          <option disabled selected value="0">Año</option>
                          <option value="20">2020</option>
                          <option value="21">2021</option>
                          <option value="22">2022</option>
                          <option value="23">2023</option>
                          <option value="24">2024</option>
                          <option value="25">2025</option>
                          <option value="26">2026</option>
                          <option value="27">2027</option>
                          <option value="28">2028</option>
                          <option value="29">2029</option>
                          <option value="30">2030</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-wrap py-2 text-sm">
                      <label className="w-full ml-2">Código de seguridad</label>
                      <input name="code" maxLength={3} type="text" className={`input-simple h-10 ${cardErrors.code ? "border border-red-300" : ""}`} />
                    </div>
                    <div className="flex">
                      <button className="button-with-gradient w-1/2 mx-2 py-1 rounded-lg mt-2" onClick={() => setActualStep(3)}>Regresar</button>
                      <button type="submit" className="button-with-gradient w-1/2 py-1 rounded-lg mt-2 mx-2">Pagar</button>
                    </div>
                  </form>
                </div>
              </Step>
            </div>
          }
        </div>
        <div className="hidden md:block w-1/2 md:px-8">
          <div className="my-4">
            <h2 className="text-3xl font-bold border-bot-separator">Bolsa de Compras</h2>
          </div>
          <div className="flex-grow overflow-y-auto border-bot-separator">
            <ItemsList products={cart.products} />
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
        </div>
      </div>
    </div>
  )
}

export default Pay