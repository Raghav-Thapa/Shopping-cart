import { NavLink, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { Header } from "../components/HeaderComponent";
import { useContext, useState } from "react";
import { CartContext } from "../store/CartContext";
import { ProductDetail } from "../components/ProductComponent";

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();
  const { data, loading } = useProduct(`/products/${id}`);
  const [quantity, setQuantity] = useState(1);
  const [cartAdded, setCartAdded] = useState(false);

  const handleCartAdded = () => {
    setCartAdded(true);

    setTimeout(() => {
      setCartAdded(false);
    }, 2000);
  };

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
  const handleSubmitCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(id);
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
        {loading ? (
          <i className=" text-center w-full mt-20 text-8xl fa-solid fa-spinner fa-spin-pulse"></i>
        ) : (
          <ProductDetail
            data={data}
            decreaseQuantity={decreaseQuantity}
            quantity={quantity}
            handleInputChange={handleInputChange}
            increaseQuantity={increaseQuantity}
            handleSubmitCart={handleSubmitCart}
            handleCartAdded={handleCartAdded}
            cartAdded={cartAdded}
          />
        )}
      </div>
    </>
  );
};

export default ProductPage;
