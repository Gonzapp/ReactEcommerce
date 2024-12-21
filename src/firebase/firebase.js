import { initializeApp } from "firebase/app"
import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    addDoc,
    updateDoc,
    writeBatch,
} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDntz241LDowaPXoF2mhS88qUx-NS05Spc",
    authDomain: "ecommerce-2f9cc.firebaseapp.com",
    projectId: "ecommerce-2f9cc",
    storageBucket: "ecommerce-2f9cc.firebasestorage.app",
    messagingSenderId: "1024584292672",
    appId: "1:1024584292672:web:e22d697eb114b0b4a542a5"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export async function getSingleProduct(id) {
  const documentRef = doc(db, 'productos', id)

  try {
      const snapshot = await getDoc(documentRef)
      if (snapshot.exists()) {
          return snapshot.data() // Retorna los datos del documento si existe
      } else {
          console.log('El documento no existe!')
          return null // O manejar el error de alguna otra manera según tus necesidades
      }
  } catch (error) {
      console.error('Error al obtener el documento', error)
      return null // Opcional: manejar el error y retornar null
  }
}

export async function getProducts() {
    try {


      const querySnapshot = await getDocs(collection(db, 'productos'))

      if (querySnapshot.size !== 0) {
        const productsList = querySnapshot.docs.map((e) => {
          return {
            id: e.id,
            ...e.data(),
          }
        
          
        })
        return productsList
      } else {
        return []
      }
    } catch (error) {
      return []
    }
  }

  export async function getProductsByCategory(category) {
    try {
      const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()

      const filteredQuery = query(
        collection(db, 'productos'),
        where('category', '==', formattedCategory),        
      )
  
      const querySnapshot = await getDocs(filteredQuery)

      if (querySnapshot.size !== 0) {
        const productsList = querySnapshot.docs.map((e) => {
          return {
            id: e.id,
            ...e.data(),
          }
        })
        return productsList
      } else {
        console.log('Coleccion vacía !')
        return[]
      }
    } catch (error) {
      console.error('Error al obtener el documento: ', error)
      return []
    }
  }


  export async function addOrder(order) {
    const ordersCollection = collection(db, 'orders')
    try {
      const docRef = await addDoc(ordersCollection, order)
      return docRef.id
    } catch (error) {
      console.error('Error al agregar el documento nuevo ', error)
    }
  }