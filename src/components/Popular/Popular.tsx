import React from "react";
import { data_product } from "../../assets/data";
import { Item } from "../Item/Item";

export const Popular: React.FC = () => {
  return (
    <div className="popular flex flex-col items-center gap-3 h-[90vh] pt-10">
      <h1 className="text-zinc-800 text-5xl font-semibold">
        POPULAR ITEMS FOR WOMEN
      </h1>
      <hr className="w-[200px] h-[6px] rounded-lg bg-gray-800" />
      <div className="popular-item mt-12 flex gap-7">
        {data_product.map((item, index) => {
          return (
            <Item
              key={index}
              name={item.name}
              img={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
