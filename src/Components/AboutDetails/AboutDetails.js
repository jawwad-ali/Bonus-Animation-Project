import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AboutDetails.css"
import AboutDetailsOne from "./../../images/aboutDetailsOne.jpg"
import AboutDetailsTwo from "./../../images/aboutDetailsTwo.jpg"
import Slide from 'react-reveal/Slide';

export default function AboutDetails() {
    return (
        <div className="container-fluid px-0">
            <div className="row no-gutters">
                <Slide left>
                    <div className="col-lg-6 ">
                        <img className="aboutImg" src={AboutDetailsOne} alt="About section" />
                    </div>
                </Slide>
                <div className="col-lg-6 aboutDetailsList display-flex">
                    <Slide right>
                        <ul>
                            <li> <span className="label">License</span>  <span className="ans">License required</span> </li>
                            <li> <span className="label">Capacity</span>  <span className="ans">6 Persons</span> </li>
                            <li> <span className="label">Length</span>  <span className="ans">7m</span> </li>
                            <li> <span className="label">Engine</span>  <span className="ans font-size-small">2018 Mitsubishi Sole 30CV Diesel</span> </li>
                        </ul>
                    </Slide>
                </div>
                <div className="col-lg-6 aboutDetailsList display-flex secondDiv">
                    <Slide left>
                        <ul>
                            <li> <span className="label">June - Sept</span>  <span className="ans">250 € / 4h  400 € / 8h</span> </li>
                            <li> <span className="label">July - Aug</span>  <span className="ans">350 € / 4h 500 € / 8h</span> </li>
                        </ul>
                        <span className="smallText">
                            <p>
                                Fuel included Skipper on request
                            </p>
                        </span>
                    </Slide>
                </div>
                <div className="col-lg-6 display-flex-reverse">
                    <Slide right>
                        <img src={AboutDetailsTwo} alt="About section" className="aboutImg" />
                    </Slide>
                </div>
            </div>
        </div>
    )
}
