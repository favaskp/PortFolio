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
                <div className="nav-links"><a href="#home">Home</a></div>
            </div>
            <div className="nav-menus">
                <div className="nav-links"><a href="#about">About</a></div>
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