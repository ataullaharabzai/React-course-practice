import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Developer from './Pages/Developer.jsx'
import Contact from './Pages/Contact.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      {
        path: '/developer',
        element: <Developer />,
        loader: async () => {
          const respons = await fetch('https://api.github.com/users/ataullaharabzai')
          if (!respons.ok) throw new Error("Developer not found")
          return respons.json()
        }
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
)
