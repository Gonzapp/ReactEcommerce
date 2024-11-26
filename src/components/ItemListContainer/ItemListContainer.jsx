import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByPalo } from '../../data/bakend'



const ItemListContainer = ({mensaje, fn}) => {

  const[products, setProducts]= useState([])
  const[ palo, setPalo ] = useState("")

  useEffect(() =>{

    if (palo) {
      getProductsByPalo(palo)
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

  const changePalo = (palo) =>{
    setPalo(palo)
  }

  return (

    <>
    <div>
    <div className='itemList-Container'>{mensaje}</div>
    <Button fn={fn} text="Agregar al carrito"/>
    </div>

    <div>
    <Button fn={() => changePalo("Palo") } text="Palo"/>
    <Button fn={() => changePalo("Copa") } text="Copa"/>
    <Button fn={() => changePalo("Espada") } text="Espada"/>
    <Button fn={() => changePalo("Oro") } text="Oro"/>
    <ItemList products={products}/>
    </div>
           
    </>

)
}

export default ItemListContainer
