import React from "react"
import { Link } from "react-router-dom"

const ItemCard = ({ product }) => {
  return (
    <div className="card h-100" style={{ maxWidth: "18rem", margin: "0 auto" }}>
      <img src={product.image} alt={product.title} className="card-img-top"/>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-truncate">{product.title}</h5>
        <p className="card-text mb-2">Precio: ${product.price}</p>
        <Link to={`/producto/${product.category}/${product.id}`}>
          <button className="btn btn-success w-100">Más Detalles</button>
        </Link>
      </div>
    </div>
  )
}

export default ItemCard
