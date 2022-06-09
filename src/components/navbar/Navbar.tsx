import React from 'react'
import "./navbar.scss"
import logo from "../../assets/logo-dark.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
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
                    <p className="nav-home">Home</p>
                    <div className="home-options">
                        <ul>
                            <li className="home-option"><p>Home Design studio</p></li>
                            <li className="home-option"><p>Home Web Hosting</p></li>
                            <li className="home-option"><p>Home Support Desk</p></li>
                            <li className="home-option"><p>Home Apps Landing</p></li>
                            <li className="home-option"><p>Home Class Based Sass</p></li>
                        </ul>
                    </div>
                </li>
                <li className="navigation-item">
                    <p>About</p>
                    <div className="about-options">
                        <ul>
                            <li className="home-option"><p>About Us</p></li>
                            <li className="home-option"><p>About Company</p></li>
                        </ul>
                    </div>
                </li>
                <li className="navigation-item">
                    <p>Services</p>
                    <div className="services-options">
                        <ul>
                            <li className="home-option"><p>Website designing</p></li>
                            <li className="home-option"><p>Website development</p></li>
                        </ul>
                    </div>
                </li>
                <li className="navigation-item">
                    <p>Case Studies</p>
                    <div className="case-options">
                        <ul>
                            <li className="home-option"><p>case study</p></li>
                            <li className="home-option"><p>case study 01</p></li>
                        </ul>
                    </div>                    
                </li>
                <li className="navigation-item">
                    <p>Page</p>
                    <div className="page-options">
                        <ul>
                            <li className="home-option"><p>Job Details</p></li>
                            <li className="home-option"><p>Job Listings</p></li>
                            <li className="home-option"><p>Our Team</p></li>
                            <li className="home-option"><p>Pricing Plans</p></li>
                            <li className="home-option"><p>Login</p></li>
                            <li className="home-option"><p>Register</p></li>
                            <li className="home-option"><p>FAQ'S</p></li>
                        </ul>
                    </div> 
                </li>
                <li className="navigation-item">
                    <p>Blog</p>
                    <div className="blog-options">
                        <ul>
                            <li className="home-option"><p>Blog Grid</p></li>
                            <li className="home-option"><p>Blog Single</p></li>
                            <li className="home-option"><p>Our Blog</p></li>
                        </ul>
                    </div>
                </li>
                <li className="navigation-item">
                    <p>Contact</p>
                </li>
                <li className="navigation-item">
                    <div className="carticon-container">
                        <FontAwesomeIcon icon={faBasketShopping} className="carticon"/>
                        <div className="cart-count">
                            <span>2</span>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default Navbar