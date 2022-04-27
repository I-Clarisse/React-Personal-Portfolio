import React from "react"
import './Circle.css'

const Circle = ({number, status, subject}) => {
    return(
        <div className="circle">
            <div className="c-circle">
                {number}
            </div>
            <span>{status}</span>
            <span>{subject}</span>
        </div>
    )
}

export default Circle 