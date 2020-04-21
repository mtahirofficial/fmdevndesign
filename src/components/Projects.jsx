import React, { Component } from "react";

class Projects extends Component {
    render() {
        return (
            <div className="projects" id="projects">
                <div className="container pt-5 pb-5">
                    <h1 className="text-center projects-heading">Our Recent Projects</h1>
                    <p className="text-center mb-0 pb-5">Best Websites and Graphic Designs</p>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img className="d-block w-100" src="./images/fmdevndesign-logo.png" alt="First slide" />
                                    </div>
                                    <div className="col-sm-4">
                                        <img className="d-block w-100" src="./images/smg.png" alt="First slide" />
                                    </div>
                                    <div className="col-sm-4">
                                        <img className="d-block w-100" src="./images/UNA.png" alt="First slide" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                            <div className="row">
                                    <div className="col-sm-4">
                                        <img className="d-block w-100" src="./images/smg.png" alt="First slide" />
                                    </div>
                                    <div className="col-sm-4">
                                        <img className="d-block w-100" src="./images/UNA.png" alt="First slide" />
                                    </div>
                                    <div className="col-sm-4">
                                        <img className="d-block w-100" src="./images/fmdevndesign-logo.png" alt="First slide" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                            <div className="row">
                                    <div className="col-sm-4">
                                        <img className="d-block w-100" src="./images/UNA.png" alt="First slide" />
                                    </div>
                                    <div className="col-sm-4">
                                        <img className="d-block w-100" src="./images/fmdevndesign-logo.png" alt="First slide" />
                                    </div>
                                    <div className="col-sm-4">
                                        <img className="d-block w-100" src="./images/smg.png" alt="First slide" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Projects; 