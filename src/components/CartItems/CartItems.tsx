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
    <div className="cartitems my-[100px] mx-[170px]">
      <div className="caritems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2]" />
      {all_product.map((p, i) => {
        if (cartItems[p.id] > 0)
          return (
            <div>
              <div className="cartitems-format caritems-format-main" key={i}>
                <img src={p.image} alt="" className="product-icon w-[62px]" />
                <p>{p.name}</p>
                <p>${p.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[p.id]}
                </button>
                <p>${p.new_price * cartItems[p.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(p.id);
                  }}
                  className="w-[15px] mx-4 cursor-pointer"
                />
              </div>
            </div>
          );
        return null;
      })}
      <div className="cartitems-down flex my-[100px]">
        <div className="cartitems-total flex-1 flex flex-col mr-[200px]">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
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
          <button className="w-[262px] h-[58px] outline-none border-none bg-red-400 text-white text-base font-semibold cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
        <div className="cartitems-promocode flex-1 font-medium">
          <p>If you have a promo code, Enter it here!</p>
          <div className="cartitems-codebox w-[504px] mt-4 h-[58px]">
            <Input type="text" placeholder="promo code" className="h-[58px]" />
            <button className="w-[170px] h-[58px] bg-black text-white">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
