import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"


class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    {/* <!-- Footer --> */}
                    <footer className="footer">

                        {/* <!-- Footer Elements --> */}
                        <div className="container">

                            {/* <!-- Grid row--> */}
                            <div className="row">

                                {/* <!-- Grid column --> */}
                                <div className="col-md-12 py-5">
                                    <div className="flex-center brands text-center">

                                        {/* <!-- Whatsapp --> */}
                                        <a href="https://api.whatsapp.com/send?phone=923078185388" rel="noopener noreferrer" className="facebook" target="_blank"><FontAwesomeIcon icon={faWhatsapp} />
                                        </a>
                                        {/* <!-- Facebook --> */}
                                        <a href="https://www.facebook.com/FMDevAndDesigne" rel="noopener noreferrer" className="facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                        {/* <!-- Twitter --> */}
                                        <a href="https://twitter.com/MuhammadTahirUA" rel="noopener noreferrer" className="twitter" target="_blank">
                                        <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                        
                                        {/* <!--Linkedin --> */}
                                        <a href="https://www.linkedin.com/in/muhammad-tahir-876470151/" rel="noopener noreferrer" className="linkedin" target="_blank">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                        {/* <!--Instagram--> */}
                                        <a href="https://www.instagram.com/tahir_fmd/" rel="noopener noreferrer" className="instagram" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                       
                                        
                                    </div>
                                </div>
                                {/* <!-- Grid column --> */}

                            </div>
                            {/* <!-- Grid row--> */}

                        </div>
                        {/* <!-- Footer Elements --> */}

                        {/* <!-- Copyright --> */}
                        <div className="copyright text-center py-3">© {new Date().getFullYear()} Copyright: &nbsp;
                            <Link className="btnfmdevndesign btn btn-info" to="/">
                            <img src="./Icons/fm black.svg" className="fm-svg" alt="Website Development" /> fm dev<span className="n">n</span>design</Link>
                        </div>
                        {/* <!-- Copyright --> */}

                    </footer>
                    {/* <!-- Footer --> */}



                </div>
            </div>
        )
    }
}

export default Footer;
