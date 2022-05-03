import React from "react"
import './Intro.css'
import GitHub from '../../images/github.png'
import LinkedIn from '../../images/linkedin.png'
import Instagram from '../../images/instagram.png'
import Boy from '../../images/boy.png'
import Crown from '../../images/crown.png'
import GlassesImoji from '../../images/glassesimoji.png'
import PurpleBlur from '../../images/purpleblur.png'
import Thumbup from '../../images/thumbup.png'
import Vector1 from '../../images/Vector1.png'
import Vector2 from '../../images/Vector2.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv"
import { themeContext } from "../../Context"
import { useContext } from "react"
import { motion } from "framer-motion"

const Intro = () => {
    const transition = {duration: 2, type: 'spring'}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return(
        <div className="intro">
            {/* Left section  */}
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white' : ''}}>Hy! I AM </span>
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
                <motion.img 
                initial = {{left: "36%"}}
                whileInView = {{left: "42%"}}
                transition = {transition}
                src={GlassesImoji} alt="" />
                <motion.div 
                initial = {{top: "24%", left: "86%"}}
                whileInView = {{left: "81%"}}
                transition = {transition}
                style={{top:'8.5rem', left:'81%'}}>
                    <FloatingDiv image={Crown} text1='Web' text2='Developer'/>
                </motion.div>
                <motion.div
                initial = {{ left: "47%"}}
                whileInView = {{left: "52%"}}
                transition = {transition}
                style={{top:'81%',left:'52%'}}>
                    <FloatingDiv image={Thumbup} text1='Best Design' text2='Award'/>
                </motion.div>
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