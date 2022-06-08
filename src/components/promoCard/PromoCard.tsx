import React from 'react'
import "./promoCard.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            <FontAwesomeIcon icon={carddata.transparent} className={carddata.transClassName}/>
            <div className="grid-item-logo">
            <FontAwesomeIcon icon={carddata.icon} className={carddata.iconClassName}/>
            </div>
            <h1>{carddata.title}</h1>
            <p>{carddata.info}</p>
        </div>
    </article>
  )
}

export default PromoCard