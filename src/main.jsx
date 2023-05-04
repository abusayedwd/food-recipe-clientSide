import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './component/Layout/Main.jsx'
import Home from './component/pages/Home.jsx'
import Recipe from './component/Recipe.jsx'
import Login from './component/Login/Login.jsx'
import Register from './component/Register/Register.jsx'
import Blog from './component/pages/Blog.jsx'
import AuthProvider from './component/Authprovider/AuthProvider.jsx'
import PrivateRoute from './component/Privaterout/PrivatRoute.jsx'
 
 
 

const router = createBrowserRouter([
   {
    path: '/',
    element:<Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('https://food-recipe-a-server-abusayedwd.vercel.app/chefs')
      },
      {
        path:'/recipes/:id',
        element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
        loader: ({params}) => fetch(`https://food-recipe-a-server-abusayedwd.vercel.app/chef/${params.id}`)
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }
    ]
   }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     

     <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
     </AuthProvider>
     
   </React.StrictMode>,
)
