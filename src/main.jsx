import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './component/Layout/Main.jsx'
import Home from './component/pages/Home.jsx'
import Recipe from './component/Recipe.jsx'

const router = createBrowserRouter([
   {
    path: '/',
    element:<Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chefs')
      },
      {
        path:'/recipes/:id',
        element:<Recipe></Recipe>,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
      }
    ]
   }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
