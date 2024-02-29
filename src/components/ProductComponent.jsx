import doneImage from "../assets/tick.gif";

export const ProductDetail = ({
  data,
  decreaseQuantity,
  quantity,
  handleInputChange,
  increaseQuantity,
  handleSubmitCart,
  handleCartAdded,
  cartAdded,
}) => {
  return (
    <>
      <div className="flex ml-10 mr-10 p-10 ">
        <div className="w-1/3">
          <img className="" width={400} src={data?.image} alt={data?.title} />
        </div>
        <div className="w-2/4">
          <div className=" font-serif text-4xl">{data?.title}</div>
          <div className=" font-serif text-emerald-800 text-sm mb-3">
            Category: <span> {data?.category}</span>
          </div>
          <div>
            <p className=" font-serif text-md">{data?.description}</p>
          </div>
          <div className="flex mt-5">
            <div className=" font-serif text-3xl ">${data?.price}</div>
            <div className=" font-serif text-sm mt-4 ms-2">
              {" "}
              <span>(</span>
              <i className="fa-solid fa-star text-xs"></i>
              {data?.rating.rate}
              <span>)</span>
            </div>
          </div>
          <div className="mt-7">
            <button onClick={decreaseQuantity}>
              <i className="fa-solid fa-minus"></i>
            </button>
            <input
              className="border w-10 ms-3 me-3 text-center"
              value={quantity}
              onChange={handleInputChange}
              type="number"
            />
            <button onClick={increaseQuantity}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <div className="flex">
            <div className="z-50">
              <button
                onClick={() => {
                  handleSubmitCart();
                  handleCartAdded();
                }}
                className="mt-5  font-serif text-white bg-black p-3 text-md rounded-lg"
              >
                Add to Cart
              </button>
            </div>
            <div>
              {cartAdded && (
                <img className="-mt-2 -ms-4" width={150} src={doneImage}></img>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
