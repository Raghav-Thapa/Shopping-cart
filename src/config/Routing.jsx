import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ShoppingPage from "../pages/ShoppingPage";
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShoppingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing
