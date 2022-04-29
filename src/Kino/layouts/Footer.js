import { Component } from "react";
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';


class Footer extends Component {
    render() {
        return (
            <div className="container-fluid   p-5 " style={{ marginTop: "570px", backgroundColor: "#151515" }} >
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-9">
                                  <h4 className="mt-2" style={{color: "#FFA238"}}>Subscribe to our syatdi social networks</h4>  
                            </div>

                            <div className="col-lg-3 d-flex">
                                <h2 style={{color: "#FFA238"}} ><BsFacebook /></h2>
                                <h2 className="ms-4" style={{color: "#FFA238"}}><BsInstagram /></h2>
                                <h2 className="ms-4" style={{color: "#FFA238"}}><BsTelegram /></h2>
                                <h2 className="ms-4" style={{color: "#FFA238"}}><BsYoutube /></h2>
                                <h2 className="ms-4" style={{color: "#FFA238"}}><BsTwitter /></h2>
                                <h2 className="ms-4 " style={{color: "#FFA238"}}><BsGoogle /></h2>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default Footer;