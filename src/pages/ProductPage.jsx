import { NavLink, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { Header } from "../components/HeaderComponent";
import { useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const { data, error, loading } = useProduct(`/products/${id}`);
//   console.log(data);
   const [quantity, setQuantity] = useState(1);

   const increaseQuantity = () => {
     setQuantity((prevQuantity) => prevQuantity + 1);
   };

   const decreaseQuantity = () => {
     if (quantity > 1) {
       setQuantity((prevQuantity) => prevQuantity - 1);
     }
   };
     const handleInputChange = (event) => {
       const value = event.target.value;
       if (!isNaN(value) && value > 0) {
         setQuantity(parseInt(value));
       }
     };
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <NavLink to="/shop">
          <div className="me-10 mt-5 text-right text-4xl text-emerald-600">
            <i className="fa-solid fa-angle-left"></i>
          </div>
        </NavLink>
        <div className="flex ml-10 mr-10 p-10 ">
          <div className="w-1/3">
            <img className="" width={400} src={data?.image} alt={data?.title} />
          </div>
          <div className="w-2/4">
            <div className=" font-serif text-4xl">{data?.title}</div>
            <div className=" font-serif text-emerald-800 text-sm mb-3">
              Category: <span> {data?.category}</span>
            </div>
            <div>
              <p className=" font-serif text-md">{data?.description}</p>
            </div>
            <div className="flex mt-5">
              <div className=" font-serif text-3xl ">${data?.price}</div>
              <div className=" font-serif text-sm mt-4 ms-2">
                {" "}
                <span>(</span>
                <i className="fa-solid fa-star text-xs"></i>
                {data?.rating.rate}
                <span>)</span>
              </div>
            </div>
            <div className="mt-7">
              <button onClick={decreaseQuantity}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <input
                className="border w-10 ms-3 me-3 text-center"
                value={quantity}
                onChange={handleInputChange}
                type="number"
              />
              <button onClick={increaseQuantity}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <div>
              <button className="mt-5 font-serif text-white bg-black p-3 text-md rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;