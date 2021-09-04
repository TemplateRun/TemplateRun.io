import React from 'react'
import "./styles.css";
import vid from "../../../videos/header.mp4"
import Typewriter  from 'typewriter-effect';

const Header = () => {
    return (
        <div className="hero-container">
            <div className="hero-bg">
                <video className='vid' autoPlay loop muted>
                    <source src={vid} type="video/mp4"/>
                </video>
            </div>
            <div className="hero-content">
                
                <h1>Welcome to 
                <Typewriter  options={{
                autoStart: true,
                loop: true,
                }}
                className="typewriter"
                    onInit={(typewriter) => 
                        typewriter.typeString("TemplateRun!")
                        .pauseFor(2000)
                        .deleteAll()
                        .start()
                    }
                /></h1>
                <p>TemplateRun is an open source organization which provides the premium website templates for free</p>
            </div>
        </div>
    )
}

export default Header;
