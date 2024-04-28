import { Item } from "../Item/Item"
import { ajax } from "../../lib/ajax"
import { useEffect, useState } from "react"

type relatedProductsProps = {
  category: string
}

export const RelatedProducts = (props: relatedProductsProps) => {
  const category = props.category
  const [related_products, setRelatedProducts] = useState<Product[]>([])
  useEffect(() => {
    ajax.get(`/newcollections/${category}`).then((res) => {
      setRelatedProducts(res.data)
    })
  }, [])
  return (
    <div className="relatedproducts flex flex-col items-center gap-3 min-h-[90vh]">
      <h1
        className="text-5xl font-semibold
      max-xl:text-4xl max-xl:mb-8
      max-lg:text-3xl max-lg:mb-5
      max-md:text-xl max-md:mb-3"
      >
        Related Products
      </h1>
      <hr
        className="w-[200px] h-[6px] rounded-[10px] bg-[#252525]
      max-xl:w-[160px] max-xl:h-[4px]
      max-lg:w-[120px] max-lg:h-[3px]
      max-md:w-[100px]"
      />
      <div
        className="relatedproducts-item mt-[50px] flex gap-7
      max-xl:gap-5 max-xl:mt-8
      max-lg:gap-4 max-lg:mt-5
      max-md:gap-[5px]
      max-sm:grid max-sm:grid-cols-2 max-sm:gap-5"
      >
        {related_products.map((item, index) => (
          <Item
            key={index}
            id={item._id}
            name={item.name}
            img={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}
