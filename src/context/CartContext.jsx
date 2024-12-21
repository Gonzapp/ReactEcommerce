import React, { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [totalCart, setTotalCart] = useState(0)

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.quantity, 0)
    setTotalCart(total)
  }, [cart])

  
  const addItem = (product) => {
    const existingItem = cart.find((item) => item.id === product.id)

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      )
    } else {
      setCart([...cart, product])
    }
  }

  
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={[cart, setCart, addItem, totalCart, setTotalCart, clearCart]}
    >
      {children}
    </CartContext.Provider>
  )
}
