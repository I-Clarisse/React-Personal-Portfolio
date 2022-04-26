import React from "react"
import './Intro.css'
import GitHub from '../../../images/github.png'
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

            </div>
            {/* Right section  */}
            <div className="i-right">Helllo Right side</div>
        </div>
    )
}

export default Intro