import { createContext, useState } from "react"

export const CartContext = createContext(false)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [totalCart, setTotalCart] = useState(0)
  

  const addItem = (item) => {
    const existingItem = cart.find((product) => product.id === item.id)

    if (existingItem) {
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + item.quantity }
            : product
        )
      )
    } else {
      setCart([...cart, item])
    }

    setTotalCart((prevTotal) => prevTotal + item.quantity)
  }

  const clearCart = () => {
    setCart([])
    setTotalCart(0)
  }

  return (
    <CartContext.Provider
      value={[cart, setCart, addItem, totalCart, setTotalCart, clearCart]}
    >
      {children}
    </CartContext.Provider>
  )
}
