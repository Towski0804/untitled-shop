import React, { useEffect, useState } from "react"
import { ajax } from "../../lib/ajax"

interface ShopContextType {
  all_product: Product[]
  cartItems: Record<number, number>
  addToCart: (id: number) => void
  removeFromCart: (id: number) => void
  getTotalCartAmount: () => number
  getTotalCartItems: () => number
}
export const ShopContext = React.createContext<ShopContextType>({
  all_product: [],
  cartItems: {},
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalCartAmount: () => 0,
  getTotalCartItems: () => 0
})

interface ShopContextProviderProps {
  children: React.ReactNode
}

const ShopContextProvider: React.FC<
  React.PropsWithChildren<ShopContextProviderProps>
> = (props) => {
  const [all_product, setAllProduct] = useState([])
  useEffect(() => {
    ajax.get("/product").then((res) => setAllProduct(res.data))
  }, [])
  const [cartItems, setCartItems] = useState<Record<number, number>>({})
  const addToCart = (id: number) => {
    setCartItems((prev) => {
      const cartItems = { ...prev }
      cartItems[id] = cartItems[id] + 1 || 1
      return cartItems
    })
  }
  const removeFromCart = (id: number) => {
    setCartItems((prev) => {
      const cartItems = { ...prev }
      if (cartItems[id] > 1) {
        cartItems[id] -= 1
      } else {
        delete cartItems[id]
      }
      return cartItems
    })
  }

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((acc, id) => {
      const product = all_product.find((p) => p.id === parseInt(id))
      if (product) {
        return acc + product.new_price * cartItems[parseInt(id)]
      }
      return acc
    }, 0)
  }
  const getTotalCartItems = () => {
    return Object.keys(cartItems).reduce((acc, id) => {
      return acc + cartItems[parseInt(id)]
    }, 0)
  }

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
