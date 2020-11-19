import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { ViewportProvider } from '../components/Contexts/Breakpoints'
import { CartProvider } from "../components/Contexts/ShoppingCart/context"
import { AuthModal } from '../components/Modals/AuthModal'
import { Navbar } from '../components/Navbar'
import { ShoppingCart } from '../components/ShoppingCart'
import { useUser } from '../components/Utils/useUser'
import { Footer } from "../components/Footer"
import '../styles/tailwind.css'
import { ProductModalProvider } from '../components/Contexts/ProductModal/context'
import { FiltersProvider } from '../components/Contexts/Filters/context'

function MyApp({ Component, pageProps }: AppProps){
  const [showShoppingCart, setShowShoppingCart] = useState(false)
  const [authModal, setAuthModal] = useState(false)
  const { userHook, refetch } = useUser()
  const user = userHook()

  useEffect(() => {
    refetch()
  }, [])

  const handleShoppingCart = () => {
    setShowShoppingCart(true)
  }

  const handleAuthModal = () => {
    if(user?.activate){

    } else {
      setAuthModal(true)
    }
  }

  return (
    <ViewportProvider>
      <FiltersProvider>
        <CartProvider>
          <ProductModalProvider>
            <ShoppingCart isOpen={showShoppingCart} close={() => setShowShoppingCart(false)} />
            <AuthModal visible={authModal} close={() => setAuthModal(false)} />
            <Navbar handleShoppingCart={handleShoppingCart} handleAuthModal={handleAuthModal} />
            <Component {...pageProps} />
            <Footer />
          </ProductModalProvider>
        </CartProvider>
      </FiltersProvider>
    </ViewportProvider>
  )
}

export default MyApp