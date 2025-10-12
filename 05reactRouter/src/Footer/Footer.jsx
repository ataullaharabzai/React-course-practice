import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer>
                <div className='firstDiv'>
                    <p>Our privecy policy</p>
                    <p>Our term of rules</p>
                    <p>More About us</p>
                    <p>Give us your feedback</p>
                </div>
                {/* <div>
                    <ul className='footer-ul'>
                        <li><Link to='/' className='nav-link'>Home</Link></li>
                        <li><Link to='/about' className='nav-link'>About</Link></li>
                        <li><Link to='/contact' className='nav-link'>Contact</Link></li>
                    </ul>
                </div> */}
                <div className='lastDiv'>
                    <p>No copywrite from autor</p>
                    <p>Arabzai group of Componey</p>
                    <p>Explore more about us</p>
                    <p>Contact us on WhatsApp</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer