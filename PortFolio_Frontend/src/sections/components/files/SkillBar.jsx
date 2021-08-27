import React from "react"


import "../css/skillbar.css"

const SkillBar = ({ style, barName }) => {
    return (
        <div className="main_div">
            <p className="bar_name">{barName}</p>
            <div className="bar">

                <div style={style} className="per_bar"></div>

            </div>
        </div>

    )
}


export default SkillBar