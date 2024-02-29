export const CartTable = ({
  uniqueCartProducts,
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
  subtotal,
  discount,
  shippingCost,
  grandTotal,
}) => {
  return (
    <>
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
                <img className="" width={100} src={product.image} alt="" />
              </td>
              <td className="border ps-3 pe-3">
                <h1 className="text-lg">{product.title}</h1>
                <h1 className="text-sm text-emerald-800">{product.category}</h1>
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
                  <i className=" fa-solid fa-trash-can"></i>
                </button>
              </td>
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
                <div className="mb-2">$ {subtotal} </div>
                <div className="mb-2">$ {discount} </div>
                <div className="mb-2">$ {subtotal ? shippingCost : 0}</div>
                <div>$ {subtotal ? grandTotal : 0} </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};