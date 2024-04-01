import React, { useState } from "react";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<string>("Shop");
  return (
    <div className="navbar flex p-4 gap-12 text-lg font-medium shadow-md justify-around">
      <Link className="nav-logo flex items-center gap-3" to="/">
        <img src={logo} alt="logo" className="w-[40px]" />
        <p className="text-slate-900 text-3xl">Untitled Shop</p>
      </Link>
      <ul className="nav-menu flex items-center list-none gap-12 font-medium text-amber-800">
        {["Shop", "Men", "Women", "Kids"].map((item, index) => (
          <li
            onClick={() => {
              setMenu(item);
            }}
            className="cursor-pointer flex flex-col items-center justify-center gap-1"
            key={index}
          >
            <Link to={item === "Shop" ? "/" : `/${item}`}>{item}</Link>
            {menu === item && (
              <hr className="b-1 w-[80%] h-[3px] bg-red-600 rounded-lg"></hr>
            )}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart flex items-center gap-[45px]">
        <Link to={"/login"}>
          <button className="w-[160px] h-[60px] bg-white outline-none border border-gray-400 cursor-pointer rounded-3xl active:bg-slate-300">
            Login
          </button>
        </Link>
        <Link to={"/cart"}>
          <div className="nav-cart-count relative">
            <img src={cart_icon} alt="cart_icon" className="w-[40px]" />
            <div className="flex absolute w-[22px] h-[22px] justify-center items-center rounded-full bg-red-500 text-white text-sm top-[-8px] right-[-10px]">
              0
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
