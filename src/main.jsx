import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Router.jsx'
import {RouterProvider} from "react-router-dom"
import { token } from './TOKEN.JS'
import { AuthProvider } from './auth/AuthProvider.jsx'
localStorage.setItem("token", token)

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
      </AuthProvider>

    </StrictMode>,
)
