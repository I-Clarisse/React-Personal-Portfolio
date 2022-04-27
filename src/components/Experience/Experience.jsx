import React from "react"
import './Experience.css'
import Circle from "../Circle/Circle"

const Experience = () => {
    return(
        <div className="experience">
        <div className="achievements">
            <Circle number ={'8+'} status={'years'} subject={'Experience'}/>
        </div>
        <div className="achievements">
            <Circle number ={'20+'} status={'completed'} subject={'Projects'}/>
        </div>
        <div className="achievements">
            <Circle number ={'5+'} status={'companies'} subject={'work'}/>
        </div>
        </div>
    )
}

export default Experience