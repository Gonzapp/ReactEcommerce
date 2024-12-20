import React from 'react'
import ItemCard from '../ItemCard/ItemCard'

const ItemList = ({ products }) => {
  console.log(products)
  return (
    <div className="container mt-4">
      <div className="row">

      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <ItemCard product={product} />
          </div>
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
      </div>
    </div>
    
  )
}





export default ItemList;