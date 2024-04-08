import React, { useContext } from "react";
import start_icon from "../assets/star_icon.png";
import start_dull_icon from "../assets/star_dull_icon.png";
import "./ProductDisplay.scss";
import { ShopContext } from "../components/Context/ShopContext";

interface ProductDisplayProps {
  product: Product;
}

export const ProductDisplay: React.FC<ProductDisplayProps> = (props) => {
  const { id, name, category, image, old_price, new_price, description } =
    props.product;
  const { addToCart, cartItems } = useContext(ShopContext);
  return (
    <div
      className="pd flex mt-5 mx-[150px] overflow-clip
    max-xl:mx-14
    max-lg:mx-7
    max-md:mx-3
    max-sm:flex-col"
    >
      <div
        className="pd-left flex gap-5 self-start shrink-0
      max-xl:gap-3
      max-lg:gap-2
      max-md:gap-1 max-md:flex-col-reverse max-md:items-center
      max-sm:gap-3 max-sm:flex-row max-sm:m-auto max-sm:items-stretch"
      >
        <div
          className="pd-thumbnails flex flex-col gap-4 justify-between
      max-xl:gap-3
      max-lg:[&>img]:h-20 max-lg:[&>img]:w-auto max-lg:gap-0
      max-md:flex-row max-md:gap-[6px] max-md:[&>img]:h-[70px]
      max-sm:flex-col max-sm:gap-2 max-sm:[&>img]:h-[75px]"
        >
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
        <div className="pd-img">
          <img
            src={image}
            alt=""
            className="w-[400px]
          max-lg:h-[350px] max-lg:w-auto
          max-md:h-[300px]
          max-sm:h-[330px]"
          />
        </div>
      </div>
      <div
        className="pd-right flex flex-col shrink mx-10
      max-xl:mx-8
      max-sm:m-[5px]"
      >
        <h1
          className="text-3xl font-bold
        max-xl:text-2xl
        max-lg:text-xl
        max-md:text-lg
        max-sm:mt-4 max-sm:text-xl max-sm:font-medium"
        >
          {name}
        </h1>
        {/* this is currently static */}
        <div
          className="pd-stars flex items-center mt-4 gap-1 text-sm
        max-xl:gap-[3px] text-[13px]
        max-lg:[&>img]:w-4
        max-md:[&>img]:w-3
        max-sm:[&>img]:w-[15px]"
        >
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(179)</p>
        </div>
        <div
          className="pd-right-prices flex my-10 gap-4 text-2xl font-bold
        max-xl:my-3 max-xl:text-lg"
        >
          <div className="pd-right-price-old text-gray-400 line-through">
            ${old_price}
          </div>
          <div className="pd-right-price-new text-red-400">${new_price}</div>
        </div>
        <div
          className="pd-right-desc
        max-xl:text-[13px]
        max-lg:text-xs
        max-md:text-[10px]"
        >
          {description}
        </div>
        <div className="pd-right-size">
          <h1
            className="mt-10 text-xl font-semibold
          max-xl:mt-5 max-xl:text-lg
          max-md:mt-3"
          >
            Select Size
          </h1>
          <div
            className="pd-right-sizes flex my-8 gap-5 
          max-xl:[&>div]:p-[14px_20px] max-xl:gap-4
          max-lg:my-3 max-lg:[&>div]:p-[10px_16px] max-lg:text-xs max-lg:gap-3
          max-md:gap-2 max-md:[&>div]:p-[4px_11px]
          max-sm:gap-[10px] max-sm:my-5 max-sm:[&>div]:p-[10px_16px] max-sm:text-sm"
          >
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>2XL</div>
          </div>
        </div>
        <button
          className="py-5 px-15 w-[200px] text-base font-semibold text-white bg-red-400 mb-10 border-none outline-none
          max-xl:w-[150px] max-xl:py-3 max-xl:mb-5
          max-lg:w-[120px] max-lg:py-[10px] max-lg:mb-3 max-lg:text-sm
          max-md:w-[100px] max-md:text-xs
          max-sm:w-[130px] max-sm:text-sm max-sm:p-[12px_0px]"
          onClick={() => {
            addToCart(id);
          }}
        >
          ADD TO CART
        </button>
        <div
          className="pd-right-category mt-3
        max-xl:mt-[5px] max-xl:text-sm
        max-lg:text-xs
        max-md:text-[10px]
        max-sm:text-base"
        >
          <p>
            <span>Category: </span>Women, T-Shirt, Crop Top
          </p>
          <p className="pd-right-category">
            <span>Tags: </span>Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};
