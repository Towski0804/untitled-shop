import React, { useEffect, useState } from "react"
import { ajax } from "../../lib/ajax"

interface ShopContextType {
  getProductDetail: (id: string) => Promise<Product | undefined>
  cartItems: Record<string, number>
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  getTotalCartAmount: () => number
  getTotalCartItems: () => number
}
export const ShopContext = React.createContext<ShopContextType>({
  getProductDetail: () => Promise.resolve({} as Product),
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
  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      ajax
        .post(
          "/cartitems",
          {},
          {
            headers: {
              Accept: "application/form-data",
              "auth-token": localStorage.getItem("auth-token"),
              "Content-Type": "application/json"
            }
          }
        )
        .then((res) => {
          setCartItems(res.data.cartData)
        })
    }
  }, [])
  const [cartItems, setCartItems] = useState<Record<string, number>>({})

  const getProductDetail = async (id: string): Promise<Product | undefined> => {
    let productDetail: Product | undefined
    await ajax
      .get(`/product/${id}`)
      .then((res) => {
        productDetail = res.data
      })
      .catch((err) => {
        throw new Error(err.response.data.error)
      })
    if (!productDetail) {
      alert("Failed to get product detail")
    }
    return productDetail
  }

  const addToCart = (id: string) => {
    setCartItems((prev) => {
      const cartItems = { ...prev }
      cartItems[id] = cartItems[id] + 1 || 1
      return cartItems
    })
    if (localStorage.getItem("auth-token")) {
      ajax
        .patch(
          "/cartitems",
          { itemID: id },
          {
            headers: {
              Accept: "application/form-data",
              "auth-token": localStorage.getItem("auth-token"),
              "Content-Type": "application/json"
            }
          }
        )
        .then((res) => {
          console.log(res.data.message)
        })
        .catch((err) => alert(err.response.data.error))
    }
  }
  const removeFromCart = (id: string) => {
    setCartItems((prev) => {
      const cartItems = { ...prev }
      if (cartItems[id] > 1) {
        cartItems[id] -= 1
      } else {
        delete cartItems[id]
      }
      return cartItems
    })
    if (localStorage.getItem("auth-token")) {
      ajax
        .delete(`/cartitems/${id}`, {
          headers: {
            Accept: "application/form-data",
            "auth-token": localStorage.getItem("auth-token"),
            "Content-Type": "application/json"
          }
        })
        .then((res) => {
          console.log(res.data.message)
        })
    }
  }

  const getTotalCartAmount = () => {
    if (!cartItems) return 0
    let unit_price: number
    return Object.keys(cartItems).reduce((acc, id) => {
      ajax
        .get(`/product/${id}`)
        .then((res) => (unit_price = res.data.new_price))
      return acc + unit_price * cartItems[id]
    }, 0)
  }
  const getTotalCartItems = () => {
    if (!cartItems) return 0
    return Object.keys(cartItems).reduce((acc, id) => {
      return acc + cartItems[id]
    }, 0)
  }

  const contextValue = {
    getProductDetail,
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
