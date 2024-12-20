import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import FooterContainer from '../FooterContainer/FooterContainer'




const HomeContainer = () => {

  return (
    <div>
      <h2 className="category-title text-center py-3">Todos los productos para el embellecimiento personal</h2>
      <ItemListContainer />
    </div>
  )
}

export default HomeContainer