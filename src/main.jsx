import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoadingProvider } from './context/LoadingContext.jsx'
import App from './App.jsx'
import './index.css'
import "toastify-js/src/toastify.css"

createRoot(document.getElementById('container')).render(
    <LoadingProvider>
    <App />
    </LoadingProvider>
)
