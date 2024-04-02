import arrow_icon from "../../assets/breadcrum_arrow.png";

interface BreadcrumbProps {
  product: Product;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { product } = props;
  return (
    <div className="breadcrumb flex pt-3 pl-3 [&>img]:mx-1 items-center">
      HOME <img src={arrow_icon} alt="" /> SHOP
      <img src={arrow_icon} alt="" /> {product.category}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};
