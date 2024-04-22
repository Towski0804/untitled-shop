import React, { useEffect, useState } from "react"
import { Item } from "../Item/Item"
import { ajax } from "../../lib/ajax"

export const Popular: React.FC = () => {
  const [popular_product, setPopularProduct] = useState<Product[]>([])
  useEffect(() => {
    ajax.get("/popular/women").then((res) => {
      setPopularProduct(res.data)
    })
  }, [])
  return (
    <div className="popular flex flex-col items-center gap-3 pt-10 mb-10">
      <h1
        className="text-zinc-800 text-5xl font-semibold 
      max-xl:text-4xl max-xl:mb-8
      max-lg:text-3xl max-lg:mb-5
      max-md:text-xl max-md:mb-3"
      >
        POPULAR ITEMS FOR WOMEN
      </h1>
      <hr
        className="w-[200px] h-[6px] rounded-lg bg-gray-800 
      max-xl:w-[160px] max-xl:h-[4px]
      max-lg:w-[120px] max-lg:h-[3px]
      max-md:w-[100px]"
      />
      <div
        className="popular-item mt-12 flex gap-7 
      max-xl:gap-5 max-xl:mt-8
      max-lg:gap-4 max-lg:mt-5
      max-md:gap-[5px]
      max-sm:grid max-sm:grid-cols-2 max-sm:gap-5"
      >
        {popular_product.map((item, index) => {
          return (
            <Item
              key={index}
              id={item._id}
              name={item.name}
              img={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}
