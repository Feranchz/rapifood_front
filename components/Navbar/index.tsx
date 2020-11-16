import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart } from '../ShoppingCart'
import { AuthModal } from '../Modals/AuthModal'
import { useUser } from '../Utils/useUser'

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showShoppingCart, setShowShoppingCart] = useState(false)
  const [authModal, setAuthModal] = useState(false)
  const { userHook, refetch } = useUser()
  const user = userHook()

  useEffect(() => {
    if(user.activate == 1){
      setIsLoggedIn(true);
    }
  }, [user])

  useEffect(() => {
    refetch()
  }, [])

  const handleUserClick = () => {
    if(isLoggedIn){

    } else {
      setAuthModal(true)
    }
  }

  return (
    <>
      <div className="mx-auto max-w-8xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <div className="logo-container">
              <Link href="/">
                <Image src="/logo.png" layout="fill" />
              </Link>
            </div>
            <nav className="space-x-4 ml-6 hidden lg:block">
              <Link href="/buscar">
                <a>Todos</a>
              </Link>
              <Link href="/favoritos">
                <a>Favoritos</a>
              </Link>
            </nav>
          </div>
          <div className="flex-1 justify-center hidden lg:flex">
            <div className="relative text-sm bg-accents-1 w-full transition-colors duration-150">
              <input className="input-principal" placeholder="Buscar comida..." />
            </div>
          </div>
          <div className="flex flex-1 justify-end space-x-8">
            <nav>
              <ul className="flex space-x-4">
                <li className="relative" style={{width: 25, height: 25}} onClick={() => setShowShoppingCart(true)}>
                  <Image src="/icons/shopping-bag-solid.svg" layout="fill" />
                </li>
                <li className="relative rounded-full overflow-hidden" style={{width: 25, height: 25}} onClick={handleUserClick}>
                  <Image src="/test/lilycollins.jpg" layout="fill" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <ShoppingCart isOpen={showShoppingCart} close={() => setShowShoppingCart(false)} />
      <AuthModal visible={authModal} close={() => setAuthModal(false)} />
      <style jsx>{`
        .logo-container {
          position: relative;
          width: 50px;
          height: 30px;
        }

        .input-principal {
          background-color: #eee;
          padding: 5px 10px 5px 25px;
          width: 100%;
          border-radius: 25px;
          font-size: 1.25em;
        }
      `}</style>
    </>
  )
}