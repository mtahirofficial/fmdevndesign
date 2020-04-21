import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

class Services extends Component {
    render() {
        return (
            <div className="services" id="services">
                <div className="container pt-5 pb-5">
                    <h1 className="text-center services-heading">Our Services</h1>
                    <p className="text-center mb-0 p-3">Our Professional have 3 Years Experience in Development and Designing. We Provide Perfect Branding Solution to Your Business.</p>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card" style={{ width: 'auto', margin: '5px' }}>
                                <div className="card-image">
                                    <img src="./Icons/laptop-code-solid.svg" className="card-img-top" alt="Website Development" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Website Development</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/web-development" className="btn btn-info shadow btnViewDetails">View Details <FontAwesomeIcon icon={faCaretRight} /></Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-4">
                            {/* <div className="card" style={{ width: 'auto', margin: '5px' }}>
                            <div className="card-image">
                            <img src="./Icons/mobile-alt-solid.svg" className="card-img-top" alt="Mobile App Development" />
                                </div>
                                
                                <div className="card-body">
                                    <h5 className="card-title">Mobile App Development</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/mobile-app-development" className="btn btn-info shadow btnViewDetails">View Details <FontAwesomeIcon icon={faCaretRight} /></Link>
                                </div>
                            </div> */}

                        </div>
                        
                        <div className="col-sm-4">
                            <div className="card" style={{ width: 'auto', margin: '5px' }}>
                            <div className="card-image">
                            <img src="./Icons/paint-brush-solid.svg" className="card-img-top" alt="Graphic Designing" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Graphic Designing</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/graphic-designing" className="btn btn-info shadow btnViewDetails">View Details <FontAwesomeIcon icon={faCaretRight} /></Link>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        )
    }
}

export default Services; 