import React, { useContext } from "react";
import { ShopContext } from "../components/Context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import { Item } from "../components/Item/Item";

interface ShopCategoryProps {
  banner: string;
  category: string;
}

export const ShopCategory: React.FC<ShopCategoryProps> = (props) => {
  const { all_product } = useContext(ShopContext) ?? {};
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shop-category-index-sort">
        <p>
          <span>Showing 1 - 12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
        <div className="shop-category-products">
          {all_product?.map((item, index) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={index}
                  name={item.name}
                  img={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};
