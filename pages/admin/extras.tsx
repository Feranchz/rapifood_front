import { useEffect, useState } from "react"
import { useUser } from "../../components/Contexts/User/context"
import { useRequest } from "../../components/Utils/useRequests"

const ExtrasPage = () => {
  const {user} = useUser()
  const { post, get } = useRequest()
  const [extras, setExtras] = useState([])

  const [extraName, setExtraName] = useState("")
  const [extraPrice, setExtraPrice] = useState(0)

  useEffect(() => {
    const fetch = async () => {
      const { status, data } = await get("/extra")
      if(status){
        setExtras(data)
      }
    }

    fetch()
  }, [])

  const createExtra = async () => {
    const response = await post("/extra", {
      name: extraName,
      price: extraPrice
    })
    console.log(response)
  }

  if (user?.roleID !== 1){
    return (
      <div>
        
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex">
        <input type="text" value={extraName} onChange={e => setExtraName(e.target.value)} className="input-simple mx-2 w-64" placeholder="Nombre" />
        <input type="number" value={extraPrice} onChange={e => setExtraPrice(e.target.value)} className="input-simple mx-2 w-32" placeholder="Precio" />
        <button className="button-with-gradient px-4 text-xl rounded-lg" onClick={createExtra}>Crear Extra</button>
      </div>
    </div>
  )
}

export default ExtrasPage