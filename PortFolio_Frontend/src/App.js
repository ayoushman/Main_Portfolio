import React from 'react'

import "./css/App.css"
import Navbar from './sections/components/files/NavBar'
import Home from "./sections/files/Home"
import Sicons from './sections/components/files/SocialIcons'
import { Services } from './sections/files/Services'
import About from './sections/files/About'
import Projects from './sections/files/Projects'
import Contact from './sections/files/Contact'


const App = () => {

    return (
        <div className="App">
            <div id="Home" className="home_sec"><Navbar />

                <Home />
                <Sicons />
            </div>
            <Services />
            <About />
            <Projects />
            <Contact />
        </div>)

}


export default App;