import { faArrowsSpin, faBoxesPacking } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import contentOne from "../../../assets/content-1.png"
import "./featuresFirst.scss"
import React from 'react'

const FeatureFirst = () => {
  return (
    <section className="features-first">
        <div className="features-first-wrapper">
            <div className="wrapper-grid-item">
                <div className="features-grid-item-top">
                    <h3>FEATURES</h3>
                    <header className="second-headers">
                        <h1>Revolutionlize Your Online</h1>
                        <h1>Business Today!</h1>
                    </header>
                    <p className="featurefirst-desc">We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents</p>
                </div>
                <div className="features-grid-item-bottom">
                    <div className="bottom-item">
                        <FontAwesomeIcon icon={faBoxesPacking} className="featurefirst-icon1"/>
                        <h1>Digital Data Analysis</h1>
                        <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                    </div>
                    <div className="bottom-item">
                         <FontAwesomeIcon icon={faArrowsSpin} className="featurefirst-icon2"/>
                        <h1>Marketing Automation</h1>
                        <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                    </div>
                </div>
            </div>
            <div className="wrapper-grid-item">
                <img src={contentOne} alt="content pic" />
            </div>
        </div>
    </section>
  )
}

export default FeatureFirst