import { ajax } from "../../lib/ajax"
import { Item } from "../Item/Item"
import { useEffect, useState } from "react"

export const NewCollections = () => {
  const [new_collections, setNewCollections] = useState<Product[]>([])
  useEffect(() => {
    ajax.get("/newcollections").then((res) => {
      setNewCollections(res.data)
    })
  }, [])
  return (
    <div className="new-collections flex flex-col items-center gap-5 mb-[100px]">
      <h1
        className="text-zinc-800 text-5xl font-semibold  
      max-xl:text-4xl
      max-lg:text-3xl
      max-md:text-xl"
      >
        New Collections
      </h1>
      <hr
        className="w-[200px] h-[6px] rounded-lg bg-gray-800 
      max-xl:w-[160px] max-xl:h-[4px]
      max-lg:w-[120px] max-lg:h-[3px]
      max-md:w-[100px]"
      />
      <div
        className="collections mt-12 gap-7 grid grid-cols-4
      max-xl:gap-5 max-xl:mt-8
      max-lg:gap-4 max-lg:mt-5
      max-md:gap-[5px]
      max-sm:grid max-sm:grid-cols-2 max-sm:gap-5"
      >
        {new_collections.map((item, index) => (
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
