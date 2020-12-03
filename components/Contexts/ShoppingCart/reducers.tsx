export const mainReducer = (state, action) => {
  let newProducts = []

  let deepCopy = JSON.parse(JSON.stringify(state))

  switch(action.type){
    case "ADD_PRODUCT":
      newProducts = [
        ...deepCopy.products,
        {
          id: action.product.id,
          name: action.product.name,
          restaurant: action.product.restaurant,
          price: action.product.price,
          discount: action.product.discount,
          link: action.product.link,
          image: action.product.image,
          extras: action.product.extras,
          quantity: action.product.quantity
        }
      ]
    break;
    case "REMOVE_PRODUCT":
      // productIndex
      newProducts = [
        ...deepCopy.products.filter((product, index) => index !== action.productIndex)
      ]
    break;
    case "PLUS_PRODUCT":
      // productIndex
      newProducts = [
        ...deepCopy.products
      ]
      newProducts[action.productIndex].quantity += 1
    break;
    case "SUB_PRODUCT":
      newProducts = [
        ...deepCopy.products
      ]
      newProducts[action.productIndex].quantity -= 1

      if(newProducts[action.productIndex].quantity == 0){
        newProducts = [
          ...deepCopy.products.filter((product, index) => index !== action.productIndex)
        ]
      }
    break;
    case "ADD_EXTRA":
      // productIndex
      newProducts = [
        ...deepCopy.products
      ]
      newProducts[action.payload.productIndex].extras.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        image: action.payload.image,
        quantity: 1,
        max: action.payload.image
      })
    break;
    case "REMOVE_EXTRA":
      // productIndex, extraId
      newProducts = [
        ...deepCopy.products
      ]
      newProducts[action.payload.productIndex].extras = newProducts[action.payload.productIndex].extras.filter(extra => {
        extra.id !== action.payload.extraId
      })
    break;
  }

  let newSubTotal = 0
  newProducts.forEach(product => {
    newSubTotal += product.price*product.quantity
    let productTotal = product.price*product.quantity
    product.totalExtras = 0
    product.extras.forEach(extra => {
      newSubTotal += extra.price*extra.quantity
      productTotal += extra.price*extra.quantity
      product.totalExtras += extra.quantity
    })
    product.total = productTotal
  })

  let newTotal = newSubTotal

  return {
    products: newProducts,
    subTotal: Math.round(newSubTotal * 100)/100,
    fees: 0,
    delivery: 0,
    total: Math.round(newTotal * 100)/100
  }
}