import React from "react";
import './Navbar.css'
import Toggle from "../Toggle/Toggle";
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        // Navbar
        <div className="n-wrapper" id="Navbar">
            {/* Left side of Navbar */}
           <div className="n-left">
                <div className="n-name">Klarees</div> 
                <Toggle/>
            </div> 
            {/* right side of Navbar */}
            <div className="n-right">
                {/* the links */}
                <div className="n-list">
                    <ul>
                        <Link spy = {true} to="Intro" smooth={true} activeClass="activeClass">
                            <li>Home</li>
                        </Link>
                        <Link spy = {true} to='Services' smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy = {true} to='Experience' smooth={true}>
                            <li>Experience</li>
                        </Link>
                        <Link spy = {true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy = {true} to='Testimonials' smooth={true}>
                            <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                {/*contact button  */}
                <Link spy = {true} to='Contact' smooth={true}>
                <button className="button n-button">
                    Contact
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar