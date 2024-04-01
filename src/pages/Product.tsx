import { useContext } from "react";
import { ShopContext } from "../components/Context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../components/BreadCrumbs/Breadcrumb";

export const Product = () => {
  const { all_product } = useContext(ShopContext) ?? {};
  const { productID } = useParams<{ productID: string }>();
  const product = all_product?.find(
    (product) => product.id === Number(productID),
  );
  if (!product) return null;
  return (
    <div>
      <Breadcrumb product={product} />
    </div>
  );
};
