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
          <h1 className="me-16">About</h1>
          <h1 className="me-16">Products</h1>
          <h1 className="me-16">Contact</h1>
          <h1 className="me-32">
            <i className="fa-solid fa-cart-shopping"></i>
          </h1>
        </div>
      </div>
    </>
  );
};
