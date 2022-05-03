import React, {useRef} from "react"
import './Contact.css'
import emailjs from '@emailjs/browser'
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_s9x0l2r', 'template_1z164si', form.current, '6c1oV4SgqgFfAu1W5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
    
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return(
        <div className="contact-form" id="Contact">
            <div className="c-left">
                <div className="awesome">
                    <span style={{color: darkMode? 'white' : ''}}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur c-blur1" style={{background: "#ABF1FF94"}}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name"/>
                    <input type="email" name="user_email" className="user" placeholder="Email"/>
                    <textarea name="message" className="user" placeholder="Message"/>
                    <input type="submit" value="Send" className="button"/>
                    <div className="blur c-blxur1" style={{background: "var(--purple)"}}></div>
                </form>
            </div>
        </div>
    )
}
export default Contact