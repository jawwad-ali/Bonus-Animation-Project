import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css"
import Roll from 'react-reveal/Roll';

export default function Contact() {
    return (
        <div className="container-fluid contactUs">
            <div className="row">
                <div className="offset-lg-1 col-lg-2  contactLeftDiv">
                    <Roll left>
                        <h4> Access</h4>
                    </Roll>
                </div>
                <div className="col-lg-3 contactUsName">
                    <span>
                        <Roll top>
                            <p className="contactUsText">
                                Llatinaboats <br />
                            Fornells Port <br />
                            Menorca <br />
                            </p>
                        </Roll>
                    </span>
                </div>
                <div className="col-lg-6 rightDiv">
                    <Roll right>
                        <div className="contactNumber"> <p>  +34  678  23  94  87</p> </div>
                        <div style={{ marginTop: "50px" }} className="emailAddress">Ilatinaboats@gmail.com</div>
                        <div style={{ marginTop: "150px" }} className="socailSite">Instagram</div>
                    </Roll>
                </div>
            </div>
        </div>
    )
}
