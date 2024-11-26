import React from 'react'
import ItemCard from '../ItemCard/ItemCard'

const ItemList = ({products, fn}) => {

  return (
    <>
    <div className='itemList'>
      {products.map((e) => {
        return(
          <ItemCard fn={fn} e={e} key={e.id}/>
        )}
      ) }
    </div>
  </>
  )
}

export default ItemList