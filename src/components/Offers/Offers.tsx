import { useNavigate } from "react-router-dom"
import exclusive_image from "../../assets/exclusive_image.png"
import { useMenuStore } from "../../stores/useMenuStore"

export const Offers = () => {
  const nav = useNavigate()
  const { setMenu } = useMenuStore()
  return (
    <div
      className="offers w-[85%] h-[60vh] flex m-auto px-[100px] mb-[150px] bg-slate-300 justify-between overflow-hidden
    max-xl:px-[80px] max-xl:mb-[120px]
    max-lg:px-[60px] max-lg:mb-[80px] max-lg:h-[40vh]
    max-md:mb-[60px]
    max-sm:h-[25vh] max-sm:mb-[50px]"
    >
      <div
        className="offers-left flex flex-col justify-center 
      [&>h1]:max-xl:text-4xl
      [&>h1]:max-lg:text-3xl
      [&>h1]:max-md:text-2xl
      [&>h1]:max-sm:text-lg"
      >
        <h1 className="text-[60px] text-white font-semibold">Exclusive</h1>
        <h1 className="text-[60px] text-white font-semibold">Offers For You</h1>
        <p
          className="text-xl font-semibold
        max-xl:text-lg
        max-lg:text-base
        max-md:text-sm
        max-sm:text-xs"
        >
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button
          className="w-[282px] h-[70px] rounded-lg bg-indigo-500 text-white text-xl font-medium mt-[30px] cursor-pointer transition-all ease-in-out duration-300 hover:bg-indigo-600 hover:scale-[1.02]
        max-xl:w-[220px] max-xl:h-[50px] max-xl:text-lg
        max-lg:w-[160px] max-lg:h-[40px] max-lg:text-base
        max-md:w-[140px] max-md:h-[30px] max-md:text-sm
        max-sm:w-[120px] max-sm:h-[25px] max-sm:text-xs max-sm:mt-3"
          onClick={() => {
            window.scrollTo(0, 0)
            nav("/women")
            setMenu("Women")
          }}
        >
          Check Now
        </button>
      </div>
      <div
        className="offers-right flex items-center justify-end pt-[50px]
      max-xl:pt-8
      max-lg:pt-3"
      >
        <img
          src={exclusive_image}
          alt="exclusive_image"
          className="w-[80%]
        max-xl:w-[300px]
        max-lg:w-[200px]
        max-md:w-[180px]
        max-sm:w-[120px]"
        />
      </div>
    </div>
  )
}
