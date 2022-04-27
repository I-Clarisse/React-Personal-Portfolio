import React from "react"
import './Card.css'

const Card = ({emoji, Heading, detail}) => {
    return(
        <div className="card">
            <img src={emoji} alt=""/>
            <span>{Heading}</span>
            <span>{detail}</span>
            <button className="c-button">Learn more</button>
        </div>
    )
}

export default Card