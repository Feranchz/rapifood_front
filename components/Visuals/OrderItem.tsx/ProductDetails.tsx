import Image from "next/image"
import { useState } from "react"

export const ProductDetails = ({image, name, restaurant, quantity, total, extras}) => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="my-2">
      <div className="flex" onClick={() => setShowDropdown(!showDropdown)}>
        <div className="relative w-1/6 rounded-lg overflow-hidden">
          <Image src={image} layout="fill" className="combo-image" />
        </div>
        <div className="w-4/6 px-2">
          <p className="font-bold">{name}</p>
          <p className="text-sm">De {restaurant}</p>
          <p className="text-xs">x{quantity}</p>
        </div>
        <div className="w-1/6 self-center">
          <p><span className="font-bold text-thyellow">$</span> {total}</p>
        </div>
      </div>
      <div>
        {
          showDropdown ?
          <ul>
            {extras.map(({name, quantity, total}) => 
              <li className="flex justify-between text-xs py-1 border-b">
                <p>{name}</p>
                <p>x{quantity}</p>
                <p>$ {total}</p>
              </li>  
            )}
          </ul>
          : null
        }
      </div>
    </div>
  )
}