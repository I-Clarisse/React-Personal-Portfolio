import React from "react"
import './Services.css'
import Heartemoji from '../../images/heartemoji.png'
import Glasses from '../../images/glasses.png'
import Humble from '../../images/humble.png'

const Services = () => {
    return(
        <div className="services">
            {/* Left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. <br/>
                     Dolorum aperiam odit inventore
                      impedit vel mollitia repellendus eius?
                       Neque, ipsa ipsam
                       consequatur culpa natus<br/>
                        provident quod reprehenderit voluptates, 
                        qui assumenda nemo?
                </span>
                {/* download button  */}
                <button className="button s-button">
                    Download CV
                </button>
                {/* blur div  */}
                <div className="blur s-blur" style={{background: "ABF1FF94"}}></div>
            </div>
            {/* Right side */}
            <div className="cards">

            </div>
        </div>
    )
}

export default Services