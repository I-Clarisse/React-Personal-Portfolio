import React from "react"
import './Testimoniols.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Profile1 from '../../images/profile1.jpg'
import Profile2 from '../../images/profile2.jpg'
import Profile3 from '../../images/profile3.jpg'
import Profile4 from '../../images/profile4.jpg'
import Profile5 from '../../images/profile5.jpg'
import Profile6 from '../../images/profile6.jpg'
import { Pagination } from "swiper"
import 'swiper/css/pagination'

const Testimoniols = () => {
    const clients = [
        {
            img : Profile1,
            review : "Working with Clarisse was a great experience"
        },
        {
            img : Profile2,
            review : "Working with Clarisse was a great experience"
        },
        {
            img : Profile3,
            review : "Working with Clarisse was a great experience"
        },
        {
            img : Profile4,
            review : "Working with Clarisse was a great experience"
        },
        {
            img : Profile5,
            review : "Working with Clarisse was a great experience"
        },
        {
            img : Profile6,
            review : "Working with Clarisse was a great experience"
        },
    ]
    return(
        <div className="testimoniols" id="Testimonials">
            {/* Heading  */}
            <div className="t-heading">
                <span>Clients always get</span>
                <span> Exceptional Work </span>
                <span>from me </span>
            </div>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>

            {/* Swiper */}
            <Swiper
            modules = {[Pagination]}
            slidesPerView = {1}
            pagination = {{clickable: true}}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
export default Testimoniols