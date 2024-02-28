import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
export const Header = () => {
  return (
    <>
      <div className="flex justify-end p-3 bg-emerald-700 ">
        <div className="w-1/5 ms-32">
          <NavLink to="/">
            <img src={logo} height={100} width={100} alt="" />
          </NavLink>
        </div>
        <div className=" items-center  flex justify-end font-serif text-2xl w-4/5">
          <NavLink to="/">
            <h1 className="me-16 hover:text-white cursor-pointer">Home</h1>
          </NavLink>
          <NavLink to="/shop">
            <h1 className="me-16 hover:text-white cursor-pointer">Products</h1>
          </NavLink>
          <h1 className="me-16 hover:text-white cursor-pointer">Contact</h1>
          <NavLink to="/cart">
            <h1 className="me-32 hover:text-white cursor-pointer">
              <i className="fa-solid fa-cart-shopping"></i>
            </h1>
          </NavLink>
        </div>
      </div>
    </>
  );
};
