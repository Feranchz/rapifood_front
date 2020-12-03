import { useUser } from "../../Utils/useUser"

export const UserInfo = () => {
  const { userHook } = useUser()
  const user = userHook()
  
  return (
    <>
      <div className="bg-white shadow-md rounded-lg my-2 border-b px-3 py-2">
        <div className="py-2">
          <p className="text-xl">Nombre:</p>
          <input defaultValue={user.name} className="input-simple" />
        </div>
        <div className="py-2">
          <p className="text-xl">Apellido:</p>
          <input defaultValue={user.lastname} className="input-simple" />
        </div>
        <div className="py-2">
          <p className="text-xl">Correo Electronico:</p>
          <input defaultValue={user.email} className="input-simple" />
        </div>
        <div className="py-2">
          <p className="text-xl">Dirección:</p>
          <input defaultValue={user.address} className="input-simple" />
        </div>
        <div className="py-2">
          <p className="text-xl">Teléfono:</p>
          <input defaultValue={user.phonenumber} className="input-simple" />
        </div>
        <div className="py-2">
          <button className="button-with-gradient text-xl py-2 w-full rounded-lg">Actualizar Usuario</button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg my-2 border-b px-3 py-2">
        <button className="button-with-gradient text-xl py-2 w-full rounded-lg">Restablecer Contraseña</button>
      </div>
    </>
  )
}