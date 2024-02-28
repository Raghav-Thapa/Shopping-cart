import { useEffect, useState } from "react";
import { Header } from "../components/HeaderComponent";
import useProduct from "../hooks/useProduct";
import ProductCard from "../components/ProductCard";

const ShoppingPage = () => {
  const {data, error, loading} = useProduct("/products");
  const [products, setProducts] = useState([]);
// console.log(data)
  useEffect(() => {
    if (data && data.length > 0) {
      setProducts(data);
    }
  }, [data]);
  console.log(products)

  // if (error) return <p>An error occurred. Please check back later.</p>;
  // if (loading) return <LoadingPage />;

  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div className=" bg-stone-50 min-h-screen">
            <ProductCard/>
        </div>
      </div>
    </>
  );
};

export default ShoppingPage;
