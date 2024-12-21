import React, { useContext } from "react"
import { BsCart4 } from "react-icons/bs"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {
  const [, , , totalCart] = useContext(CartContext)
  

  return (
    <>
      {totalCart > 0 ? (
        <div className="cartWidget cartItem">
          <span>
            <BsCart4 color="white" size="1.3rem" /> {totalCart}
          </span>
        </div>
      ) : (
        <div className="cartWidget cartEmpty">
          <h4>
            <BsCart4 color="white" size="1.3rem" />
            Vacío
          </h4>
        </div>
      )}
    </>
  )
}

export default CartWidget
