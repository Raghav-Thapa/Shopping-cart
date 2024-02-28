import { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/CartContext";
import useProduct from "../hooks/useProduct";
import { Header } from "../components/HeaderComponent";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  const [cartProducts, setCartProducts] = useState([])

  const { data, error, loading } = useProduct(`/products/${cartItems}`);

  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div className="flex">
          <div className="w-2/3">Table for shopping cart</div>
          <div className="w-1/3">Table for totals</div>
        </div>
        <h1>Cart Items are Below</h1>
        <h1>{cartItems}</h1>
        <h1>{data?.title}</h1>
        <img src={data?.image} alt="" />
      </div>
    </>
  );
};

export default CartPage;
