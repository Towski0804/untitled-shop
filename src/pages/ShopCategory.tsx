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
    <div className="shop-category flex flex-col items-center">
      <img src={props.banner} alt="" className="block m-[30px_auto] w-[82%]" />
      <div className="shop-category-index-sort flex w-[80%] m-[0_170px] justify-between items-center">
        <p>
          <span className="font-semibold">Showing 1 - 12</span> out of 36
          products
        </p>
        <div className="shop-category-sort p-[10px_20px] rounded-[40px] border-neutral-600 border-2">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-products grid grid-cols-4 gap-4 mt-10">
        {all_product?.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
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
      <div className="shop-category-loadmore flex justify-center items-center m-[150px_auto] w-[200px] h-[60px] text-lg border-y-2 cursor-pointer">
        Explore More
      </div>
    </div>
  );
};
