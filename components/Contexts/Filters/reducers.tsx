export const filtersReducer = (state, action) => {
  let newFilters = {
    ...state
  }

  switch(action.type){
    case "ADD_TYPE":
      // typeIndex
      newFilters.foodType[action.typeIndex].active = true
    break;
    case "SUB_TYPE":
      // typeIndex
      newFilters.foodType[action.typeIndex].active = false
    break;
    case "ADD_RESTAURANT":
      // restaurantIndex
      newFilters.restaurants[action.restaurantIndex].active = true
    break;
    case "SUB_RESTAURANT":
      // restaurantIndex
      newFilters.restaurants[action.restaurantIndex].active = false
    break;
    case "SET_MIN_PRICE":
      // minPrice
      newFilters.minPrice = action.minPrice
    break;
    case "SET_MAX_PRICE":
      // maxPrice
      newFilters.maxPrice = action.maxPrice
  }

  return newFilters
}