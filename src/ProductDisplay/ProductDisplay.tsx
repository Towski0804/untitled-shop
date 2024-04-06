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
    <div className="pd flex mt-5 mx-[150px] w-4/5">
      <div className="pd-left flex gap-5 self-start shrink-0 ">
        <div className="pd-thumbnails flex flex-col gap-4">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
        <div className="pd-img">
          <img src={image} alt="" className="w-[400px]" />
        </div>
      </div>
      <div className="pd-right pl-[70px] flex flex-col shrink">
        <h1 className="text-5xl font-bold leading-[1.1em]">{name}</h1>
        {/* this is currently static */}
        <div className="pd-stars flex items-center mt-4 gap-1 text-sm">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(179)</p>
        </div>
        <div className="pd-right-prices flex my-10 gap-4 text-2xl font-bold">
          <div className="pd-right-price-old text-gray-400 line-through">
            ${old_price}
          </div>
          <div className="pd-right-price-new text-red-400">${new_price}</div>
        </div>
        <div className="pd-right-desc">{description}</div>
        <div className="pd-right-size">
          <h1 className="mt-10 text-xl font-semibold">Select Size</h1>
          <div className="pd-right-sizes flex my-8 gap-5">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>2XL</div>
          </div>
        </div>
        <button
          className="py-5 px-10 w-[200px] text-base font-semibold text-white bg-red-400 mb-10 border-none outline-none"
          onClick={() => {
            addToCart(id);
          }}
        >
          ADD TO CART
        </button>
        <p className="pd-right-category mt-3">
          <span>Category: </span>Women, T-Shirt, Crop Top
        </p>{" "}
        <p className="pd-right-category">
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};
