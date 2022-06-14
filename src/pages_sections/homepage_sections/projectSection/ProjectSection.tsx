import ProjectCard from '../../../components/projectCard/ProjectCard'
import "./projectSection.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProjectSection = () => {
    useEffect(()=>{
        AOS.init({
            duration: 3000,
        })
      }, [])
  return (
    <section className="projectSection">
        <div className="projectSection-wrapper">
            <div className="project-main"
                data-aos="fade" 
                data-aos-delay="100"
            >
                <header className="project-main-header">
                    <h3>PROJECT</h3>
                    <h1>Our Case Studies</h1>
                </header>
                <div className="slickSlider-container">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper slickSlider"
                    >
                        <SwiperSlide>
                            <ProjectCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProjectCard/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection