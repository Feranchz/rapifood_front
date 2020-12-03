import { useState } from "react"

export const Step = ({ step, title, dropdown = false, checked = false, children }) => {
  return (
    <div className="py-3">
      <div className={`flex items-center ${checked ? "opacity-50" : ""}`}>
        <div className="w-1/3">
          <p className="text-2xl mx-auto font-bold bg-thyellow py-2 px-5 w-12 h-12 rounded-full">{step}</p>
        </div>
        <div className="w-2/3">
          <p className="text-xl font-bold px-4">{title}</p>
        </div>
      </div>
      {
        dropdown ?
        <div className="px-4 py-2 mt-3">
          {children}
        </div> 
        : null
      }
    </div>
  )
}