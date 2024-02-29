import { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/CartContext";
import { useProductCart } from "../hooks/useProduct";
import { Header } from "../components/HeaderComponent";

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItemFromCart } =
    useContext(CartContext);
  const { data: cartProducts, error, loading } = useProductCart(cartItems);
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
          totalPrice: parseFloat( calculateTotalPrice(id, product.price).toFixed(2)),
        };
      });

      setUniqueCartProducts(uniqueProducts);

       const subtotal = parseFloat(
         uniqueProducts
           .reduce((total, product) => total + product.totalPrice, 0)
           .toFixed(2)
       );
       const discount = parseFloat((subtotal * 0.1).toFixed(2)); 
       const shippingCost = subtotal > 100 ? 0 : 15; 
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
              <i class=" text-center w-full text-8xl fa-solid fa-spinner fa-spin-pulse"></i>
            ) : (
              <table className="table-fixed w-full font-serif ">
                <tbody>
                  <tr className="border text-md h-10">
                    <th className="border" colSpan="2">
                      Item
                    </th>
                    <th className="border">Price</th>
                    <th className="border">Quantity</th>
                    <th className="border">Total</th>
                  </tr>
                  {uniqueCartProducts.map((product, index) => (
                    <tr key={index} className="border">
                      <td className=" flex justify-center items-center m-3">
                        <img
                          className=""
                          width={100}
                          src={product.image}
                          alt=""
                        />
                      </td>
                      <td className="border ps-3 pe-3">
                        <h1 className="text-lg">{product.title}</h1>
                        <h1 className="text-sm text-emerald-800">
                          {product.category}
                        </h1>
                      </td>
                      <td className="border text-center">{product.price}</td>
                      <td className="border text-center p-6">
                        <button
                          className="me-3"
                          onClick={() => decreaseQuantity(product.id)}
                        >
                          <i className=" text-sm font-semibold fa-solid fa-minus"></i>
                        </button>
                        {product.quantity}{" "}
                        <button
                          className="ms-3"
                          onClick={() => increaseQuantity(product.id)}
                        >
                          <i className="text-sm font-semibold fa-solid fa-plus"></i>
                        </button>
                        <button
                          className="float-end "
                          onClick={() => removeItemFromCart(product.id)}
                        >
                          <i class=" fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                      <td className="border text-center">
                        {product.totalPrice}
                      </td>
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
                        <div className="mb-2">$ {subtotal} </div>
                        <div className="mb-2">$ {discount} </div>
                        <div className="mb-2">$ {shippingCost}</div>
                        <div>${grandTotal} </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}

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
