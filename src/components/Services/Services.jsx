import React from "react"
import './Services.css'
import Heartemoji from '../../images/heartemoji.png'
import Glasses from '../../images/glasses.png'
import Humble from '../../images/humble.png'
import Card from '../Card/Card'
import Resume from './Technovation Certificate.pdf'
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

                <div style={{left: '14rem'}}>
                    <Card
                    emoji = {Heartemoji}
                    Heading = 'Design '
                    detail = "Figma, Sketch, Photoshop, Adobe, Adobe xd"
                    />
                </div>
                 {/* Second card  */}
                 <div style={{top:"12rem", left: "-4rem"}}>
                     <Card
                     emoji={Glasses}
                     Heading={"Developer"}
                     detail={"Html, Css, Javascript, React"}
                     />
                 </div>
                 {/* Third card */}
                 <div style={{top:"19rem", left: "12rem"}}>
                     <Card
                     emoji={Humble}
                     Heading = {'UI/UX'}
                     detail = {"Front-end developer using different tools and technologies"}
                     />
                 </div>
                 <div className="blur s-blur-2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Services