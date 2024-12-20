import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../../firebase/firebase'
import { CartContext } from '../../context/CartContext'


export default function ItemDetailContainer() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [cart, setCart, addItem, totalCart, setTotalCart, totalItem] = useContext(CartContext)

  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1) // Estado para manejar la cantidad

  useEffect(() => {
    getSingleProduct(id)
      .then((data) => {
        if (data) {
          setProduct(data)
        } else {
          setError('Producto no encontrado')
        }
      })
      .catch(() => setError('No se pudo cargar el producto'))
  }, [id])

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleClick = () => {
    if (product) {
      const productWithId = { ...product, id }
      const existingItem = cart.find((item) => item.id === productWithId.id)

      if (existingItem) {
        setCart(
          cart.map((item) =>
            item.id === productWithId.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        )
      } else {
        addItem({ ...productWithId, quantity })
      }
      setQuantity(1) // Reinicia la cantidad después de agregar al carrito
    }
  }

  return (
    <div className="container mt-5">
      {error ? (
        <p className="alert alert-danger">{error}</p>
      ) : product ? (
        <div className="row">
          <h2>Detalle del producto</h2>
          <div className="col-md-6 image-container">
            <img src={product.image} alt={product.title} className="img-fluid" />
          </div>
          <div className="col-md-6 content-container">
            <h1>{product.title}</h1>
            <p>Stock disponible: {product.stock}</p>
            <p>{product.description}</p>
            <div className="price-container">
              <span>Precio: $</span>
              <p className="text-success fw-bold m-0">{product.price}</p>
            </div>
            <div className="quantity-container d-flex align-items-center">
              <button
                className="btn btn-outline-secondary btn-sm me-2"
                onClick={decrementQuantity}
              >
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                className="btn btn-outline-secondary btn-sm me-3"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            <button
              onClick={handleClick}
              className="btn btn-success btn-lg mt-3"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  )
}
