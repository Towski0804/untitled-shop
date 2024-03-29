import React from "react";

interface ItemProps {
  img: string;
  name: string;
  old_price: number;
  new_price: number;
}

export const Item: React.FC<ItemProps> = (props) => {
  const { img, name, old_price, new_price } = props;
  return (
    <div className="item w-[300px]">
      <img src={img} alt="" className=" hover:scale-105 duration-500" />
      <p className="my-[6px]">{name}</p>
      <div className="item-prices flex gap-5">
        <div className="item-price-new text-zinc-700 text-lg font-semibold">
          ${new_price}
        </div>
        <div className="item-price-old text-zinc-400 text-lg font-medium">
          ${old_price}
        </div>
      </div>
    </div>
  );
};
