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
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            <h1 className="me-16 active:text-white hover:text-white cursor-pointer">
              Home
            </h1>
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            <h1 className="me-16 after:text-white hover:text-white cursor-pointer">
              Products
            </h1>
          </NavLink>
          <NavLink to="/" >
            <h1 className="me-16 hover:text-white cursor-pointer">Contact</h1>
          </NavLink>
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

export const Banner = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center">
        <h1 className="mt-28  font-serif">
          An exciting place for the whole family to shop.
        </h1>
        <h1 className="font-serif text-6xl">
          Discover <span className="text-white">something new</span>
        </h1>
        <NavLink to="/shop">
          <button className="mt-7 font-serif text-white bg-black p-3 text-md rounded-lg">
            Shop Now
          </button>
        </NavLink>
      </div>
    </>
  );
}

export const Footer = () => {
  return (
    <>
      <div className="flex justify-around w-1/2 p-16">
        <div>
          <h1 className=" text-white font-serif">Help</h1>
          <h1 className=" text-xs mt-4 text-white font-serif">FAQ</h1>
          <h1 className=" text-xs mt-2 text-white font-serif">Contact Us</h1>
        </div>
        <div>
          <h1 className=" text-white font-serif">Contact</h1>
          <h1 className=" text-white font-serif mt-4 text-xs">
            test@gmail.com
          </h1>
          <h1 className=" text-white font-serif text-xs mt-2">Location</h1>
        </div>
        <div>
          <h1 className=" text-white font-serif">About</h1>
          <h1 className=" text-white font-serif mt-4 text-xs">Our Story</h1>
          <h1 className=" text-white font-serif text-xs mt-2">Careers</h1>
        </div>
      </div>

      <div className="flex w-1/2 p-20 justify-end  text-white text-4xl">
        <i className="fa-brands fa-instagram me-10"></i>
        <i className="fa-brands fa-facebook me-10"></i>
        <i className="fa-brands fa-square-twitter me-10"></i>
        <i className="fa-brands fa-linkedin me-32"></i>
      </div>
    </>
  );
}
