import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './pages/About/index.jsx';
import Contact from './pages/Contact/index.jsx';
import Project from './pages/Project/index.jsx';
import Skills from './pages/Skills/index.jsx';
import Home from './pages/Home/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/project",
    element: <Project />,

  },
  {
    path: "/contact",
    element: <Contact />,
    
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);