
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function NavBar({valor}) {
  return (
  <nav className='nav-container'>
    <button><h1><Link to='/'>5 de Copa</Link></h1></button>
    <button><Link to='/productos'>Productos</Link></button>
    <button><Link to='/contacto'>Contacto</Link></button>
    <CartWidget valor={valor}/>
  </nav>
  );
}

export default NavBar;