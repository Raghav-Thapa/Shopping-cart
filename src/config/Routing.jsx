import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ShoppingPage from "../pages/ShoppingPage";
import ProductPage from "../pages/ProductPage";
import { useState } from "react";
import { CartContext } from "../store/CartContext";
import CartPage from "../pages/CartPage";
const Routing = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<ShoppingPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/cart" element= {<CartPage/>}/>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
};

export default Routing;
