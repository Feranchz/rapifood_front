import { createContext, Dispatch, useContext, useState, SetStateAction } from "react"
import { ProductModal } from "../../Modals/ProductModal"

const ProductModalContext = createContext((product) => {})

export const ProductModalProvider = ({children}) => {
  const [showModal, setShowModal] = useState(false)
  const [product, setProduct] = useState({})

  const showProduct = (product) => {
    setProduct(product)
    setShowModal(true)
  }

  return (
    <ProductModalContext.Provider value={showProduct}>
      {
        showModal ?
        <ProductModal visible={showModal} close={() => setShowModal(false)} product={product} /> :
        null
      }
      {children}
    </ProductModalContext.Provider>
  )
}

export const useProductModal = () => {
  const setProductModal = useContext(ProductModalContext)

  return {
    setProductModal
  }
}