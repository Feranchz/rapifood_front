import { createContext, useContext, useReducer } from "react"
import { mainReducer } from "./reducers"

const initialState = {
  products: [],
  subTotal: 0,
  fees: 0,
  delivery: 0,
  total: 0
}

export const CartContext = createContext([
  initialState,
  () => null
])

export const CartProvider = ({children}) => {
  const [cart, dispatch] = useReducer(mainReducer, initialState)

  return (
    <CartContext.Provider value={[cart, dispatch]}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const [cart, dispatch] = useContext(CartContext)

  return {
    cart,
    dispatch
  }
}