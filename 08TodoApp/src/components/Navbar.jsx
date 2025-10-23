import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <h1>Todo</h1>
                <ul>
                    <div className="nav_items">
                        <li> <Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/developer'>Developer</Link></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar