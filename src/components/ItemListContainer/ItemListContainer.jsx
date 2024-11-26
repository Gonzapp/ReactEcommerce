import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import ItemList from '../ItemList/ItemList'
import { getProducts,  getProductsByCategory } from '../../data/bakend'


const ItemListContainer = ({mensaje, fn}) => {

  const[products, setProducts]= useState([])
  const[ palo, setPalo ] = useState("")

  useEffect(() =>{

    if (palo) {
      getProductsByCategory(palo)
      .then(res => setProducts(res))
      .catch(e => console.error(e))
      .finally(console.log("carga finalizada"))
      
    }else{
      getProducts()
      .then(res => setProducts(res))
      .catch(e => console.error(e))
      .finally(console.log("carga finalizada"))
    }
  }, [palo])

const changePalo = (palo) => {
  setPalo(palo)
}

  return (

    <>
    <div className='ItemListContainerFilter'>
      <Button fn={() => changePalo("") } text="Todos"/>
      <Button fn={() => changePalo("Basto") } text="Basto"/>
      <Button fn={() => changePalo("Copa") } text="Copa"/>
      <Button fn={() => changePalo("Espada") } text="Espada"/>
      <Button fn={() => changePalo("Oro") } text="Oro"/>
    </div>
    <div>
      <ItemList fn={fn} products={products}/>
    </div>     
    </>
)
}

export default ItemListContainer
