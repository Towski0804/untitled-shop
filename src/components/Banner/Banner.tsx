import arrow_icon from "../../assets/arrow.svg"
import hero_image from "../../assets/hero_image.png"

interface BannerProps {
  newCollectionsRef: React.RefObject<HTMLDivElement>
}

export const Banner: React.FC<BannerProps> = ({ newCollectionsRef }) => {
  const handleScrollToNewCollections = () => {
    if (newCollectionsRef.current) {
      newCollectionsRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <div className="banner flex min-h-[50vh] bg-gradient-to-b from-indigo-100 to-red-50 overflow-hidden max-sm:flex-col">
      <div className="banner-left flex-1 flex flex-col justify-center gap-5 pl-[130px] max-xl:pl-[100px] max-lg:pl-[80px] max-md:pl-[30px]">
        <div className="flex flex-col space-y-3">
          <p className="text-slate-900 text-6xl font-bold max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-5xl">
            NEW
          </p>
          <p className="text-6xl font-bold max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-5xl">
            COLLECTIONS
          </p>
          <p className="text-6xl font-bold max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-5xl">
            ARRIVED
          </p>
        </div>
        <div
          onClick={handleScrollToNewCollections}
          className="banner-latest-btn flex justify-center items-center gap-4 w-[300px] h-[70px] rounded-[75px] bg-indigo-500 mt-[30px] text-white text-2xl font-semibold cursor-pointer transition-all ease-in-out duration-300 hover:bg-indigo-600 hover:scale-[1.02]
          max-xl:gap-[10px] max-xl:w-[250px] max-xl:h-[60px] max-xl:mt-5 max-xl:text-lg 
          max-lg:gap-1 max-lg:mt-0 max-lg:text-base max-lg:w-[220px] max-lg:h-[50px] 
          max-md:w-[175px] max-md:h-[40px] max-md:text-sm
          max-sm:w-[200px] max-sm:h-[45px]"
        >
          <div>Latest Collection</div>
          <img
            src={arrow_icon}
            alt="arrow_icon"
            className="w-[30px] font-semibold"
          />
        </div>
      </div>
      <div className="banner-right flex flex-1 items-center justify-center max-sm:hidden">
        <img
          src={hero_image}
          alt="hero_image"
          className="w-[550px] max-xl:w-[500px] max-lg:w-[400px] max-md:w-[300px]"
        />
      </div>
    </div>
  )
}
