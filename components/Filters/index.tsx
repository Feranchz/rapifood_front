import { FoodType } from "./FoodType"
import { PriceRange } from "./PriceRange"
import { Restaurant } from "./Restaurant"

export const Filters = () => {
  return (
    <div className="md:border md:border-thyellow md:w-64 mx-auto rounded-lg md:shadow-md py-4">
      <FoodType />
      <Restaurant />
      <PriceRange />
    </div>
  )
}