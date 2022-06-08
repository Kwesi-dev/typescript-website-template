import React from 'react'
import PromoCard from '../../components/promoCard/PromoCard'
import "./promopage.css"
import { cardDetailData } from '../../utils/carddetails'
const Promopage = () => {
  return (
    <section className="promopage">
        <div className="promopage-wrapper">
            {cardDetailData.map((carddata)=>
                <PromoCard key={carddata.key} carddata={carddata}/>
            )}
        </div>
    </section>
  )
}

export default Promopage