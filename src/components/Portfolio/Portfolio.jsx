import React from "react"
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import Hoc from '../../images/hoc.png'
import MusicApp from '../../images/musicapp.png'
import Ecommerce from '../../images/ecommerce.png'
import Sidebar from '../../images/sidebar.png'

const Portfolio = () => {
    return(
        <div className="portfolio">
            {/* heading  */}
            <span>Recent Projects</span>
            <span>Portfolio</span>
            {/* swiper  */}
            <Swiper
            spaceBetween = {30}
            slidesPerView = {3}
            grabCursor = {true}
            className = 'portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="sidebar" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="ecommerce" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="musicapp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hoc} alt="hoc" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Portfolio