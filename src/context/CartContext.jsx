import { createContext, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState([]);

  const addItem = (item) => {
    console.log("Adding item to cart:", item);
    setCart([...cart, item]);
  };

  const totalItem = (item) => {
    console.log("Adding item to cartwidget:AAAAAAAAAAAA", totalCart);
    setTotalCart([...totalCart, item]);
  };

  return (
    <CartContext.Provider value={[cart, setCart, addItem, totalCart, setTotalCart, totalItem]}>
      {children}
    </CartContext.Provider>
  );
}
