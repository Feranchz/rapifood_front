import { ProductInline } from "../Product/Inline"

export const ProductsList = ({title, products}) => {
  return (
    <>
      <h2 className="text-4xl font-bold">{title}</h2>
      <ul>
        {products.map(product => <ProductInline {...product} />)}
      </ul>
    </>
  )
}