import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Zoom from 'react-reveal/Zoom';
import "./Header.css"

export default function Header() {
    return (
        <div>
            <Zoom>
                <header className="container-fluid header">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Morenita</h1>
                            <h1 className="nestedHeading">1953</h1>
                        </div>
                    </div>
                </header>
            </Zoom>
        </div>
    )
}
