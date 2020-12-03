import Link from "next/link"
import { useEffect, useRef } from "react"
import { useUser } from "../Contexts/User/context"
import cookieCutter from "cookie-cutter"

export const Menu = ({closeMenu}) => {
  const wrapper = useRef(null)
  const { user } = useUser()
  
  useEffect(() => {
    function handleClickOutside(event){
      if (wrapper.current && !wrapper.current.contains(event.target)){
        closeMenu()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapper])

  const logout = () => {
    cookieCutter.set("auth_token", "", {
      expires: new Date(0)
    })
    window.location.href = "/"
  }

  return (
    <div ref={wrapper} className="bg-white fixed right-20 py-3 rounded-lg shadow-md border mt-10">
      <nav>
        <Link href="/cuenta">
          <a className="block py-2 px-10 cursor-pointer hover:bg-thyellow">Mi Cuenta</a>
        </Link>
        <Link href="/cuenta/pedidos">
          <a className="block py-2 px-10 cursor-pointer hover:bg-thyellow">Pedidos</a>
        </Link>
        <Link href="/cuenta/tarjetas">
          <a className="block py-2 px-10 cursor-pointer hover:bg-thyellow">Tarjetas</a>
        </Link>
        {
          user.roleID == 1 ?
          <>
            <Link href="/admin/combos">
              <a className="block py-2 px-10 cursor-pointer hover:bg-thyellow">Combos</a>
            </Link>
            <Link href="/admin/extras">
              <a className="block py-2 px-10 cursor-pointer hover:bg-thyellow">Extras</a>
            </Link>
            <Link href="/admin/restaurantes">
              <a className="block py-2 px-10 cursor-pointer hover:bg-thyellow">Restaurantes</a>
            </Link>
            <Link href="/admin/ingredientes">
              <a className="block py-2 px-10 cursor-pointer hover:bg-thyellow">Ingredientes</a>
            </Link>
          </>
          : null
        }
        <a className="block py-2 px-10 cursor-pointer hover:bg-thyellow" onClick={logout}>Logout</a>
      </nav>
    </div>
  )
}