import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AboutIntro.css"
import Flip from 'react-reveal/Flip';

export default function AboutIntro() {
    return (
        <div className="container-fluid aboutIntro">
            <div className="row">
                <div className="col-lg-12">
                    <Flip left duration={1800}>
                        <div className="headerTextDiv">
                            <p className="headerText">
                                Morenita, the classic llaüt of 1953, is a chipironera, a squid fishing boat. Now transformed into traditional
                                Balearic boat, Morenita is ideal for bathing in the coves of the Menorcan coast.
                        </p>
                        </div>
                    </Flip>
                    <Flip right duration={1800}>
                        <div className="headerTextDiv margin-top-rev">
                            <p className="headerText">
                                Teo has restored the boat, he is a passionate craftsman, he offers Morenita to rent.
                            </p>
                        </div>
                    </Flip>
                </div>
            </div>
        </div>
    )
}
