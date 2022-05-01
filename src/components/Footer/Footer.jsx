import React from "react";
import './Footer.css'
import Wave from '../../images/wave.png'
import UilReact from '@iconscout/react-unicons/icons/uil-react'

const Footer = () => {
    return(
        <div className="footer">
            <img src={Wave} alt="wave" style={{width: '100%'}}/>
            <div className="f-content"></div>
        </div>
    )
}

export default Footer;