import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../firebase/firebase";
import { LoadingContext } from "../../context/LoadingContext";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]); // Estado para guardar los productos
  const { loading, setLoading } = useContext(LoadingContext); // Usamos el contexto de carga
  const { category } = useParams(); // Obtener el parámetro de la URL

  useEffect(() => {
    setLoading(true); // Activar estado de carga al iniciar

    if (category) {
      // Si hay una categoría seleccionada, obtener productos filtrados
      getProductsByCategory(category)
        .then((filteredProducts) => {
          console.log(filteredProducts);
          setProducts(filteredProducts);
        })
        .catch((error) => console.error("Error al filtrar productos:", error))
        .finally(() => setLoading(false));
    } else {
      // Si no hay categoría seleccionada, obtener todos los productos
      getProducts()
        .then((allProducts) => {
          setProducts(allProducts);
        })
        .catch((error) => console.error("Error al obtener productos:", error))
        .finally(() => setLoading(false));
    }
  }, [category, setLoading]); // Se ejecuta cada vez que la categoría cambia

  return (
    <div>
      <h1>{category ? `${category}` : ""}</h1>
      {loading ? (
        <div></div>
      ) : products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
