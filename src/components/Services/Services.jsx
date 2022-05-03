import React from "react"
import './Services.css'
import Heartemoji from '../../images/heartemoji.png'
import Glasses from '../../images/glasses.png'
import Humble from '../../images/humble.png'
import Card from '../Card/Card'
import Resume from './Technovation Certificate.pdf'
import { themeContext } from "../../Context"
import { useContext } from "react"
import { motion } from "framer-motion"

const Services = () => {
    const transition = {duration: 2, type: 'spring'}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return(
        <div className="services" id="Services">
            {/* Left side */}
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. <br/>
                     Dolorum aperiam odit inventore
                      impedit vel mollitia repellendus eius?<br/>
                       Neque, ipsa ipsam
                       consequatur culpa natus<br/>
                        provident quod reprehenderit voluptates, 
                        qui assumenda nemo?
                </span>
                {/* download button  */}
                <a href={Resume} download>
                    <button className="button s-button">
                        Download CV
                    </button>
                </a>
                {/* blur div  */}
                <div className="blur s-blur1" style={{background: "ABF1FF94"}}></div>
            </div>
            {/* Right side */}
            <div className="cards">
                {/* First card */}
                <motion.div
                initial = {{left: "19rem"}}
                whileInView = {{left: "14rem"}}
                transition = {transition}
                style={{left: '14rem'}}>
                    <Card
                    emoji = {Heartemoji}
                    Heading = 'Design '
                    detail = "Figma, Sketch, Photoshop, Adobe, Adobe xd"
                    />
                </motion.div>
                 {/* Second card  */}
                 <motion.div 
                 initial = {{left: "-9rem"}}
                 whileInView = {{left: "-4rem"}}
                 transition = {transition}
                 style={{top:"12rem", left: "-4rem"}}>
                     <Card
                     emoji={Glasses}
                     Heading={"Developer"}
                     detail={"Html, Css, Javascript, React"}
                     />
                 </motion.div>
                 {/* Third card */}
                 <motion.div 
                 initial = {{left: "17rem"}}
                 whileInView = {{left: "12rem"}}
                 transition = {transition}
                 style={{top:"19rem", left: "12rem"}}>
                     <Card
                     emoji={Humble}
                     Heading = {'UI/UX'}
                     detail = {"Front-end developer using different tools and technologies"}
                     />
                 </motion.div>
                 <div className="blur s-blur-2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Services