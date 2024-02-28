import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ShoppingPage from "../pages/ShoppingPage";
import ProductPage from "../pages/ProductPage";
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShoppingPage />} />
          <Route  path = "/products/:id" element= {<ProductPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing
