import React from "react"
import './Intro.css'
import GitHub from '../../images/github.png'
import LinkedIn from '../../images/linkedin.png'
import Instagram from '../../images/instagram.png'
import Boy from '../../images/boy.png'
import Crown from '../../images/crown.png'
import GlassesImoji from '../../images/glassesimoji.png'
import Profile1 from '../../images/profile1.jpg'
import Profile2 from '../../images/profile2.jpg'
import Profile3 from '../../images/profile3.jpg'
import Profile4 from '../../images/profile4.jpg'
import Profile5 from '../../images/profile5.jpg'
import Profile6 from '../../images/profile6.jpg'
import PurpleBlur from '../../images/purpleblur.png'
import Thumbup from '../../images/thumbup.png'
import Vector1 from '../../images/Vector1.png'
import Vector2 from '../../images/Vector2.png'
import Wave from '../../images/wave.png'

import FloatingDiv from "../FloatingDiv/FloatingDiv"

const Intro = () => {
    return(
        <div className="intro">
            {/* Left section  */}
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I AM </span>
                    <span>Clarisse </span>
                    <span>
                        Full-stack Developer and AI Enthusiast
                        with high level of experience in web
                        designing and development, producing 
                        the Quality work 
                    </span>
                </div>
                <button className="button i-button">Hire me</button>
                {/* Icons section  */}
                <div className="i-icons">
                    <a href="https://github.com/I-Clarisse">
                        <img src={GitHub} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/clarisse-iradukunda-537521207/">
                        <img src={LinkedIn} alt="linkedin" />
                    </a>
                    <a href="https://www.instagram.com/i_c.l.a.r.i.s.s.e/">
                        <img src={Instagram} alt="instagram" />
                    </a>
                </div>
            </div>
            {/* Right section  */}
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />
                <img src={GlassesImoji} alt="" />
                <div style={{top:'8.5rem', left:'81%'}}>
                    <FloatingDiv image={Crown} text1='Web' text2='Developer'/>
                </div>
                <div style={{top:'81%',left:'52%'}}>
                    <FloatingDiv image={Thumbup} text1='Best Design' text2='Award'/>
                </div>
                {/* Blur div  */}
                <div className="blur" style={{background: "rgb(238, 210, 255)"}}></div>
                <div className="blur" style={{
                    background: "#C1F5FF",
                    top: '20rem',
                    right: '17rem'
                    }}></div>
            </div>
        </div>
    )
}

export default Intro