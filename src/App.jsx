import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/itemListContainer/itemListContainer'





function App() {
  return (

    <>
    <Navbar/>
      {/* <div>
        <h1>Hola</h1>
        <Button text="Pan" color="red"/>
        <Button text="Mi primer boton" color="grey"/>
        <Button text="Mi segundo boton" color="purple"/>
      </div> */}

    <ItemListContainer mensaje="items List Container"/>

      </>    
  

  )
}

export default App
