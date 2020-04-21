import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from 'react-router-hash-link';

import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import Projects from "./Projects";

class LandingPage extends Component {
    render() {

        return (

            <div>
                <Home />
                {/* <ScrollableAnchor id={'services'}> */}
                <Services id={'services'} />
                {/* </ScrollableAnchor> */}
                {/* <ScrollableAnchor id={'projects'}> */}
                <Projects id={'projects'} />
                {/* </ScrollableAnchor> */}
                {/* <ScrollableAnchor id={'contactus'}> */}
                <Contact id={'contact'} />
                {/* </ScrollableAnchor> */}
                <Link smooth to="/#banner" className="goToTop"><FontAwesomeIcon className="text-center" icon={faAngleUp} /></Link>
            </div>
        )
    }
}

export default LandingPage;