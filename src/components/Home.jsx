import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="banner" id="banner">
                    <img className="img-fluid banner-img" src="./images/1.jpg" alt="Logo" />
                    <div className="caption">
                        <h1 className="text-capitalize">Let's discuss your project!</h1>
                        <h2 className="text-capitalize">You imagine, we create</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home; 