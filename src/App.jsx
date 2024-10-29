import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import NavBar from './components/NavBar/Navbar'





function App() {
  const[valor, setValor] = useState(0)

  console.log("se renderiza la app");

  
  return (

    <>
    <NavBar valor={valor}/>


    <ItemListContainer text='items List Container' fn={setValor}/>
    
      </>    
  

  )
}

export default App
