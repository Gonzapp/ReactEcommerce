import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getProduct } from '../../data/bakend'


export default function DetailItem() {
  const {id}= useParams()
  const [e, setProduct] = useState({})
  useEffect(() => {
setProduct(getProduct(id))
  }, [])
  return (
    <>
    <div  className='DetailItem'>
      <h1>Carta {id} de {e.palo}</h1>
      <h3>Nombre: {e.nombre}</h3>
      <img src={e.img} alt=""/>
      <p>Descripcion: {e.text}</p>
      <p>Palo: {e.palo}</p>
      <p>Rareza: {e.tier}</p>
      <p>Precio: {e.precio}</p>
    </div>
   </>
  )
}