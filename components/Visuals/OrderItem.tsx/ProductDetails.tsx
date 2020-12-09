import Image from "next/image"
import { useState } from "react"

const IMAGE_BASE = "http://rapifood-backend.tk:8001"

export const ProductDetails = ({product: {image, name, restaurant_name}, total = 0, extras}) => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="my-2">
      <div className="flex" onClick={() => setShowDropdown(!showDropdown)}>
        <div className="relative w-1/6 rounded-lg overflow-hidden">
          <Image src={IMAGE_BASE + image} layout="fill" className="combo-image" />
        </div>
        <div className="w-4/6 px-2">
          <p className="font-bold">{name}</p>
          <p className="text-sm">De {restaurant_name}</p>
        </div>
      </div>
      <div>
        {
          showDropdown ?
          <ul>
            {extras.map(({name, quantity, total}) => 
              <li className="flex justify-between text-xs py-1 border-b">
                <p>{name}</p>
              </li>  
            )}
          </ul>
          : null
        }
      </div>
    </div>
  )
}