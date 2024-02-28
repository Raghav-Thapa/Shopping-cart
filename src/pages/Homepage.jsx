import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Header } from "../components/HeaderComponent";

const Homepage = () => {
  return (
    <>
      <div className="h-screen">
        <div className="h-2/3 bg-emerald-600">
        <Header/>
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
        </div>
        <div className="h-1/3 bg-black flex items-center">
          <div className="flex justify-around w-1/2 p-16">
            <div>
              <h1 className=" text-white font-serif">Help</h1>
              <h1 className=" text-xs mt-4 text-white font-serif">FAQ</h1>
              <h1 className=" text-xs mt-2 text-white font-serif">
                Contact Us
              </h1>
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
        </div>
      </div>
    </>
  );
};

export default Homepage;
