import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";
import { all_product } from "../../assets/all_product";
import { Input } from "../lib/Input";
import "./CartItems.scss";

export const CartItems = () => {
  const { cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div
      className="cartitems my-[100px] mx-[170px]
    max-xl:m-[60px_50px]
    max-md:mx-8"
    >
      <div
        className="caritems-format-main
      max-sm:hidden"
      >
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[2px] bg-[#e2e2e2]" />
      {all_product.map((p, i) => {
        if (cartItems[p.id] > 0)
          return (
            <div>
              <div className="cartitems-format caritems-format-main" key={i}>
                <img
                  src={p.image}
                  alt=""
                  className="product-icon h-[75px] object-cover
                max-xl:h-[50px]"
                />
                <p>{p.name}</p>
                <p>${p.new_price}</p>
                <button
                  className="cartitems-quantity border
                max-xl:w-10 max-xl:h-8"
                >
                  {cartItems[p.id]}
                </button>
                <p>${p.new_price * cartItems[p.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(p.id);
                  }}
                  className="w-[15px] mx-4 cursor-pointer
                  max-xl:m-auto"
                />
              </div>
              <hr className="h-[2px] bg-[#e2e2e2]" />
            </div>
          );
        return null;
      })}
      <div
        className="cartitems-down flex my-[100px]
      max-xl:my-10 max-xl:flex-col max-lg:gap-10"
      >
        <div
          className="cartitems-total flex-1 flex flex-col mr-[200px]
        max-xl:m-0"
        >
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button
            className="w-[262px] h-[58px] outline-none border-none bg-red-400 text-white text-base font-semibold cursor-pointer
          max-xl:max-w-[200px] max-xl:h-[45px] max-xl:text-sm"
          >
            Proceed to Checkout
          </button>
        </div>
        <div className="cartitems-promocode flex-1 font-medium">
          <p>If you have a promo code, Enter it here!</p>
          <div className="cartitems-codebox mt-4 h-[58px]">
            <Input
              type="text"
              placeholder="promo code"
              className="h-[58px]
            max-md:w-[200px]"
            />
            <button
              className="w-[170px] h-[58px] bg-black text-white
            max-xl:w-[120px]
            max-md:w-[80px]"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
