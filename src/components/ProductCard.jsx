import { useEffect, useState } from "react";
import useProduct from "../hooks/useProduct";

const ProductCard = () => {
     const { data, error, loading } = useProduct("/products");
     const [products, setProducts] = useState([]);
     // console.log(data)
     useEffect(() => {
       if (data && data.length > 0) {
         setProducts(data);
       }
     }, [data]);
     console.log(products);
  return (
    <>
      <div className="grid grid-cols-5 gap-10 justify-items-center ps-32 pe-32 pt-16">
        {products.map((product, index) => (
          <div
            key={index}
            className=" bg-stone-200 h-96 w-72 rounded-md opacity-80"
          >
            <img
              className="w-full h-72 rounded-md"
              src={product.image}
              alt=""
            />
            <div className="text-black opacity-100 p-3 font-semibold font-serif flex justify-between  pe-10 ">
              <h1 className="truncate w-36 ">{product.title}</h1>
              <h1 className="text-emerald-900">{product.price}</h1>
            </div>
            <h1 className=" font-serif ms-3 text-emerald-900">
              {product.category}
            </h1>
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-4">
           {products.map((product, index) => 
            <div key={index} >  
                <h1 className=" text-white">{product.title}</h1>
                <img src={product.image} alt="" />
            </div>
           )}
         
          </div> */}
    </>
  );
};

export default ProductCard;
