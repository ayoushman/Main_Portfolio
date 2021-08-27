import React from "react"
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import NavComponent from "./NavCom"
import "../css/NavBar.css"


const Navbar = () => {

    return (
        <div className="Navbar_div">
            <ui className="NavList">
                <Link activeClass="active" smooth={true} to="Home"> <NavComponent LinkName="Home" /></Link>
                <Link activeClass="active" smooth={true} to="Services">  <NavComponent LinkName="Services" /></Link>
                <Link activeClass="active" smooth={true} to="About"> <NavComponent LinkName="About" /></Link>
                <Link activeClass="active" smooth={true} to="Projects"> <NavComponent LinkName="Projects" /></Link>
                <Link activeClass="active" smooth={true} to="Contact"> <NavComponent LinkName="Contact Me" /></Link>
            </ui>

        </div>)


}


export default Navbar