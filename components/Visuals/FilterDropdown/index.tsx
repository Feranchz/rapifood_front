import Image from "next/image"
import { useState } from "react"

export const FilterDropdown = ({title, children, show = false}) => {
  const [showDropdown, setShowDropdown] = useState(show)

  return (
    <div className="px-3 py-2">
      <div className="flex cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
        <h4 className="text-lg">{title}</h4>
        <div className={`w-5 h-5 relative mt-1 ml-2 transition-all duration-500 transform ${showDropdown ? "rotate-180" : "rotate-0"}`}>
          <Image src="/icons/angle-down-solid.svg" layout="fill" />
        </div>
      </div>
      <div className={`${showDropdown ? 'h-auto' : 'h-0'} transform overflow-y-hidden transition-all duration-500 ease-in pl-2`}>
        {children}
      </div>
    </div>
  )
}