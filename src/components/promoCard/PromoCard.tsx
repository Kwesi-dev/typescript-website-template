import React from 'react'
import "./promoCard.css"
type carddataState = {
    carddata:{
        key: number,
        title: string,
        icon: any,
        info: string,
        transparent: any,
        iconClassName: string,
        transClassName: string,
    }
}
const PromoCard = ({carddata}: carddataState) => {
  return (
    <article className="promoCard">
        <div className="promoCard-wrapper">
            {carddata.transparent}
            <div className="grid-item-logo">
                {carddata.icon}
            </div>
            <h1>{carddata.title}</h1>
            <p>{carddata.info}</p>
        </div>
    </article>
  )
}

export default PromoCard