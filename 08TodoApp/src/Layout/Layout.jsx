import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout