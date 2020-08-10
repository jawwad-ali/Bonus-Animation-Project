import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./BigPicture.css"
import BigProfilePicture from "./../../images/BigPicture.jpg"
import Fade from 'react-reveal/Fade';

export default function BigPicture() {
    return (
        <div className="container-fluid px-0">
            <div className="row no-gutters">
                <div className="col-lg-12">
                    <Fade duration={1200} top>
                        <img className="BigProfilePic" src={BigProfilePicture} alt="" />
                    </Fade>
                </div>
            </div>
        </div>
    )
}
