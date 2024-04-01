import React from "react";
import exclusive_image from "../../assets/exclusive_image.png";

export const Offers = () => {
  return (
    <div className="offers w-[75%] h-[60vh] flex m-auto px-[80px] mb-[150px] bg-gradient-to-b from-[#0e2c38] to-[#e1ffea22] justify-between">
      <div className="offers-left flex flex-col justify-center">
        <h1 className="text-[60px] text-white font-semibold">Exclusive</h1>
        <h1 className="text-[60px] text-white font-semibold">Offers For You</h1>
        <p className="text-xl font-semibold">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="w-[282px] h-[70px] rounded-[35px] bg-red-400 text-white text-xl font-medium mt-[30px] cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="offers-right flex items-center justify-end pt-[50px]">
        <img src={exclusive_image} alt="exclusive_image" className="w-[80%]" />
      </div>
    </div>
  );
};
