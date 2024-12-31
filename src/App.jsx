import React from 'react'
import './index.css'
import { Home, WorkerList, WorkerInfo, UserLogin } from './pages'
import { Navbar } from './components'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

// Define routes
const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar /> 
        <Outlet /> 
      </div>
    ),
    children: [
      {
        path: '/', // Home route
        element: <Home />,
      },
      {
        path: '/signup', // User Signup/Login route
        element: <UserLogin />,
      },
      {
        path: '/workers', // Worker List route
        element: <WorkerList />,
      },
      {
        path: '/workerInfo', // Worker Info route
        element: <WorkerInfo />,
      },
    ],
  },
])


const App = () => {
  return (
    <div className="app">
      
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
