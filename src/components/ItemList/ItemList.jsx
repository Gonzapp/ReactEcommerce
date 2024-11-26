import React from 'react'
import ItemCard from '../ItemCard/ItemCard'

const ItemList = ({products}) => {

  return (
    <div className='itemContainer'>
      {products.map((e) => {
      return(
      <ItemCard e={e} key={e.nCarta}/>
  )}
    ) }
  </div>
  )
}

export default ItemList