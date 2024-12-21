import React, { useEffect, useContext, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsByCategory } from "../../firebase/firebase"
import { LoadingContext } from "../../context/LoadingContext"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { loading, setLoading } = useContext(LoadingContext) 
  const { category } = useParams()

  useEffect(() => {
    setLoading(true) 

    if (category) {

      getProductsByCategory(category)
        .then((filteredProducts) => {
          setProducts(filteredProducts)
        })
        .catch((error) => console.error("Error al filtrar productos:", error))
        .finally(() => setLoading(false))
    } else {
     
      getProducts()
        .then((allProducts) => {
          setProducts(allProducts)
        })
        .catch((error) => console.error("Error al obtener productos:", error))
        .finally(() => setLoading(false))
    }
  }, [category, setLoading])

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
  )
}

export default ItemListContainer
