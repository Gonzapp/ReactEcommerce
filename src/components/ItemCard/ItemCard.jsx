import React from 'react'


const ItemCard = ({e}) => {
  return (
    <div>
          <h3>
            {e.nombre}
          </h3>
          <img src={e.img} alt="carta" />
          <p>{e.palo}</p>
          <p>${e.precio}</p>
        </div>
  )
}

export default ItemCard