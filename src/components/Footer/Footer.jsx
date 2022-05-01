import React from "react";
import './Footer.css'
import Wave from '../../images/wave.png'
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import GH from '@iconscout/react-unicons/icons/uil-github'
import FB from '@iconscout/react-unicons/icons/uil-facebook'
import IG from '@iconscout/react-unicons/icons/uil-instagram'

const Footer = () => {
    return(
        <div className="footer">
            <img src={Wave} alt="wave" style={{width: '100%'}}/>
            <div className="f-content">
                <span>clarisse2526@gmail.com</span>
                <div className="f-icons">
                    <IG color="#fff" size='3rem'/>
                    <FB color="#fff" size='3rem'/>
                    <GH color="#fff" size='3rem'/>
                </div>
            </div>
        </div>
    )
}

export default Footer;