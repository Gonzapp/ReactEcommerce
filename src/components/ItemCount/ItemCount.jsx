
export const incrementQuantity = (cart, setCart, id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }
  
  export const decrementQuantity = (cart, setCart, id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    )
  }

  
  
  export const addOrUpdateItem = (cart, setCart, product, quantity = 1) => {
    const productWithId = { ...product, id }
    const existingItem = cart.find((item) => item.id === productWithId.id)
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, quantity }])
    }
  }




