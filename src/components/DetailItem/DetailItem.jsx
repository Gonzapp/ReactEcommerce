import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../firebase/firebase';
import { CartContext } from '../../context/CartContext';
import { LoadingContext } from '../../context/LoadingContext';
import { ProductsContext } from '../../context/ProductsContext';

export default function DetailItem() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart, addItem, totalCart, setTotalCart, totalItem] = useContext(CartContext); // Desempaquetamos correctamente el contexto
  const { setLoading } = useContext(LoadingContext);
  const [error, setError] = useState(null);

  const [products] = useContext(ProductsContext); // Usamos ProductsContext para encontrar el producto correcto

  useEffect(() => {
    setLoading(true); // Muestra un mensaje de carga
    getSingleProduct(id)
      .then((data) => {
        if (data) {
          setProduct(data); // Almacena el producto encontrado
        } else {
          setError('Producto no encontrado');
        }
      })
      .catch(() => setError('No se pudo cargar el producto'))
      .finally(() => setLoading(false));
  }, [id, setLoading]);

  const handleClick = () => {
    if (product) {
      const productWithId = { ...product, id }; // PASA EL ID CORRECTAMENTE
        
     const existingItem = cart.find((item) => item.id === productWithId.id);
      if (existingItem) {
        console.log("DetailItems: SI EL PRODUCTO YA ESTA EN EL CARRITO to add:", product);
        // Si el producto ya está en el carrito, incrementa la cantidad
        totalItem({ ...productWithId, quantity: +1 });
        setCart(cart.map((item) =>
          item.id === productWithId.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Si el producto no está en el carrito, agréguelo como nuevo
      console.log("DetailItems: Product  NO EXISTINGITEM to add:", product);
      addItem({ ...productWithId, quantity: 1 });
      totalItem({ ...productWithId, quantity: +1 });
      }
    }
  };

  return (
    <div className="DetailItem">
      {error ? (
        <p>{error}</p>
      ) : product ? (
        <>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <button onClick={handleClick} className="btn btn-success">
            Agregar al carrito
          </button>
        </>
      ) : (
        <p>Cargando producto...</p> // Muestra un mensaje de carga mientras se obtiene el producto
      )}
    </div>
  );
}
