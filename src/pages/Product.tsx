import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../components/Context/ShopContext"
import { useParams } from "react-router-dom"
import { Breadcrumb } from "../components/BreadCrumbs/Breadcrumb"
import { ProductDisplay } from "../ProductDisplay/ProductDisplay"
import { DescriptionBox } from "../components/DescriptionBox/DescriptionBox"
import { RelatedProducts } from "../components/RelatedProducts/RelatedProducts"

export const Product = () => {
  const { getProductDetail } = useContext(ShopContext) ?? {}
  const { productID } = useParams<{ productID: string }>()
  const [product, setProduct] = useState<Product | undefined>(undefined)
  useEffect(() => {
    const fetchProductDetail = async () => {
      const productDetail: Product | undefined = await getProductDetail(
        productID as string
      )
      setProduct(productDetail)
    }
    fetchProductDetail()
  }, [productID])

  if (!product) return null
  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox description={product.description} />
      <RelatedProducts category={product.category} />
    </div>
  )
}
