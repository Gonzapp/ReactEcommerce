import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { addOrder } from '../../firebase/firebase'
import Swal from 'sweetalert2'

const CheckoutForm = () => {
  const [cart, setCart, addItem, totalCart, setTotalCart, clearCart] = useContext(CartContext)
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

      const newOrder = {
        buyer,
        items: cart,
        total,
        date: new Date().toLocaleString(),
      }

      const orderId = await addOrder(newOrder)

      if (orderId) {
        const currentDate = new Date().toLocaleString()

        Swal.fire({
          title: 'Orden Confirmada',
          text: `Orden ID: ${orderId}
          \n Fecha y Hora: ${currentDate}`,
          icon: 'success',
          confirmButtonText: 'Aceptar',
        }).then(() => {
          clearCart()  
          navigate('/')  
        })
      }
    } catch (error) {
      console.error('Error al enviar la orden:', error)
    }
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Confirmar Orden</h1>
      <form className="border p-4 rounded shadow-sm" onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary w-100">
          Confirmar Compra
        </button>
      </form>
    </div>
  )
}

export default CheckoutForm
