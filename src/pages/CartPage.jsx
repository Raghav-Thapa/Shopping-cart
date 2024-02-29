import { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/CartContext";
import  { useProductCart } from "../hooks/useProduct";
import { Header } from "../components/HeaderComponent";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const { data: cartProducts, error, loading } = useProductCart(cartItems);
   const [uniqueCartProducts, setUniqueCartProducts] = useState([]);
 
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
            totalPrice: calculateTotalPrice(id, product.price),
          };
        });

        setUniqueCartProducts(uniqueProducts);
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
            <table className="table-fixed w-full   font-serif ">
              <tr className="border text-md h-10">
                <th className="border" colSpan="2">
                  Item
                </th>
                <th className="border">Price</th>
                <th className="border">Quantity</th>
                <th className="border">Total</th>
              </tr>
              {uniqueCartProducts.map((product) => (
                <tr className="border">
                  <td className=" flex justify-center items-center m-3">
                    <img className="" width={100} src={product.image} alt="" />
                  </td>
                  <td className="border ps-3 pe-3">
                    <h1 className="text-lg">{product.title}</h1>
                    <h1 className="text-sm text-emerald-800">
                      {product.category}
                    </h1>
                  </td>
                  <td className="border text-center">{product.price}</td>
                  <td className="border text-center">{product.quantity}</td>
                  <td className="border text-center">{product.totalPrice}</td>
                </tr>
              ))}
              <tr className="">
                <td></td>
                <td></td>
                <td></td>
                <td className="p-5 text-sm">
                  <div className="flex flex-col mt-3">
                    <div className="mb-2">Sub Total: </div>
                    <div className="mb-2">Discount: </div>
                    <div className="mb-2">Shipping Cost: </div>
                    <div>Grand Total: </div>
                  </div>
                </td>
                <td className="pe-7 text-sm">
                  <div className="flex flex-col items-end">
                    <div className="mb-2">$ 11111 </div>
                    <div className="mb-2">$ 111 </div>
                    <div className="mb-2">$ 50</div>
                    <div>$111111 </div>
                  </div>
                </td>
              </tr>
            </table>
            <div className="text-end -mt-5">
              <button className="mt-7 font-serif text-white bg-black p-3 me-7 text-sm rounded-lg">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
