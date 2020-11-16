import createSingleton from '@peterbee/react-singleton'

const [cartHook, updateCart] = createSingleton([])

export const useShoppingCart = () => {
  return {
    cartHook,
    updateCart
  }
}