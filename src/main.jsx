import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import MyRouters from './Routers/MyRouters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={MyRouters}></RouterProvider>
  </React.StrictMode>,
)
