import { createContext, useContext, useState } from "react";

const SnackContext = createContext(null)

export const SnackProvider = ({children}) => {
  const [snack, setSnack] = useState(false)
  const [message, setMessage] = useState("Usuario creado correctamente")
  const [pre, setPre] = useState("Bienvenido")
  const [color, setColor] = useState("")

  const showSnack = (pre, message, type) => {
    setMessage(message)
    setPre(pre)

    switch (type) {
      case "success":
        setColor("green")
      break
      case "error":
        setColor("red")
      break
    }

    setSnack(true)

    setTimeout(() => {
      setSnack(false)
    }, 2000)
  }

  return (
    <SnackContext.Provider value={showSnack}>
      <div className={`z-50 w-full transform fixed bottom-0 left-0 ${snack ? "translate-x-0" : "translate-x-full"} ease-in-out transition-all duration-300`}>
        <div className={`mb-0 ml-0 md:mb-4 md:ml-4 p-2 bg-${color}-800 items-center text-${color}-100 leading-none lg:rounded-full flex lg:inline-flex`} role="alert">
          {
            pre ?
            <span className={`flex rounded-full bg-${color}-500 uppercase px-2 py-1 text-xs font-bold mr-3`}>{pre}</span>
            : null
          }
          <span className="font-semibold mr-2 text-left flex-auto">{message}</span>
        </div>
      </div>
      {children}
    </SnackContext.Provider>
  )
}

export const useSnack = () => {
  const showSnack = useContext(SnackContext)

  return {
    showSnack
  }
}