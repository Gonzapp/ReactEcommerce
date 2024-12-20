import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { addOrder } from '../../firebase/firebase'

const ConfirmOrder = () => {
  const [cart, setCart] = useContext(CartContext)
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value })
  }

  const validateForm = () => {
    if (!buyer.name || !buyer.email || !buyer.phone || !buyer.address) {
      setError('Todos los campos son obligatorios.')
      return false
    }
    setError('')
    return true
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    try {
      // Calcular el total del carrito
      const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

      const newOrder = {
        buyer,
        items: cart,
        total, // Guardar el total calculado
        date: new Date().toLocaleString(),
      }

      const orderId = await addOrder(newOrder)

      if (orderId) {
        // Muestra el mensaje de confirmación
        alert(`Orden confirmada con éxito. ID: ${orderId}`)
        // Reinicia el carrito
        setCart([])
        // Redirige al HomeContainer
        navigate("/")
      }
    } catch (error) {
      console.error('Error al enviar la orden:', error)
    }
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Confirmar Orden</h1>
      <form className="border p-4 rounded shadow-sm" onSubmit={(e) => e.preventDefault()}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={buyer.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección:</label>
          <input
            type="text"
            name="address"
            className="form-control"
            value={buyer.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={buyer.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono:</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={buyer.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary w-100" onClick={handleSubmit}>
          Confirmar Compra
        </button>
      </form>
    </div>
  )
}

export default ConfirmOrder
