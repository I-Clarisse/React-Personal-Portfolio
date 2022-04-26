import React from "react"
import './Intro.css'
import GitHub from '../../../images/github.png'
import LinkedIn from '../../../images/linkedin.png'
import Instagram from '../../../images/instagram.png'
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
            <div className="i-right">Helllo Right side</div>
        </div>
    )
}

export default Intro