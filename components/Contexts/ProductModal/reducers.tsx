export const productReducer = (state, action) => {
  let newProduct = {}
  
  switch(action.type){
    case "SET_EXTRAS":
      newProduct = {
        ...state,
        extras: action.extras
      }
    break;
    case "PLUS_EXTRA":
      // extraIndex
      newProduct = {
        ...state.product
      }
      newProduct.extras[action.extraIndex].quantity += 1
    break;
    case "SUB_EXTRA":
      // extraIndex
      newProduct = {
        ...state.product
      }
      newProduct.extras[action.extraIndex].quantity -= 1
  }

  let newTotal = newProduct.price
  newProduct.extras.forEach(extra => {
    newTotal += extra.price*extra.quantity
  })

  return {
    product: newProduct,
    total: Math.round(newTotal * 100)/100
  }

}