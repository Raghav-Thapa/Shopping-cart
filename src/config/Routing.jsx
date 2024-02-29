import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ShoppingPage from "../pages/ShoppingPage";
import ProductPage from "../pages/ProductPage";
import { CartProvider } from "../store/CartContext";
import CartPage from "../pages/CartPage";

const Routing = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShoppingPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default Routing;
