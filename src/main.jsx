import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './components/Shop/Shop'
import Home from './components/Layout/Home'
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import Login from './components/Login/Login'
import { cartProductLoader } from './components/CustomLoader/CustormLoader'

const router = createBrowserRouter([

  {
    path:'/',
    element:<Home/>,
    errorElement:'',
    children:[
      {
        path:'/',
        element:<Shop/>
      },
      {
        path:'orders',
        element:<Orders/>,
        loader:cartProductLoader
      },
      {
        path:'inventory',
        element:<Inventory/>
      },
      {
        path:'login',
        element:<Login/>
      },
    ]
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
