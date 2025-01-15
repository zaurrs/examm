import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import { useSelector } from 'react-redux';
const Navbar = () => {
    const {products}= useSelector((state)=>state.basket)
    const count = products.reduce((acc, item)=> acc + item.quantity, 0)
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
                <sup>{count}</sup>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar