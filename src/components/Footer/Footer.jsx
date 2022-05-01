import React from "react";
import './Footer.css'
import Wave from '../../images/wave.png'
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import IG from '@iconscout/react-unicons/icons/uil-instagram'

const Footer = () => {
    return(
        <div className="footer">
            <img src={Wave} alt="wave" style={{width: '100%'}}/>
            <div className="f-content">
                <span>clarisse2526@gmail.com</span>
                <div className="f-icons">
                    <IG/>
                </div>
            </div>
        </div>
    )
}

export default Footer;