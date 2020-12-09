import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AuthModal } from '../Modals/AuthModal'
import { Menu } from './Menu'
import { useUser } from '../Contexts/User/context'
import { CartContext } from "../Contexts/ShoppingCart/context"

export const Navbar = ({handleShoppingCart, handleAuthModal}) => {
  const { user, setUser, refetch } = useUser()
  const [menu, setMenu] = useState(false)
  const [cart] = useContext(CartContext) 

  const handleAuth = () => {
    if (user?.name){
      setMenu(!menu)
    } else {
      handleAuthModal()
    }
  }

  return (
    <div className="sticky top-0 z-30 bg-white">
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
            </nav>
          </div>
          <div className="flex-1 justify-center hidden lg:flex">
            <div className="relative text-sm bg-accents-1 w-full transition-colors duration-150">
              
            </div>
          </div>
          <div className="flex flex-1 justify-end space-x-8">
            <nav>
              <ul className="flex space-x-4">
                <li className="relative" style={{width: 25, height: 25}} onClick={handleShoppingCart}>
                  <Image src="/icons/shopping-bag-solid.svg" layout="fill" />
                  {
                    cart.products.length > 0 ?
                    <div className="bg-red-600 absolute w-4 h-4 rounded-full bottom-0 left-0 text-xs text-center" style={{marginBottom: -8, marginLeft: -8}}>
                      {cart.products.length}
                    </div>
                    : null
                  }
                </li>
                <li className="relative rounded-full overflow-hidden" style={{width: 25, height: 25}}>
                  <div onClick={handleAuth}>
                    <Image src="/gradient.jpg" layout="fill" />
                  </div>
                  {
                    menu ? 
                    <Menu closeMenu={() => setMenu(false)} />
                    : null
                  }
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
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
    </div>
  )
}