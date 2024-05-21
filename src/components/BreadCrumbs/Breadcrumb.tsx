import arrow_icon from "../../assets/breadcrum_arrow.svg"

interface BreadcrumbProps {
  product: Product
}

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { product } = props
  return (
    <div
      className="breadcrumb flex pl-3 [&>img]:mx-1 items-center *:w-[16px] m-[30px_50px]
    max-xl:text-sm
    max-lg:m-[30px_30px] max-lg:text-[13px]
    max-md:m-[30px_10px] max-md:text-xs
    max-sm:text-[10px]"
    >
      HOME <img src={arrow_icon} alt="" /> SHOP
      <img src={arrow_icon} alt="" /> {product.category.toUpperCase()}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}
