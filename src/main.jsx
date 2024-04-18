import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter, 
  RouterProvider, 
 } from "react-router-dom"; 
import Home from './components/Home';
import Root from './components/Root';
import UpdateProfile from './components/UpdateProfile';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import CardDetails from './components/CardDetails';
import { HelmetProvider } from 'react-helmet-async';

 const router = createBrowserRouter([ 
  { 
  path: "/", 
  element: <Root></Root>, 
  errorElement:<ErrorPage></ErrorPage>,
  children: [
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/updateprofile',
      element:<UpdateProfile></UpdateProfile>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path: '/register',
      element:<Register></Register>
    },
    {
      path: "/card/:id",
      element: <CardDetails></CardDetails>,
      loader: () => fetch('../data.json')
    }
  ]
  }, 
 ]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} /> 
    </HelmetProvider>
     
  </React.StrictMode>,
)
