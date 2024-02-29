import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

const addToCart = (id) => {
  setCartItems((prevItems) => [...prevItems, id.toString()]);
};
  

const removeFromCart = (id) => {
  setCartItems((prevItems) => {
    const index = prevItems.lastIndexOf(id.toString());
    if (index > -1) {
      return [...prevItems.slice(0, index), ...prevItems.slice(index + 1)];
    }
    return [...prevItems];
  });
};

  const increaseQuantity = (id) => {
    addToCart(id);
  };

  const decreaseQuantity = (id) => {
    removeFromCart(id);
  };

 const removeItemFromCart = (id) => {
   setCartItems((prevItems) =>
     prevItems.filter((itemId) => itemId !== id.toString())
   );
 };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
