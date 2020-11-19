import { reset, initialState } from "./context";
import cloneDeep from "lodash.clonedeep"

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
    break;
    case "RESET":
      let newState = cloneDeep(initialState)
      action.payload.forEach(filter => {
        filter.forEach(slug => {
          if(slug.includes("desde")){
            newState.minPrice = slug.split("-")[1]
            return
          } else if (slug.includes("hasta")){
            newState.maxPrice = slug.split("-")[1]
            return
          }

          for(let i = 0; i < newState.foodType.length; i++){
            if(slug == newState.foodType[i].slug){
              newState.foodType[i].active = true
              return
            }
          }

          for(let i = 0; i < newState.restaurants.length; i++){
            if(slug == newState.restaurants[i].slug){
              newState.restaurants[i].active = true
              return
            }
          }
        })
      })

      return reset(newState)
  }

  return newFilters
}