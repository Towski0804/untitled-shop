import arrow_icon from "../../assets/breadcrum_arrow.png";

interface BreadcrumbProps {
  product: Product;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { product } = props;
  return (
    <div className="breadcrumb">
      HOME <img src={arrow_icon} alt="" /> SHOP
      <img src={arrow_icon} alt="" /> {product.category}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};
