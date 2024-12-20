import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductsProvider } from './context/ProductsContext'
import { CartProvider } from './context/CartContext'
import NavBar from './components/NavBar/NavBar'
import HomeContainer from './components/HomeContainer/HomeContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cart from './components/Cart/Cart'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import FooterContainer from './components/FooterContainer/FooterContainer'
import ConfirmOrder from './components/ConfirmOrder/ConfirmOrder'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
 
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <ProductsProvider>
          <NavBar/>
            <Routes>
              <Route exact path='/' element={<HomeContainer />}/>
              <Route exact path='/productos' element={<ItemListContainer className='ItemListContainer' />} />
              <Route exact path='/productos/:category' element={<ItemListContainer className='ItemListContainer'/>} />
              <Route exact path='/producto/:category/:id' element={<ItemDetailContainer/>}/>
              <Route exact path='/carrito' element={<Cart/>} />
              <Route exact path='/checkout' element={<ConfirmOrder/>} />
              <Route path="*" element={<p className='alertError'>404 - Página no encontrada</p>} />             
              <Route element={<FooterContainer/>} />
            </Routes>
          
          </ProductsProvider>
        </CartProvider>
      </BrowserRouter>
    </>    
  )
}






export default App
