export const DeliveryCard = ({name, phonenumber, apartment, address}) => {
  return (
    <div className="py-2 px-3 shadow-md border border-thyellow rounded-lg">
      <div className="flex items-center justify-between">
        <p className="text-lg">{name}</p>
        <p className="text-sm text-gray-500 font-bold">{phonenumber}</p>
      </div>
      <div className="my-3 text-sm">
        <p>{apartment}</p>
        <p>{address}</p>
      </div>
    </div>
  )
}