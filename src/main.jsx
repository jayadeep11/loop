import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Login from './components/Login';
import Users from './components/Users';
import Layout from './components/Layout';
import Settings from './components/Settings';
import Arch from './components/Arch';
import Neovim from './components/Neovim';
import Notes from './components/Notes';
import GetStarted from './components/GetStarted.jsx';
import DrawBoard from './components/DrawBoard.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotificationProvider } from './components/NotificationContext.jsx'; // Import NotificationProvider

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
      {
        path: "Arch",
        element: <Arch />,
      },
      {
        path: "Neovim",
        element: <Neovim />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "get-started",
        element: <GetStarted />,
      },
      {
        path: "draw",
        element: <DrawBoard />,
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotificationProvider>
      <RouterProvider router={router} />
    </NotificationProvider>
  </StrictMode>,
);

