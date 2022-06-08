import React from 'react'
import "./navbar.scss"
import logo from "../../assets/logo-dark.png"
const Navbar = () => {
  return (
    <section className="navbar">
        <nav className="navbar-wrapper">
            <div className="logo-container">
                <img src={logo} alt="logo" />
                <div className="small-box"></div>
            </div>
            <ul className="navigation-list">
                <li className="navigation-item active">
                    <p>Home</p>
                </li>
                <li className="navigation-item">
                    <p>About</p>
                </li>
                <li className="navigation-item">
                    <p>Services</p>
                </li>
                <li className="navigation-item">
                    <p>Case Studies</p>
                </li>
                <li className="navigation-item">
                    <p>Page</p>
                </li>
                <li className="navigation-item">
                    <p>Blog</p>
                </li>
                <li className="navigation-item">
                    <p>Contact</p>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default Navbar