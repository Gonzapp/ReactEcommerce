import { createContext, useEffect, useState } from "react";
import { getProducts } from "../firebase/firebase";

export const ProductsContext = createContext(false)

export function ProductsProvider({children}){
    const [products, setProducts]=useState([]); 
      
    useEffect(()=>{
        getProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error al obtener productos:", error));
       }, []);

    return(
        <ProductsContext.Provider value={[products, setProducts]}>
            {children}
        </ProductsContext.Provider>
    )   
}
