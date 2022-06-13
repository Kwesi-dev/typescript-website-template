import React from 'react'
import "./testimonialCard.scss"
const TestimonialCard = () => {
  return (
    <article className="testimonialCard">
        <div className="testimonialCard-wrapper">
            <p className="test-message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima sed vero voluptates impedit, ipsum in accusamus accusantium eius assumenda unde enim. Sapiente animi maiores eveniet ad harum nostrum molestias ea!</p>
            <div className="test-card-info">
                <div className="img"></div>
                <div className="card-names">
                    <p>Afriyie Samuel</p>
                    <p>Developer</p>
                </div>
            </div>
        </div>
    </article>
  )
}

export default TestimonialCard