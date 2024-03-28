import React from "react";

interface ShopCategoryProps {
  category: string;
}

export const ShopCategory: React.FC<ShopCategoryProps> = (props) => {
  return (
    <>
      <div>ShopCategory</div>
      <div>{props.category}</div>
    </>
  );
};
