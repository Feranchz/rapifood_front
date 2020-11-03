import { ItemDropdown } from "./ItemDropdown"
import Image from 'next/image'

export const RightNav = ({open, closeMenu}) => {
  return (
    <>
      {
        open ?
        <div className="bg-black absolute h-screen w-screen opacity-50" onClick={closeMenu} /> :
        null
      }

      <ul className="bg-gray-900 px-6 fixed top-0 right-0 h-screen w-56 pt-8 text-white burger-menu z-10">
        <div className="w-full mx-auto">
          <Image src="/test/lilycollins.jpg" width={1000} height={1000} quality={100} className="rounded-lg" />
        </div>
        <ItemDropdown text="Usuario">
          <ul>
            <li>Perfil</li>
            <li>Favoritos</li>
            <li>Cerrar Sesión</li>
          </ul>
        </ItemDropdown>
        <li className="text-xl my-2 py-2">Notificaciones</li>
      </ul>
      <style jsx>{`
        .burger-menu {
          transform: ${open ? "translateX(0)" : "translateX(100%)"};
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </>
  )
}