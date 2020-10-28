import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export const Navbar = () => {
  const { pathname } = useRouter()
  const [actualPage, setActualPage] = useState("")

  useEffect(() => {
    switch(pathname){
      case "/":
        setActualPage("Rapifoood")
      break;
      case "/pagar":
        setActualPage("Pagar")
      break;
      default:
        setActualPage("")
    }
  }, [pathname])

  return (
    <nav className="fixed lg:static grid grid-cols-12 h-16 w-full bg-white z-50">
      <div className="h-16 col-span-3 py-6 lg:hidden">
        {
          pathname != "/" ?
          <div></div> : null
        }
      </div>
      <div className="h-16 col-span-3 hidden lg:block">
        <img src="/logo.png" className="h-full py-3 inline-block" />
        <h1 className="inline-block text-2xl">Rapifoood</h1>
      </div>
      <div className="h-16 col-span-6 relative lg:hidden">
        <img src="/logo.png" className="opacity-25 h-full mx-auto py-3" />
        <h1 className="text-2xl text-center w-full absolute top-0 pt-3">{actualPage}</h1>
      </div>
      <div className="h-16 col-span-6 hidden lg:block">
        <input placeholder="Buscar comida..." />
      </div>
      <div className="col-span-3 h-16 py-4 content-right">
        <div className="lg:hidden h-full">
          <img src="/icons/bars-solid.svg" className="h-full" />
        </div>
        <div className="hidden lg:block">
          <p>Hola, Usuario!</p>
        </div>
      </div>
    </nav>
  )
}