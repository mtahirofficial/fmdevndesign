import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faThumbsUp, faEnvelope, faBars, faProjectDiagram, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faServicestack } from "@fortawesome/free-brands-svg-icons";

import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-expand-lg navbarBGC">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img className="ml-5 logo" src="./images/fmdevndesign-logo.png" alt="Logo" height="100px" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><FontAwesomeIcon icon={faBars} className="togglebar" /> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto ul">
                <li className="nav-item mr-2 shadow rounded">
                  <Link smooth className="nav-link btn btn-sm btn-info rounded btnhome" to="/"><FontAwesomeIcon className="text-right" icon={faHome} /> Home</Link>
                </li>
                <li className="nav-item mr-2 shadow rounded">
                  <Link smooth className="nav-link btn btn-sm btn-info rounded btnservices" to="/#services"><FontAwesomeIcon className="text-right" icon={faServicestack} /> Services</Link>
                </li>
                <li className="nav-item mr-2 shadow rounded">
                  <Link smooth className="nav-link btn btn-sm btn-info rounded btnprojects" to="/#projects"><FontAwesomeIcon className="text-right" icon={faProjectDiagram} /> Projects</Link>
                </li>
                <li className="nav-item mr-2 shadow rounded">
                  <Link smooth className="nav-link btn btn-sm btn-info rounded btntestimonials" to="/#testimonials"><FontAwesomeIcon className="text-right" icon={faThumbsUp} /> Testimonials</Link>
                </li>
                <li className="nav-item mr-2 shadow rounded">
                  <Link smooth className="nav-link btn btn-sm btn-info rounded btncontactus" to="/#contactus"><FontAwesomeIcon className="text-right" icon={faEnvelope} /> Contact US</Link>
                </li>
                <li className="nav-item mr-2 shadow rounded">
                  <Link smooth className="nav-link btn btn-sm btn-info rounded btnservices" to="/courses"><FontAwesomeIcon className="text-right" icon={faChalkboardTeacher} /> Taining Programms</Link>
                </li>

              </ul>

            </div>
          </div>
        </nav>



      </div>
    )
  }
}

export default Header;
