import React from 'react'
import "./ctaSection.scss"
const CTASection = () => {
  return (
    <section className="ctaSection">
        <div className="ctaSection-wrapper">
            <div className="cta-shape-1"></div>
            <div className="cta-shape-2"></div>
            <div className="cta-shape-3"></div>
            <div className="cta-main-body">
                <div className="cta-left">
                    <h1>Build your website with Saasbiz code.</h1>
                    <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents.</p>
                </div>
                <div className="cta-button">
                    <span>get started now</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CTASection