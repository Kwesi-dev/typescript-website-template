import React from 'react'
import "./home.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import homeImg from "../../../assets/home-img.png"
import AnimatedPage from '../../../components/animatedpage/AnimatedPage';
const Home = () => {
  return (
    <section className="home">
        <div className="home-wrapper">
            <div className="home-bg-shape"></div>
            <AnimatedPage/>
            <div className="home-main">
                <div className="home-left">
                    <header className="home-header">
                        <h1>Drive More Customers</h1>
                        <h1>Through Digital.</h1>
                    </header>
                    <section className="home-info">
                        <p>
                            We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents.
                        </p>
                    </section>
                    <div className="home-left-bottom">
                        <div className="getstarted-button">
                            <span>GET STARTED</span>
                        </div>
                        <div className="play-button">
                            <div className="play-icon-container">
                                <PlayArrowIcon className="play-icon"/>
                            </div>
                            <p>HOW IT WORKS </p>
                        </div>
                    </div>
                </div>
                <div className="home-right">
                    <img src={homeImg} alt="home svg" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home