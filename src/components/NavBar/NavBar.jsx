import React, { useContext } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CategoryButtons from '../CategoryButtons/CategoryButtons';


function NavBar() {
  const [cart] = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm ">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold fs-4">
          Timeless Beauty
        </Link>
        <button className="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="me-auto">
            <CategoryButtons />
          </div>
          <div className="d-flex align-items-center">
            {cart.length > 0 ? (
              <Link to="/carrito" className="btn btn-outline-primary">
                <CartWidget />
              </Link>
            ) : (
              <CartWidget />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
