import React from "react"

import "../css/ServiceCard.css"



const ServiceCard = (props) => {
    return (

        <div className="sec_card">
            <div className="card_content">
                <h3 className="head_service">{props.headName}</h3>
                <p className="para_service">{props.para}</p>
            </div>
        </div>
    )
}

export default ServiceCard