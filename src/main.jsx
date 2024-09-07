import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Login from './components/Login';
import Register from './components/Register.jsx';
import Users from './components/Users';
import Layout from './components/Layout';
import Settings from './components/Settings';
import Arch from './components/Arch';
import Notes from './components/Notes';
import GetStarted from './components/GetStarted.jsx';
import DrawBoard from './components/DrawBoard.jsx';
import Profile from './components/UserProfile.jsx';
import Neovim from './components/Neovim/Neovim';
import Installation from './components/Neovim/installation.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotificationProvider } from './components/NotificationContext.jsx';

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
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
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
        children: [
          {
            path: "installation",
            element: <Installation />,
          },
        ],
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
      {
        path: "profile",
        element: <Profile />,
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

