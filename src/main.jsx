import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login'
import Users from './components/Users'
import Layout from './components/Layout'
import Settings from './components/Settings'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Layout wrapping all routes
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "login",  // No need to add a leading slash for nested routes
        element: <Login />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

