import React, { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { getSingleProduct } from "../../firebase/firebase"
import { CartContext } from "../../context/CartContext"
import Toastify from "toastify-js"
import ItemCount from "../ItemCount/ItemCount" 

export default function ItemDetailContainer() {
  const { id } = useParams()
  const [cart, setCart, addItem, totalCart, setTotalCart, clearCart] =
    useContext(CartContext)

  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    getSingleProduct(id)
      .then((data) => {
        if (data) {
          setProduct(data)
        } else {
          setError("Producto no encontrado")
        }
      })
      .catch(() => setError("No se pudo cargar el producto"))
  }, [id])

  const incrementQuantity = () => {
    if (product && quantity < product.stock) {
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
      const productWithId = { ...product, id, quantity }

      const existingItem = cart.find((item) => item.id === productWithId.id)
      const totalInCart = existingItem ? existingItem.quantity : 0
      const newTotal = totalInCart + quantity

      if (newTotal > product.stock) {
        Toastify({
          text: `No hay más stock disponible de ${product.title}.`,
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          offset: {
            x: 0,
            y: 60,
          },
          backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        }).showToast()
        return
      }

      addItem(productWithId)

      Toastify({
        text: `${quantity} x ${product.title} añadido(s) al carrito.`,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        offset: {
          x: 0,
          y: 60,
        },
        backgroundColor:
          "linear-gradient(to right, rgb(245, 86, 240), rgb(243, 190, 245))",
      }).showToast()

      setQuantity(1)
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

            <ItemCount
              quantity={quantity}
              onIncrement={incrementQuantity}
              onDecrement={decrementQuantity}
            />
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
