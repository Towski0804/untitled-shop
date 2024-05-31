import { Input } from "../lib/Input"

export const Newsletter = () => {
  return (
    <div
      className="newsletter w-3/4 h-[400px] flex flex-col items-center justify-center mx-auto px-[100px] gap-7 bg-indigo-50 mb-10
    max-xl:px-[80px] max-xl:mb-8 max-xl:gap-5 max-xl:[&>h1]:text-4xl
    max-lg:mb-5 max-lg:[&>h1]:text-3xl
    max-md:mb-3 max-md:h-[35vh] max-md:w-5/6 max-md:[&>h1]:text-lg
    max-sm:px-2 max-sm:gap-4 max-sm:h-[25vh] max-sm:w-full max-sm:[&>h1]:text-base"
    >
      <h1 className="text-zinc-800 text-5xl font-semibold">
        Get the latest updates from us
      </h1>
      <p
        className="text-lg
      max-xl:text-base
      max-lg:text-sm
      max-md:text-xs
      max-sm:text-[11px] max-sm:max-w-[200px] max-sm:text-center"
      >
        Subscribe to our newsletter to stay updated!
      </p>
      <div
        className="flex items-center justify-around bg-white w-[730px] h-[70px] rounded-[80px] border-1 border-gray-500
      max-xl:w-[600px] max-xl:h-[60px]
      max-lg:w-[500px] max-lg:h-[50px]
      max-md:w-[400px] max-md:h-[40px]
      max-sm:w-[290px]"
      >
        <Input
          type="email"
          placeholder="Your Email"
          className="w-[500px] border-none
          max-xl:w-[400px]
          max-lg:w-[300px] max-lg:text-sm
          max-md:w-[200px] max-md:text-[13px]
          max-sm:w-[130px]"
        />
        <button
          className="w-[160px] h-full
        max-xl:w-[140px]
        max-lg:w-[120px] max-lg:text-sm
        max-md:w-[100px] max-md:text-[13px]"
        >
          Subscribe
        </button>
      </div>
    </div>
  )
}
