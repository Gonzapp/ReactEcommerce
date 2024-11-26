import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route }  from 'react-router-dom'
import Button from './components/Button/Button'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/Navbar'
import HomeContainer from './components/HomeContainer/HomeContainer'
import Contact from './components/Contact/Contact'
import DetailItem from './components/DetailItem/DetailItem'






function App() {
  const[valor, setValor] = useState(0) //Estado


  
  return (

    <>
      <BrowserRouter>
      <NavBar valor={valor}/>
      <Routes>
      <Route exact path='/' element={<HomeContainer fn={setValor}/>}/>
      <Route exact path='/productos' element={<ItemListContainer className='ItemListContainer' fn={setValor}/>}/>
      <Route exact path='/contacto' element={<Contact/>}/>
      <Route exact path='/producto/:id' element={<DetailItem/>}/>
      </Routes>

      </BrowserRouter>

      </>    
  

  )
}






export default App
