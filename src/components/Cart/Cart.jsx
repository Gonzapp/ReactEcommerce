import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart, addItem, totalCart, setTotalCart, totalItem] = useContext(CartContext);

  // Agrupar productos por id y calcular cantidades
  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  const incrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) } // Limitar al valor máximo del stock
          : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) } // Limitar al valor mínimo de 1
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return groupedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Resumen del Carrito</h1>
      {groupedCart.length > 0 ? (
        <div className="card shadow-sm">
          <ul className="list-group list-group-flush">
            {groupedCart.map((item) => (
              <li key={item.id} className="list-group-item d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    className="me-3"
                  />
                  <div>
                    <p className="mb-1 fw-bold">{item.title}</p>
                    <p className="mb-1">
                      Precio: <span className="text-success fw-bold">${item.price}</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => decrementQuantity(item.id)}>
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm me-3"
                    onClick={() => incrementQuantity(item.id)}
                    disabled={item.quantity >= item.stock} // Deshabilitar si alcanza el stock
                  >
                    +
                  </button>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => removeItem(item.id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
            <li className="list-group-item text-end">
              <strong>Total: ${calculateTotal()}</strong>
            </li>
          </ul>
          <div className="card-footer text-end">
            <Link to="/checkout" className="btn btn-primary">
              Confirmar Compra
            </Link>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning text-center">Tu carrito está vacío.</div>
      )}
    </div>
  );
};

export default Cart;
