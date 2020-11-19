export const NumInput = ({value = 0, plusFunction, subFunction, max}) => {
  return (
    <div className="shadow-sm rounded-md border overflow-hidden p-1 flex">
      <button className={`bg-thyellow rounded-lg w-10 h-8 font-bold button-with-gradient ${value == 0 ? "opacity-50 cursor-not-allowed" : null}`} onClick={subFunction} disabled={value == 0}>-</button>
      <input className="h-8 text-center focus:outline-none w-12 flex-grow" value={value} readOnly />
      <button className={`bg-thyellow rounded-lg w-10 h-8 font-bold button-with-gradient ${value == max ? "opacity-50 cursor-not-allowed" : null}`} onClick={plusFunction} disabled={value == max}>+</button>
    </div>
  )
}