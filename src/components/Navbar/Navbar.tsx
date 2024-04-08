import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import dropdown_icon from "../../assets/drop_down.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import clsx from "clsx";

export const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<string>("Shop");
  const [navMenuVisible, setNavMenuVisible] = useState<boolean>(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const dropdown_toggle = (e: React.MouseEvent<HTMLImageElement>) => {
    setNavMenuVisible(!navMenuVisible);
    e.currentTarget.classList.toggle("open");
  };
  return (
    <div className="navbar flex p-4 gap-12 text-lg font-medium shadow-md items-center justify-around max-xl:p-[12px_50px] max-lg:p-[12px_30px] max-md:p-[10px_0px] max-sm:p-[8px_0] max-sm:gap-0">
      <Link
        className="nav-logo flex items-center gap-3 max-sm:scale-75 max-sm:gap-0"
        to="/"
      >
        <img src={logo} alt="logo" className="w-[50px] max-xl:w-[40px]" />
        <p className="text-slate-900 text-3xl max-xl:text-2xl max-md:text-lg">
          UntitledShop
        </p>
      </Link>
      <img
        src={dropdown_icon}
        alt=""
        onClick={dropdown_toggle}
        className={clsx(
          "hidden w-[10px] cursor-pointer rotate-[-90deg] max-md:block max-md:w-7 max-md:duration-200",
          navMenuVisible ? "max-md:rotate-0" : "",
        )}
      />
      <ul
        className={clsx(
          "nav-menu flex items-center list-none gap-12 font-medium text -amber-800 max-xl:gap-7 max-xl:text-base max-lg:gap-6 max-lg:text-sm  max-md:h-[80px] max-md:w-[100%] max-md:absolute max-md:bg-white max-md:justify-center max-md:top-[50px] max-sm:h-[70px]",
          navMenuVisible ? "max-md:flex" : "max-md:hidden",
        )}
      >
        {["Shop", "Men", "Women", "Kids"].map((item, index) => (
          <li
            onClick={() => {
              setMenu(item);
            }}
            className="cursor-pointer flex flex-col items-center justify-center gap-1"
            key={index}
          >
            <Link to={item === "Shop" ? "/" : `/${item}`}>{item}</Link>
            {menu === item ? (
              <hr className="b-1 w-[80%] h-[3px] bg-red-600 rounded-lg"></hr>
            ) : (
              <hr className="b-1 h-[3px] w-[80%] bg-transparent border-transparent"></hr>
            )}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart flex items-center gap-[45px] max-xl:gap-7 max-sm:scale-[0.8]">
        <Link to={"/login"}>
          <button className="w-[160px] h-[60px] bg-white outline-none border border-gray-400 cursor-pointer rounded-3xl active:bg-slate-300 max-xl:w-[120px] max-xl:h-[45px] max-xl:text-base max-lg:w-[80px] max-lg:h-[35px] max-lg:text-sm">
            Login
          </button>
        </Link>
        <Link to={"/cart"}>
          <div className="nav-cart-count relative">
            <img
              src={cart_icon}
              alt="cart_icon"
              className="w-[40px] max-lg:w-7"
            />
            <div className="flex absolute w-[22px] h-[22px] justify-center items-center rounded-full bg-red-500 text-white text-sm top-[-8px] right-[-10px] max-lg:w-[16px] max-lg:h-[16px] max-lg:text-[10px]">
              {getTotalCartItems()}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
