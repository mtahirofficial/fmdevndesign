import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointUp, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default class Courses extends Component {
    render() {
        return (
            <div className="courses">
                <div className="container pb-5">
                    <h1 className="text-center courses-heading">Our Courses</h1>
                    <div className="row">
                        <div className="col-sm-4">
                        </div>
                        <div className="col-sm-4">
                            <Link to="/apply" className="btn mt-3 mb-3 col-sm-12 col-md-12 col-lg-12 apply">Apply online <FontAwesomeIcon icon={faHandPointUp} /></Link>
                            {/* <Link to="/apply" className="btn btn-info shadow btnApply mt-3 mb-3">Apply Online <FontAwesomeIcon icon={faHandPointUp} /></Link> */}
                        </div>
                        <div className="col-sm-4">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="card" style={{ width: 'auto', margin: '5px' }}>
                                <div className="card-image">
                                    <img src="./Icons/laptop-code-solid.svg" className="card-img-top" alt="Website Development" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Website Development</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/courses/web" className="btn btn-info shadow btnApply">More Details <FontAwesomeIcon icon={faQuestion} /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card" style={{ width: 'auto', margin: '5px' }}>
                                <div className="card-image">
                                    <img src="./Icons/paint-brush-solid.svg" className="card-img-top" alt="Graphic Designing" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Graphic Designing</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/courses/GD" className="btn btn-info shadow btnApply">More Details <FontAwesomeIcon icon={faQuestion} /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card" style={{ width: 'auto', margin: '5px' }}>
                                <div className="card-image">
                                    <img src="./Icons/paint-brush-solid.svg" className="card-img-top" alt="IT Essentials" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">IT Essentials</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/courses/ITE" className="btn btn-info shadow btnApply">More Details <FontAwesomeIcon icon={faQuestion} /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card" style={{ width: 'auto', margin: '5px' }}>
                                <div className="card-image">
                                    <img src="./Icons/laptop.svg" className="card-img-top" alt="CCA" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">C.C.A</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/courses/CCA" className="btn btn-info shadow btnApply">More Details <FontAwesomeIcon icon={faQuestion} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}