import { ProductItem } from "../ProductItem"

export const SearchResults = ({products}) => {
  
  return (
    <div className="flex flex-wrap">
      {products.map(product => (
        <ProductItem {...product} />
      ))}
    </div>
  )
}