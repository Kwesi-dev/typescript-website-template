import React from 'react'
import "./searchsection.scss"
const SearchSection = () => {
  return (
    <div className="search-section">
        <div className="search-section-wrapper">
            <div className="left-design"></div>
            <div className="right-design"></div>
            <div className="main-search-body">
                <h3>Ready To Grow</h3>
                <h1>Check Your Website SEO</h1>
                <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents.</p>
                <div className="search-box">
                    <input type="text" placeholder="Web URL"/>
                    <button type="submit">Check Now</button>
                </div>
            </div>
            <div className="bottom-design"></div>
        </div>
    </div>
  )
}

export default SearchSection