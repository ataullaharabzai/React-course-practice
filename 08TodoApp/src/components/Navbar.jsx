import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <h1>Todo</h1>
                <ul>
                    <div className="nav_items">
                        <li><NavLink to='/' className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact'>Contact me</NavLink></li>
                        <li><NavLink to='/developer'>Developer</NavLink></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar