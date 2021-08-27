import React from "react"
import { FaGithub } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'
import { FiInstagram } from 'react-icons/fi'

import "../css/sicons.css"




const Sicons = () => {

    return (
        <div className="icons_list">
            <span className="icon"><FaGithub /></span>
            <span className="icon"> <SiLinkedin /></span>
            <span className="icon"><FiInstagram /></span>




        </div>
    )
}


export default Sicons
