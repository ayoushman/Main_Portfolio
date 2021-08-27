import { React, useState } from "react"

import "../css/NavCom.css"

const NavComponent = (props) => {



    return (
        <div className="NavComponent">
            <div className="link">{props.LinkName}</div>

        </div >)
}

export default NavComponent;