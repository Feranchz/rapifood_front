import { ProductItem } from "../ProductItem"

export const SearchResults = ({products}) => {
  return (
    <div className="flex flex-wrap">
      {products.map(product => (
        <div className="w-full md:w-3/12">
          <ProductItem {...product} />
        </div>
      ))}
    </div>
  )
}