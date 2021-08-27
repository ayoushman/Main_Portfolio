import { React, useState } from 'react'

import "../css/Project.css"
import LeftArrow from '../assets/LeftArrow.svg'
import RightArrow from "../assets/RightArrow.svg"
import MainHead from "../components/files/MainHead"
import { Project } from '../data/ProjectData'


const Projects = () => {

    const [project, setProject] = useState(0)

    const HandleRightClick = () => {



        setProject((project + 1) % Project.length)

    }


    const HandleLeftClick = () => {



        setProject(project ? (project - 1) % Project.length : Project.length - 1)

    }

    return (
        <section id="Projects" className="main_project">
            <div className="projects_div">
                <div className="parahead"> <MainHead style1={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "c(olumn",
                    alignItems: "center"
                }} style={{ width: "20%", background: "#88238a" }} headName="Projects" /></div>

                <div className="project_content">
                    <div onClick={HandleLeftClick} className="left_arrow"><img src={LeftArrow} /></div>
                    <div className="main_content">
                        <div className="Pimg_div"> <img className="project_img" src={Project[project].img} /></div>

                        <div className="para_div">
                            <p className="para">{Project[project].description}</p>
                        </div>
                    </div>
                    <div onClick={HandleRightClick} className="right_arrow"><img src={RightArrow} /></div>
                </div>

                <div className="btn_div"></div>

            </div>
        </section>
    )
}

export default Projects
