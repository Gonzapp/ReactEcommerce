import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const OrderSummary = () => {
  const [cart, setCart, addItem, totalCart, setTotalCart, totalItem] = useContext(CartContext); // Obtiene los ítems del carrito

  // Agrupar productos por id y calcular cantidades
  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);



  // Función para incrementar la cantidad de un producto en el carrito
  const incrementQuantity = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  // Función para decrementar la cantidad de un producto en el carrito
  const decrementQuantity = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item));
  };

  // Función para eliminar un producto del carrito
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Calcular el total del carrito
  const calculateTotal = () => {
    return groupedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  const calculateTotalItem = () => {
    return groupedCart.reduce((acc, item) => acc * item.quantity, 0);
  };
  

  return (
    <div className="cart-summary">
      <h1>Resumen del Carrito</h1>
      {groupedCart.length > 0 ? (
        <ul>
          {groupedCart.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} style={{ width: '50px' }} />
              <p>{item.title}</p>
              <p>Cantidad: 
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                {item.quantity}
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </p>
              <p>Precio: ${item.price}</p>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </li>
          ))}
          <li>
            <strong>Total: ${calculateTotal()}</strong>
          </li>
        </ul>
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
    </div>
  );
};

export default OrderSummary;
