import React from 'react'
import "./sponsorSection.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
const SponsorSection = () => {
  return (
    <section className="sponsorSection">
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