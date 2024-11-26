import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


const ItemCard = ({e, fn }) => {
  return (
    <>
        <div className="card">
          <img src={e.img} alt="carta" className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title">{e.nombre}</h3>
            <p className="card-text">{e.palo}</p>
            <p className="card-text">${e.precio}</p>
            <button type="button" className="btn btn-details" color="blue" text="Detalles"><Link to={`/producto/${e.id}`}>Detalles</Link></button>
            <Button fn={fn} type="button" className="btn btn-success" color="green" text="Agregar al carrito"/>
          </div>
        </div>
    </>
  )
}

export default ItemCard