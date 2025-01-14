import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div>
        <div className="container">
            <div className="nav">
                <div className="logo">
                    <h1>Zaur</h1>
                </div>
                <div className="nav-container">
                    <ul className='list'>
                        <li><Link to="/">Home</Link></li>
                        <li>about</li>
                        <li>about</li>
                        <li>about</li>
                        <li><Link to="/admin">Admin</Link></li>
                    </ul>
                </div>
                <div className="wrapper">
                <Link   className='basket' to="/basket"><FaShoppingBasket/></Link>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar