import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './routes/Router.jsx'
import {RouterProvider} from "react-router-dom"
import { token } from './TOKEN.JS'

localStorage.setItem("token", token)

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
    </StrictMode>,
)
