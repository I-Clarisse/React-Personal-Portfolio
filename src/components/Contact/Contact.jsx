import React from "react"
import './Contact.css'

const Contact = () => {
    return(
        <div className="contact-form">
            <div className="c-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur c-blur1" style={{background: "#ABF1FF94"}}></div>
                </div>
            </div>
            <div className="c-right">
                <form action="#">
                    <input type="text" name="userName" className="user" placeholder="Name"/>
                    <input type="email" name="userEmail" className="user" placeholder="Email"/>
                    <textarea name="message" className="user" placeholder="Message"/>
                    <input type="submit" value="Send" className="button"/>
                    <div className="blur c-blur1" style={{background: "var(--purple)"}}></div>
                </form>
            </div>
        </div>
    )
}
export default Contact