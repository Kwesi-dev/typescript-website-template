import { faBullseye, faChartPie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import contentTwo from "../../../assets/content-2.png"
import "./featuresSecond.scss"
import React from 'react'
import AnimatedPage from '../../../components/animatedpage/AnimatedPage'

const FeaturesSecond = () => {
  return (
    <section className="features-second">
        <AnimatedPage/>
        <div className="features-second-wrapper">
            <div className="wrapper-grid-item">
                <img src={contentTwo} alt="content pic" />
            </div>
            <div className="wrapper-grid-item">
                <div className="features-grid-item-top">
                    <h3>FEATURES</h3>
                    <header className="second-headers">
                        <h1>Track Your Productivity & Keep</h1>
                        <h1>Your Projects On The Budget!</h1>
                    </header>
                    <p className="featurefirst-desc">We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents</p>
                </div>
                <div className="features-grid-item-bottom">
                    <div className="bottom-item">
                        <FontAwesomeIcon icon={faBullseye} className="featurefirst-icon1"/>
                        <h1>Reporting & Analysis</h1>
                        <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                    </div>
                    <div className="bottom-item">
                         <FontAwesomeIcon icon={faChartPie} className="featurefirst-icon2"/>
                        <h1>Technical SEO Audit</h1>
                        <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturesSecond