// import React from 'react'
// // import ItemCard from '../ItemCard/ItemCard'
// import { useState, useEffect } from 'react';
// import {getProducts } from '../../firebase/firebase';
// import ItemCard from '../ItemCard/ItemCard';

// const ItemList = ({products}) => {

//     const [singleProd, setSingleProd] = useState(null);
//     const [myProds, setMyProds] = useState([]);
  
//     useEffect(() => {
//       //  getSingleProduct('1e0n73w6ChoB3jcEhQM8').then((productos) =>
//       //   setSingleProd(productos)
//       // );
//       getProducts().then((productos) => setMyProds(productos)); 
      
//     //   filterProductsByPrice(10000).then((products) => setMyProds(products));
//     }, []);
  
//     return (
//       <section className='itemList'>
//         {singleProd && (
//         <>
//           <p>
//             Producto: {singleProd.title} - Precio $ {singleProd.price} - Descripcion: {singleProd.description} 
//             <img src= {singleProd.image} alt="" />
//           </p>
//           </>
//         )}
//         {myProds && myProds.map((e) => <div className='itemList' key={e.id}><ItemCard  e={e} /></div>)}
//       </section>
//     );
//   }

// //////////////1,46 


// //   return (
// //     <>
// //     <div className='itemList'>
// //       {products.map((e) => {
// //         return(
// //           <ItemCard e={e} key={e.id}/>
// //         )}
// //       ) }
// //     </div>
// //   </>
// //   )
// // }

// export default ItemList


import React from 'react'
import ItemCard from '../ItemCard/ItemCard'

const ItemList = ({ products }) => {
  console.log(products)
  return (
    <div className="container mt-4">
      <div className="row">

      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <ItemCard product={product} />
          </div>
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
      </div>
    </div>
    
  )
}





export default ItemList;