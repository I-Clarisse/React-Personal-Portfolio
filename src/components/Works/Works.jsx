import React from "react"
import './Works.css'
import Facebook from '../../images/Facebook.png'
import Fiverr from '../../images/fiverr.png'
import Upwork from '../../images/Upwork.png'
import Amazon from '../../images/amazon.png'
import Shopify from '../../images/Shopify.png'
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion"

const Works = () => {
    // const transition = {duration: 2, type: 'spring'}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return(
        <div className="works">
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>Works for All these</span>
                <span>Brand & Clients</span>
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
                    <button className="button s-button">
                        Hire me
                    </button>
                {/* blur div  */}
                <div className="blur s-blur1" style={{background: "ABF1FF94"}}></div>
            </div>
            {/* Right side */}
            <div className="w-right">
                {/* Big main circle */}
                <motion.div 
                initial = {{rotate: 45}}
                whileInView = {{rotate : 0}}
                viewport = {{margin: '-40px'}}
                transition = {{duration: 3.5, type: 'spring'}}
                className="w-mainCircle">
                    {/* small circle */}
                    <div className="w-secCircle">
                        <img src={Upwork} alt="upwork" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="fiverr" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="amazon" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="shopify" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="facebook" />
                    </div>
                </motion.div>
                {/*  the background circles  */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}
export default Works