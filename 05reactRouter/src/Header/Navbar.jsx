import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className='navBar'>
                <div className="logo">
                    <h2>Arabzai</h2>
                </div>
                <ul className='nav-ul'>
                    <li><NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
                    <li><NavLink to='/about' className='nav-link'>About</NavLink></li>
                    <li><NavLink to='/contact' className='nav-link'>Contact</NavLink></li>
                    <li><NavLink to='/github' className='nav-link'>GitHub</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar