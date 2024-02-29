import { useEffect, useState } from "react";
import { Header } from "../components/HeaderComponent";
import useProduct from "../hooks/useProduct";
import ProductCard from "../components/ProductCard";

const ShoppingPage = () => {
  const {data} = useProduct("/products");
  const [products, setProducts] = useState([]);
// console.log(data)
  useEffect(() => {
    if (data && data.length > 0) {
      setProducts(data);
    }
  }, [data]);
  console.log(products)

  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div className="  min-h-screen">
            <ProductCard/>
        </div>
      </div>
    </>
  );
};

export default ShoppingPage;
