import React from "react"
import axios from "axios"
import { saveAs } from 'file-saver'
import MainHead from "../components/files/MainHead"
import ProfilePic from "../assets/Profile.svg"
import SkillBar from "../components/files/SkillBar"
import "../css/About.css"


const About = () => {


    const handleDownload = async () => {

        try {
            const { data } = await axios({
                method: 'get',
                url: 'http://localhost:5000/portfolio/downloadpdf',
                responseType: 'arraybuffer'

            })
            const blob = new Blob([data], { type: 'application/pdf' })
            saveAs(blob, "Resume.pdf")
        } catch (error) {

        }

    }
    return (<section id="About" className="about_section">


        <div className="header">

            <div className="profile_holder">
                <img className="profile_img" src={ProfilePic} />
            </div>
            <div className="content">
                <MainHead style={{ width: "90%", background: "#88238a" }} headName="About Me" />
                <p className="profile_summary">


                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices arcu sed velit sagittis dictum. In nec est pharetra, vehicula sapien sed, fermentum libero. <br />Nulla diam eros, feugiat vitae consectetur et, <br />auctor vel neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam convallis vel dui quis pulvinar. Sed urna ante, feugiat vel varius non, porttitor quis urna. Integer mollis finibus nunc at dictum.<br /> Donec eget tortor congue, malesuada mauris ut, tincidunt massa. Aenean ultrices, odio ut fermentum mattis, tortor diam mattis diam, a vehicula ex erat interdum nunc. Vestibulum vehicula convallis magna, ac sagittis odio congue quis.
                </p>
                <button onClick={handleDownload} className="cv_btn">Download CV</button>
            </div>



        </div>

        <div className="skills_div">
            <h3 className="sub_head">Skills</h3>
            <div className="skills_bar_sec">
                <div className="Lang_skills">
                    <div className="Lang_sec"><h4 className="Head">Languages</h4>

                    </div>
                    <div className="lang_bar">
                        <SkillBar style={{ width: "50%" }} barName="C++" />
                        <SkillBar style={{ width: "45%" }} barName="JAVA" />
                        <SkillBar style={{ width: "70%" }} barName="JAVASCRIPT" />
                        <SkillBar style={{ width: "60%" }} barName="PYTHON" />
                    </div>
                </div>
                <div className="Web_skills">
                    <div className="Web_sec"><h4 className="Head">Web<br /> Devlopment</h4>

                    </div>
                    <div className="Web_bar">
                        <SkillBar style={{ width: "90%" }} barName="HTML/SASS" />
                        <SkillBar style={{ width: "80%" }} barName="REACT" />
                        <SkillBar style={{ width: "70%" }} barName="JAVASCRIPT" />
                        <SkillBar style={{ width: "50%" }} barName="NODE JS" />
                    </div>
                </div>

                {/* <div className="App_skill">
                <div className="App_sec"><h4 className="Head">App<br /> Devlopment</h4>
                    <div className="App_bar">
                        <SkillBar barName="REACT NATIVE" />

                    </div>
                </div>
            </div> */}
                <div className="Db_skills">
                    <div className="Db_sec"><h4 className="Head">Database</h4>

                    </div>
                    <div className="Db_bar">
                        <SkillBar style={{ width: "60%" }} barName="MongoDB" />
                        <SkillBar style={{ width: "40%" }} barName="MYSql" />
                        <SkillBar style={{ width: "50%" }} barName="FIREBASE" />

                    </div>
                </div>
                <div className="U_skills">
                    <div className="U_sec"><h4 className="Head">UI/UX</h4>

                    </div>
                    <div className="U_bar">
                        <SkillBar style={{ width: "70%" }} barName="FIGMA" />
                        <SkillBar style={{ width: "80%" }} barName="ADOBE ILUSTRATOR" />
                        <SkillBar style={{ width: "30%" }} barName="ADOBE PHOTOSHOP" />

                    </div>
                </div>
                <div className="Other_skills">
                    <div className="Other_sec"><h4 className="Head">Other Skills</h4>

                    </div>
                    <div className="Other_bar">
                        <SkillBar barName="Data Structures and algorithams" style={{ width: "60%" }} />
                        <SkillBar barName="React Native" style={{ width: "50%" }} />
                        <SkillBar barName="Linux" style={{ width: "50%" }} />
                        <SkillBar barName="Networking" style={{ width: "50%" }} />

                    </div>
                </div>

            </div>
        </div>
    </section>)
}


export default About