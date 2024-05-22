import React, { useEffect, useState } from "react"
import { ajax } from "../../lib/ajax"

interface ShopContextType {
  productMetadata: Product[]
  setProductMetadataHelper: () => void
  getProductDetail: (id: string) => Promise<Product | undefined>
  cartItems: Record<string, number>
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  getTotalCartAmount: () => number
  getTotalCartItems: () => number
}
export const ShopContext = React.createContext<ShopContextType>({
  productMetadata: [],
  setProductMetadataHelper: () => {},
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
  const [cartItems, setCartItems] = useState<Record<string, number>>({})
  const [productMetadata, setProductMetadata] = useState<Product[]>([])
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

  // when cartItems change, the metadata of product (e.g. price, etc.) would be fetched again
  useEffect(() => {
    setProductMetadataHelper()
  }, [cartItems])

  const setProductMetadataHelper = () => {
    if (!cartItems) return
    const keys = Object.keys(cartItems)
    keys.map(async (key) => {
      const product = (await ajax.get(`/product/${key}`)).data
      setProductMetadata((prev) => [...prev, product])
    })
  }

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
    return Object.keys(cartItems).reduce((acc, id) => {
      const product = productMetadata.find((p) => p._id === id)
      if (product) {
        return acc + product.new_price * cartItems[id]
      }
      return acc
    }, 0)
  }
  const getTotalCartItems = () => {
    if (!cartItems) return 0
    return Object.keys(cartItems).reduce((acc, id) => {
      return acc + cartItems[id]
    }, 0)
  }

  const contextValue = {
    productMetadata,
    setProductMetadataHelper,
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
