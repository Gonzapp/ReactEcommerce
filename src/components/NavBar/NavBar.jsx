
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

function NavBar({valor}) {
  return (
  <nav className='nav-container'>
    <h1>5 de Copa</h1>
    <CartWidget valor={valor}/>
  </nav>
  );
}

export default NavBar;