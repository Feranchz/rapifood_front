export const CreditCard = ({lastNumbers, name, bank}) => {
  return (
    <div className="bg-white shadow-md rounded-lg border my-2 py-2 px-3">
      <div className="flex justify-between">
        <p className="font-bold text-xl">{bank}</p>
        <p>{name}</p>
      </div>
      <p className="my-4 text-center">**** **** **** {lastNumbers}</p>
      <div className="flex">
        <button className="button-with-gradient w-1/2 mx-2 rounded-lg">Favorito</button>
        <button className="w-1/2 mx-2 rounded-lg bg-red-600">Eliminar</button>
      </div>
    </div>
  )
}