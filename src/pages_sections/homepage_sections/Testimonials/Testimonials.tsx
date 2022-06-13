import React from 'react'
import "./testimonials.scss"
const Testimonials = () => {
  return (
    <section className="testimonials">
        <div className="testimonials-wrapper">
            <div className="left-design"></div>
            <div className="right-design"></div>
            <div className="testimonial-main-body">
                <div className="testimonial-body-left">
                    <div className="circle circle1"></div>
                    <div className="circle circle2"></div>
                    <div className="circle circle3"></div>
                    <div className="circle circle4"></div>
                    <div className="circle circle5"></div>
                </div>
                <div className="testimonial-body-right">
                    <p>Testimonial</p>
                    <h1>What Our Customers Says About Us</h1>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials