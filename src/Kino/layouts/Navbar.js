import React from "react";
import { Button, Offcanvas } from 'react-bootstrap';
;




class Navbar extends React.Component {
    render() {
        return (
            <div className="container-fluid p-3 " style={{ backgroundColor: "#151515" }}>
                <div className="row">
                    <div className="col-lg-12 p-3 d-flex">
                        <h2 className="ms-5" style={{ color: "#FFA238" }}>TV .</h2>
                        <h2 className="ms-2" style={{ color: "white" }}>SCORP</h2>
                    </div>

                </div>


            </div>
        );
    }

}

export default Navbar;