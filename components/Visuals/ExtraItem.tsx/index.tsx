import { NumInput } from "../NumInput.tsx"

export const ExtraItem = ({ name, price, quantity, max, dispatch, index }) => {
  return (
    <div className="flex my-2">
      <div className="w-2/3">
        <p className="text-md font-bold">{name}</p>
        <p className="text-gray-600 text-sm">Por $ {price} cada uno.</p>
      </div>
      <div className="w-1/3 flex justify-end">
        <NumInput 
          value={quantity}
          plusFunction={() => dispatch({
            type: "PLUS_EXTRA",
            extraIndex: index
          })}
          subFunction={() => dispatch({
            type: "SUB_EXTRA",
            extraIndex: index
          })}
          max={max}
        />
      </div>
    </div>
  )
}