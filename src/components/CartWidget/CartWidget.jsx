import React from 'react'
import { BsCart4 } from "react-icons/bs";

const CartWidget = ({valor}) => {
  return (
    <div><BsCart4 color="white" size="1.3rem"/>
        <span>{valor}</span>
    </div>
    
  )
}

export default CartWidget