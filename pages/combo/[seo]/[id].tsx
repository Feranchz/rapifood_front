import Image from "next/image"
import { useReducer, useState } from "react"
import { productReducer } from "../../../components/Contexts/ProductModal/reducers"
import { useCart } from "../../../components/Contexts/ShoppingCart/context"
import { ExtraItem } from "../../../components/Visuals/ExtraItem.tsx"
import { ProductList } from "../../../components/Visuals/ProductList"
import Cookies from "cookies"
import { useRequest } from "../../../components/Utils/useRequests"

const IMAGE_BASE = "http://rapifood-backend.tk:8001"

const ProductPage = (product) => {
  console.log(product)

  const [productInfo, dispatch] = useReducer(productReducer, {
    product,
    total: product.price
  })
  const [quantity, setQuantity] = useState(1)
  const {dispatch: cartDispatch} = useCart()

  const addProduct = () => {
    cartDispatch({
      type: "ADD_PRODUCT",
      product: {
        ...productInfo.product,
        quantity
      }
    })
  }

  const PRODUCTS_DUMMY = [product, product, product, product, product]
  return (
    <div className="md:max-w-4xl md:mx-auto">
      <div className="w-full h-64 relative md:rounded-lg md:overflow-hidden md:h-128">
        <Image src={IMAGE_BASE + productInfo.product.image} layout="fill" />
      </div>
      <div className="p-4 md:px-0 flex flex-wrap">
        <div className="w-full md:w-1/2 p-2 md:shadow-md md:rounded-lg md:p-4">
          <h4 className="font-bold text-xl">¡Completa tu combo!</h4>
          <div>Selecciona los extras para tu producto.</div>
          <div>
            {productInfo.product.extras.length > 0 ? 
              productInfo.product.extras.map((extra, index) => (
                <ExtraItem dispatch={dispatch} index={index} {...extra} />
              ))
              : null
            }
          </div>
          <div>
            <button onClick={addProduct} className="button-with-gradient w-full h-full rounded-lg text-lg py-1">Añadir por <span className="font-bold">$ {productInfo.total}</span></button>
          </div>
        </div>
        <div className="p-2 w-full md:w-1/2 md:py-4 md:px-6">
          <h1 className="font-bold text-2xl">{productInfo.product.name}</h1>
          <p>{productInfo.product.description}</p>
          <h4 className="font-bold text-xl">Ingredientes</h4>
          <ul className="list-disc">
            {
              productInfo.product.ingredients.map(ingredient => 
                <li className="inline-block pl-4">{ingredient}</li>  
              )
            }
          </ul>
        </div>
        <div className="p-2 relative overflow-hidden">
          <h4 className="font-bold text-xl">{productInfo.product.restaurant_name}</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium cum, deserunt reiciendis totam asperiores possimus iure ad voluptatibus temporibus perferendis dolore natus, nobis laborum impedit explicabo sit delectus dignissimos!</p>
          <div className="py-2 w-full">
            <ProductList products={product.sameRestaurant} />
          </div>
        </div>
        <div className="p-2 relative overflow-hidden">
          <h4 className="font-bold text-xl">Relacionados</h4>
          <div className="py-2 w-full">
            <ProductList products={product.relacionados} />
          </div>
        </div>

      </div>

      <div className="z-30 fixed bg-white bottom-0 w-full p-2 md:hidden">
          <button onClick={addProduct} className="button-with-gradient w-full h-full rounded-lg text-lg py-1">Añadir por <span className="font-bold">$ {productInfo.total}</span></button>
      </div>
    </div>
  )
}

export async function getServerSideProps({ req, res, params}){
  let id = params.id
  const cookies = new Cookies(req, res)

  const { get, post } = useRequest()
  const response = await get("/product/" + id, "")
  
  const sameRestaurant = await post("/productFilter", {
    restaurant_id: [response.data.storeID]
  }, "")

  const relacionados = await post("/productFilter", {}, "")

  return {
    props: {
      relacionados,
      sameRestaurant,
      ...response.data,
      ingredients: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
      extras: [
    {
      id: 1,
      name: "Extra #1",
      price: 0.99,
      max: 3,
      quantity: 0
    },
    {
      id: 2,
      name: "Extra #1",
      price: 0.99,
      max: 3,
      quantity: 0
    },
    {
      id: 3,
      name: "Extra #1",
      price: 0.99,
      max: 3,
      quantity: 0
    },
    {
      id: 4,
      name: "Extra #1",
      price: 0.99,
      max: 3,
      quantity: 0
    },
    {
      id: 1,
      name: "Extra #1",
      price: 0.99,
      max: 3,
      quantity: 0
    }
  ]
    }
  }
}

export default ProductPage