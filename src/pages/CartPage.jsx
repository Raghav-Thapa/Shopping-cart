import { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/CartContext";
import { useProductCart } from "../hooks/useProduct";
import { Header } from "../components/HeaderComponent";
import { NavLink } from "react-router-dom";
import { CartTable } from "../components/CartComponent";

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItemFromCart } =
    useContext(CartContext);
  const { data: cartProducts, loading } = useProductCart(cartItems);
  const [uniqueCartProducts, setUniqueCartProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    if (cartItems && cartProducts) {
      console.log("cartItems", cartItems);
      console.log("cartProducts", cartProducts);
      const calculateQuantity = (id) => {
        return cartItems.filter((itemId) => Number(itemId) === id).length;
      };

      const calculateTotalPrice = (id, price) => {
        const quantity = calculateQuantity(id);
        return quantity * price;
      };

      const uniqueProducts = Array.from(
        new Set(cartProducts.map((product) => product.id))
      ).map((id) => {
        const product = cartProducts.find((product) => product.id === id);
        return {
          ...product,
          quantity: calculateQuantity(id),
          totalPrice: parseFloat(
            calculateTotalPrice(id, product.price).toFixed(2)
          ),
        };
      });

      setUniqueCartProducts(uniqueProducts);

      const subtotal = parseFloat(
        uniqueProducts
          .reduce((total, product) => total + product.totalPrice, 0)
          .toFixed(2)
      );
      const discount = parseFloat((subtotal * 0.1).toFixed(2));
      const shippingCost = 15;
      const grandTotal = parseFloat(
        (subtotal - discount + shippingCost).toFixed(2)
      );
      setSubtotal(subtotal);
      setDiscount(discount);
      setShippingCost(shippingCost);
      setGrandTotal(grandTotal);
    }
  }, [cartItems, cartProducts]);

  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <div className="text-center font-serif text-3xl mt-10 text-emerald-900">
            <h1>Your Cart</h1>
          </div>

          <div className="p-12">
            {loading ? (
              <i className=" text-center w-full text-8xl fa-solid fa-spinner fa-spin-pulse"></i>
            ) : (
              <CartTable
                uniqueCartProducts={uniqueCartProducts}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                removeItemFromCart={removeItemFromCart}
                subtotal={subtotal}
                discount={discount}
                shippingCost={shippingCost}
                grandTotal={grandTotal}
              />
            )}
            <div className="text-end -mt-5">
              <NavLink to="/">
                <button className="mt-7 font-serif text-white bg-black p-3 me-7 text-sm rounded-lg">
                  CHECKOUT
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
