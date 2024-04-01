import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { Shop } from "./pages/Shop.tsx";
import { ShopCategory } from "./pages/ShopCategory.tsx";
import { Product } from "./pages/Product.tsx";
import { Cart } from "./pages/Cart.tsx";
import { LoginSignUp } from "./pages/Login-SignUp.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import banner_men from "./assets/banner_men.png";
import banner_women from "./assets/banner_women.png";
import banner_kids from "./assets/banner_kids.png";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={banner_men} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={banner_women} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={banner_kids} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path="/product/:productID" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
