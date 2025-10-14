import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'

function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout