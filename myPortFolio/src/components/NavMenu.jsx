import { Link } from "react-scroll"
import "./NavMenu.css"


const NavMenu = ()=>{

    return(
        <>
        <menu className="nav-parent">
            <div className="logo-main">
                <div>
                    <img src="https://" id="logo-img" />
                </div>
            </div>
            <div className="nav-menus">
                <div className="nav-links">
                    <Link className="linkto" to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </div>
            </div>
            <div className="nav-menus">
                <div className="nav-links">
                    <Link className="linkto" to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </div>
            </div>
            <div className="nav-menus">
                <div className="nav-links"><a href="#projects">Projects</a></div>
            </div>
            <div className="nav-menus">
                <div className="nav-links"><a href="#resume">Resume</a></div>
            </div>
        </menu>
        </>
    )
}

export default NavMenu