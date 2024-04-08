import React from "react";
import { data_product } from "../../assets/data";
import { Item } from "../Item/Item";

export const Popular: React.FC = () => {
  return (
    <div
      className="popular flex flex-col items-center gap-3 h-[90vh] pt-10 
      max-xl:h-[70vh]
      max-lg:h-[60vh]
      max-md:h-[50vh]
      max-sm:h-[90vh]"
    >
      <h1
        className="text-zinc-800 text-5xl font-semibold 
      max-xl:text-4xl
      max-lg:text-3xl
      max-md:text-xl"
      >
        POPULAR ITEMS FOR WOMEN
      </h1>
      <hr
        className="w-[200px] h-[6px] rounded-lg bg-gray-800 
      max-xl:w-[160px] max-xl:h-[4px]
      max-lg:w-[120px] max-lg:h-[3px]
      max-md:w-[100px]"
      />
      <div
        className="popular-item mt-12 flex gap-7 
      max-xl:gap-5 max-xl:mt-8
      max-lg:gap-4 max-lg:mt-5
      max-md:gap-[5px]
      max-sm:grid max-sm:grid-cols-2 max-sm:gap-5"
      >
        {data_product.map((item, index) => {
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
        })}
      </div>
    </div>
  );
};
