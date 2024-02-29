import { useEffect, useState } from "react";
import useProduct from "../hooks/useProduct";
import { NavLink } from "react-router-dom";

const ProductCard = () => {
  const { data, loading } = useProduct("/products");
  const [products, setProducts] = useState([]);

  const [list, setList] = useState(false);

  const handleList = () => {
    setList((prev) => !prev);
  };
  // console.log(data)
  useEffect(() => {
    if (data && data.length > 0) {
      setProducts(data);
    }
  }, [data]);
  //  console.log(products);

  return (
    <>
      {loading ? (
        <i className=" text-center w-full mt-32 text-8xl fa-solid fa-spinner fa-spin-pulse"></i>
      ) : (
        <>
          <button onClick={handleList}>
            <i className="fa-solid fa-list text-3xl ms-32 mt-5"></i>
          </button>

          {list ? (
            <div className=" ps-40  pt-16">
              <ul>
                {products.map((product, index) => (
                  <NavLink key={index} to={`/products/${product.id}`}>
                    <li
                      key={index}
                      className=" bg-stone-100  mb-7 rounded-md opacity-80"
                    >
                      <div className="flex w-full">
                        <div className="w-2/12">
                          <img
                            className="w-full h-72 rounded-md"
                            src={product.image}
                            alt=""
                          />
                        </div>
                        <div className="ms-5 w-10/12">
                          <div className="text-black opacity-100 p-3 mt-4 font-semibold font-serif  pe-10 ">
                            <h1 className=" ">{product.title}</h1>
                          </div>
                          <h1 className=" font-serif ms-3 -mt-2 text-emerald-900">
                            {product.category}
                          </h1>{" "}
                          <h1 className="text-emerald-900 p-3 font-semibold font-serif">
                            $ {product.price}
                          </h1>
                          <p className="ps-3 pt-3 pe-64">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  </NavLink>
                ))}
              </ul>
            </div>
          ) : (
            <div className="grid grid-cols-5 gap-10 justify-items-center ps-32 pe-32 pt-16">
              {products.map((product, index) => (
                <NavLink key={index} to={`/products/${product.id}`}>
                  <div
                    key={index}
                    className=" bg-stone-100 h-96 w-72 rounded-md opacity-80"
                  >
                    <img
                      className="w-full h-72 rounded-md"
                      src={product.image}
                      alt=""
                    />
                    <div className="text-black opacity-100 p-3 font-semibold font-serif flex justify-between  pe-10 ">
                      <h1 className="truncate w-36 ">{product.title}</h1>
                      <h1 className="text-emerald-900">$ {product.price}</h1>
                    </div>
                    <h1 className=" font-serif ms-3 text-emerald-900">
                      {product.category}
                    </h1>
                  </div>
                </NavLink>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductCard;
