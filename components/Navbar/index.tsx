import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { RightNav } from './RightNav'
import Image from 'next/image'
import { BackButton } from './BackButton'

export const Navbar = () => {
  const { pathname } = useRouter()
  const [actualPage, setActualPage] = useState("")
  const [open, setOpen] = useState(false);

  useEffect(() => {
    switch(pathname){
      case "/":
        setActualPage("Rapifoood")
      break;
      case "/pagar":
        setActualPage("Pagar")
      break;
      case "/buscar/[[...filters]]":
        setActualPage("Búsqueda")
      break;
      default:
        setActualPage("")
    }
  }, [pathname])

  return (
    <nav className="fixed lg:static grid grid-cols-12 h-18 w-full bg-white z-50 py-2 box-content">
      <RightNav open={open} closeMenu={() => setOpen(false)} />
      <div className="h-18 mt-2 col-span-3 mx-auto lg:hidden">
        {
          pathname != "/" ?
          <BackButton /> : null
        }
      </div>
      <div className="h-16 col-span-3 hidden lg:block text-center">
        <img src="/logo.png" className="h-full py-3 inline-block" />
        <h1 className="inline-block text-2xl ml-2">Rapifoood</h1>
      </div>
      <div className="h-16 col-span-6 relative lg:hidden">
        <img src="/logo.png" className="opacity-25 h-full mx-auto py-3" />
        <h1 className="text-2xl text-center w-full absolute top-0 pt-3 font-bold">{actualPage}</h1>
      </div>
      <div className="h-16 col-span-6 hidden lg:block box-content relative">
        <input className="bg-inputGray h-12 my-2 px-6 rounded-lg w-5/6 focus:outline-none" placeholder="Buscar comida..." />
      </div>
      <div className="col-span-3 h-18">
        <div className="lg:hidden w-12 h-12 mx-auto mt-2" onClick={() => setOpen(true)}>
          <Image src="/test/lilycollins.jpg" width={400} height={400} className="rounded-lg shadow-lg" />
        </div>
        <div className="hidden lg:flex text-xl text-right items-center justify-center">
          <div className="w-8 h-8">
            <Image src="/test/lilycollins.jpg" unsized className="rounded-lg shadow-lg" />
          </div>
          <p className="mt-3 mx-4">Hola, <span className="font-bold">Usuario!</span></p>
          <div className="h-4 w-4">
            <img src="/icons/angle-down-solid.svg" />
          </div>
        </div>
      </div>
    </nav>
  )
}