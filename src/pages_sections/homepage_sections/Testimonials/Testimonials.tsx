import "./testimonials.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import TestimonialCard from '../../../components/TestimonialCard/TestimonialCard';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Testimonials = () => {
    useEffect(()=>{
        AOS.init({
            duration: 3000,
        })
      }, [])
  return (
    <section className="testimonials"
        data-aos="fade" 
        data-aos-delay="100"
    >
        <div className="testimonials-wrapper">
            <div className="left-design"></div>
            <div className="right-design"></div>
            <div className="testimonial-main-body">
                <div className="testimonial-body-left">
                    <div className="circle circle1"></div>
                    <div className="circle circle2"></div>
                    <div className="circle circle3"></div>
                    <div className="circle circle4"></div>
                    <div className="circle circle5"></div>
                </div>
                <div className="testimonial-body-right">
                    <p className="testimonial-title">Testimonial</p>
                    <header className="testimonial-headers">
                        <h1>What Our Customer</h1>
                        <h1> Says About Us</h1>
                    </header>
                    <div className="testimonial-card-container">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <TestimonialCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard/>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials