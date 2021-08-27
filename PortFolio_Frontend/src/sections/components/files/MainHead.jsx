import React from "react"

import "../css/mainhead.css"


const MainHead = (props) => {


    return (
        <div className="main_div">
            <div style={props.style1} className="child_div">
                <h1 className="head">{props.headName}</h1>
                <div style={props.style} className="line"></div>
            </div>

        </div>
    )
}


export default MainHead