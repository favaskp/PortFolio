import RightImg from "../assets/background_img.jpg"


const Details = ()=>{
    return(
        <>
        <div id="home" className="main-details">
            <div className="home-details">
                <div className="home-leftside">
                    <div>
                        <p>HI <span>THERE!</span>,</p>
                        <p>I&apos;M MOHAMMED FAVAS KP </p>
                        <p><span>Frontend</span> Developer </p>
                    </div>
                </div>
                <div className="home-rightside">
                    <div className="home-rightimg">
                        <img src={RightImg} alt="No Image Found"/>
                    </div>
                </div>
            </div>
        </div>
        <div id="about" className="main-details2">
            Hi22
        </div>
        </>
    )
}

export default Details