import { ProductDetails } from "./ProductDetails"

export const OrderDetails = ({products}) => {
  return (
    <div>
      {
        products.map(product => 
          <ProductDetails {...product} />  
        )
      }
    </div>
  )
}