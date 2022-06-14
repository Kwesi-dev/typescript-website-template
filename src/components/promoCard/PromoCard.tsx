import { useEffect } from 'react'
import "./promoCard.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos';
import 'aos/dist/aos.css';
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
  useEffect(()=>{
    AOS.init({
        duration: 3000,
    })
}, [])
  return (
    <article className="promoCard"
      data-aos="fade-left" 
      data-aos-delay="100"
    >
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