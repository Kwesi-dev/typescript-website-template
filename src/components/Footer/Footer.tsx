import React from 'react'
import "./footer.scss"
import logo from "../../assets/logo-light.png"
const Footer = () => {
  return (
    <section className="footer">
        <div className="left-design"></div>
        <div className="right-design"></div>
        <div className="footer-main">
            <div className="footer-top">
                <div className="footer-top-body">
                    <div className="footer-top-item">
                        <img src={logo} alt="logo" />
                        <p className="web-desc">Building your own home is about desire, fantasy. But it’s achievable anyone can do it.</p>
                    </div>
                    <div className="footer-top-item">
                        <h3>Company</h3>
                        <ul className="footer-links">
                            <li className="footer-link">About Us</li>
                            <li className="footer-link">Our Services</li>
                            <li className="footer-link">Client Reviews</li>
                            <li className="footer-link">Contact Us</li>
                        </ul>
                    </div>
                    <div className="footer-top-item">
                        <h3>Headquaters</h3>
                        <p className="footer-address">962 Fifth Avenue, 3rd Floor New York, NY10022</p>
                        <p className="footer-email">afriyiesamuel36@gmail.com</p>
                        <p className="footer-telephone">(+233) 54 504 6757</p>
                    </div>
                    <div className="footer-top-item">
                        <h3>Newslatter Subscription</h3>
                        <p className="subscribe-text">Subscribe and get 10% off from our architecture company.</p>
                        <div className="footer-button">
                            <input type="text" placeholder="Enter your email"/>
                            <button className="subscribe-btn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; Kwesidev powered by Braces Tech</p>
            </div>
        </div>
    </section>
  )
}

export default Footer