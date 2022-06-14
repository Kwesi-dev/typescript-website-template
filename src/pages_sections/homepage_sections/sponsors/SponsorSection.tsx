import "./sponsorSection.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const SponsorSection = () => {
    useEffect(()=>{
        AOS.init({
            duration: 3000,
        })
      }, [])
  return (
    <section className="sponsorSection"
    data-aos="fade" 
    data-aos-delay="100"
    >
        <div className="sponsorSection-wrapper">
            <header className="sponsor-header">
                <h4>sponsors</h4>
                <h1>Trusted by over 30,000 world's</h1>
                <h1>leading companies!</h1>
            </header>
            <div className="sponsor-slider-cards">
            <Swiper
                        spaceBetween={30}
                        slidesPerView={4}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="slider-card"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-card"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-card"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-card"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-card"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-card"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-card"></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-card"></div>
                        </SwiperSlide>       
                    </Swiper>
            </div>
        </div>
    </section>
  )
}

export default SponsorSection