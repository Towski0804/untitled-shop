import { useState } from "react"
import dropdown_icon from "../assets/dropdown_icon.svg"
import { Item } from "../components/Item/Item"
import { ajax } from "../lib/ajax"
import useSWRInfinite from "swr/infinite"

interface ShopCategoryProps {
  banner: string
  category: string
}

type responseType = {
  products: Product[]
  total: number
  page: number
}

export const ShopCategory: React.FC<ShopCategoryProps> = (props) => {
  const [total, setTotal] = useState(0)
  const [noMore, setNoMore] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const handleLoadMore = () => {
    setIsLoadingMore(true)
    setSize(size + 1)
  }
  const getKey = (pageIndex: number, previousPageData: responseType | null) => {
    if (
      previousPageData &&
      previousPageData.products &&
      !previousPageData.products.length
    )
      return null
    return `/product/category/${props.category}?page=${pageIndex + 1}`
  }

  const fetcher = (url: string) =>
    ajax
      .get(url)
      .then((res) => {
        setIsLoadingMore(false)
        setNoMore(res.data.products.length < 10)
        setTotal(res.data.total)
        return res.data
      })
      .catch((err) => alert(err.response.data.error))

  const { data, size, setSize, isValidating } = useSWRInfinite(getKey, fetcher)

  return (
    <div className="shop-category flex flex-col items-center">
      <img
        src={props.banner}
        alt=""
        className="banner block m-[30px_auto] w-[82%]
        max-xl:m-[20px_auto] max-xl:w-[90%]
        max-md:w-[95%] "
      />
      <div
        className="shop-category-index-sort flex w-[80%] m-[0_170px] justify-between items-center
      max-xl:w-[90%] max-xl:m-auto max-xl:[&>p]:text-xs
      max-md:w-[95%] "
      >
        <p>
          <span>Showing {size * 10}</span> out of {total} products
        </p>
        <div
          className="shop-category-sort flex items-center p-[10px_20px] rounded-[40px] border-neutral-600 border-2
        max-xl:p-[5px_10px] max-xl:text-xs"
        >
          Sort by <img src={dropdown_icon} alt="" className="w-3 ml-1" />
        </div>
      </div>
      <div
        className="shop-category-products grid grid-cols-4 gap-4 mt-10
      max-xl:w-[90%] max-xl:m-[10px_auto] max-xl:gap-y-10
      max-md:w-[95%] 
      max-sm:grid-cols-2"
      >
        {data?.map((productsList) => {
          return productsList?.products.map((item: Product, index: number) => {
            if (props.category === item.category) {
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
            } else {
              return null
            }
          })
        })}
      </div>
      <button
        className="shop-category-loadmore flex justify-center items-center m-[150px_auto] w-[200px] h-[60px] text-lg border-y-2 cursor-pointer
      max-xl:m-[100_auto] max-xl:w-[180px] max-xl:h-[50px] max-xl:text-base
      max-md:w-[160px] max-md:h-[40px] max-md:text-sm max-md:m-[60px_auto]"
        onClick={handleLoadMore}
        disabled={isLoadingMore || noMore || isValidating} // Disable when loading or no more data
      >
        {noMore
          ? `No More Products`
          : isLoadingMore
            ? `Loading ...`
            : `Find More`}
      </button>
    </div>
  )
}
