import { useContext } from "react"
import { ShopContext } from "../components/Context/ShopContext"
import { useParams } from "react-router-dom"
import { Breadcrumb } from "../components/BreadCrumbs/Breadcrumb"
import { ProductDisplay } from "../ProductDisplay/ProductDisplay"
import { DescriptionBox } from "../components/DescriptionBox/DescriptionBox"
import { RelatedProducts } from "../components/RelatedProducts/RelatedProducts"

export const Product = () => {
  const { all_product } = useContext(ShopContext) ?? {}
  const { productID } = useParams<{ productID: string }>()
  const product = all_product.find((product) => product._id === productID)
  if (!product) return null
  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}
