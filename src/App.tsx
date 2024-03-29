import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { Shop } from "./pages/Shop.tsx";
import { ShopCategory } from "./pages/ShopCategory.tsx";
import { Product } from "./pages/Product.tsx";
import { Cart } from "./pages/Cart.tsx";
import { LoginSignUp } from "./pages/Login-SignUp.tsx";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="mens" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path="/product/:productID" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
