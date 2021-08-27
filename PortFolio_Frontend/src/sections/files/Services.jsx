import React from 'react'

import ServiceCard from '../components/files/ServiceCard'
import MainHead from '../components/files/MainHead'
import "../css/Services.css"

export const Services = () => {
    return (
        <div id="Services" className="service_div">
            <div className="header">
                <MainHead style1={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center"
                }} style={{ width: "20%", background: "#88238a" }} headName="Services" />

            </div>
            <div className="service_cards">
                <ServiceCard headName="Web Development" para="i got my basics clear and have learned all the neccesary topics required to build a full stack application" />
                <ServiceCard headName="Web Development" para="i got my basics clear and have learned all the neccesary topics required to build a full stack application" />
                <ServiceCard headName="Web Development" para="i got my basics clear and have learned all the neccesary topics required to build a full stack application" />
                <ServiceCard headName="Web Development" para="i got my basics clear and have learned all the neccesary topics required to build a full stack application" />
            </div>

        </div>
    )
}

