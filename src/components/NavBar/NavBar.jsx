
import React, { useContext } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CategoryButtons from '../CategoryButtons/CategoryButtons';

function NavBar() {
  const [cart] = useContext(CartContext)  

  return (
  <nav className='nav-container'>
    <h1 className='nav-title'><Link to='/'>Timeless Beauty</Link></h1>
    <CategoryButtons/>
    {cart.length > 0 
    ?
    <Link to='/carrito'><CartWidget/></Link>
    : 
    <CartWidget/>}
  </nav>
  );
}

export default NavBar;