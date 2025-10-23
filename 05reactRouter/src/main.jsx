import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout/Layout'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './Header/Home'
import About from './Header/About'
import Contact from './Header/Contact'
import Github from './Header/Github'

const router = createBrowserRouter([ 
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      {
        path: '/github',
        element: <Github />,
        loader: async () => {
          const respons = await fetch('https://api.github.com/users/ataullaharabzai')
          if (!respons.ok) throw new Error("Data not found");
          return respons.json()
        }
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
