import React from "react";
import './Navbar.css'
const Navbar = () => {
    return (
        // Navbar
        <div className="n-wrapper">
            {/* Left side of Navbar */}
           <div className="n-left">
                <div className="n-name">Klarees</div> 
                <span>toggle</span>
            </div> 
            {/* right side of Navbar */}
            <div className="n-right">
                {/* the links */}
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                {/*contact button  */}
                <button className="button n-button">
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar