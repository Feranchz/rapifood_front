import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { ViewportProvider } from '../components/Contexts/Breakpoints'
import { AuthModal } from '../components/Modals/AuthModal'
import { Navbar } from '../components/Navbar'
import { ShoppingCart } from '../components/ShoppingCart'
import { useUser } from '../components/Utils/useUser'
import { Footer } from "../components/Footer"
import '../styles/tailwind.css'

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
      <ShoppingCart isOpen={showShoppingCart} close={() => setShowShoppingCart(false)} />
      <AuthModal visible={authModal} close={() => setAuthModal(false)} />
      <Navbar handleShoppingCart={handleShoppingCart} handleAuthModal={handleAuthModal} />
      <Component {...pageProps} />
      <Footer />
    </ViewportProvider>
  )
}

export default MyApp