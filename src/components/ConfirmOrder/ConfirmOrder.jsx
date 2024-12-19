import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Usa useNavigate en lugar de useHistory
import { addOrder } from '../../firebase/firebase'; // Asegúrate de importar la función addOrder correctamente


const ConfirmOrder = ({ cart }) => {
  const [buyer, setBuyer] = useState({ email: '', name: '', phone: '' });
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calcula el total de la compra
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const newOrder = {
      buyer,
      date: new Date(),
      items: cart.map((item) => ({ id: item.id, title: item.title, price: item.price })),
      total,
    };

    try {
      const orderId = await addOrder(newOrder);
      alert(`¡Orden creada con éxito! ID: ${orderId}`);
      // Redirige a otra ruta después de la creación del pedido
      navigate('/'); // Redirecciona al inicio o a otra página de interés
    } catch (error) {
      console.error('Error al crear la orden:', error);
      alert('Hubo un error al crear la orden, por favor intenta nuevamente.');
    }
  };

  return (
    <div className="confirm-order">
      <h2>Confirmar Orden</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Confirmar Compra
        </button>
      </form>
    </div>
  );
};

export default ConfirmOrder;
